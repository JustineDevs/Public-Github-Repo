#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

// Configuration
const config = {
  maxConcurrentCommits: 5, // Maximum number of parallel commits
  commitMessagePrefix: 'feat', // Default commit message prefix
  dryRun: false, // Set to true to see what would be committed without actually committing
  excludePatterns: [
    'node_modules/**',
    '.git/**',
    '*.log',
    '*.tmp',
    '.DS_Store',
    'Thumbs.db'
  ]
};

// Utility functions
function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function getChangedFiles() {
  try {
    const output = execSync('git status --porcelain', { encoding: 'utf8' });
    return output
      .split('\n')
      .filter(line => line.trim())
      .map(line => {
        const status = line.substring(0, 2);
        const file = line.substring(3);
        return { status, file };
      })
      .filter(({ file }) => {
        // Filter out excluded patterns
        return !config.excludePatterns.some(pattern => {
          const regex = new RegExp(pattern.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*'));
          return regex.test(file);
        });
      })
      .map(({ status, file }) => {
        // Handle files with spaces by ensuring proper quoting
        // Remove any existing quotes and re-add them properly
        const cleanFile = file.replace(/^["']|["']$/g, '');
        return { status, file: cleanFile };
      });
  } catch (error) {
    log('Error getting git status:', 'red');
    log(error.message, 'red');
    process.exit(1);
  }
}

function getCommitMessage(file, status) {
  const fileName = path.basename(file);
  const fileExt = path.extname(file);
  const dirName = path.dirname(file).split('/').pop();
  
  // Generate contextual commit message based on file type and status
  let message = '';
  
  if (status.includes('A')) {
    message = `feat: add ${fileName}`;
  } else if (status.includes('M')) {
    message = `update: modify ${fileName}`;
  } else if (status.includes('D')) {
    message = `remove: delete ${fileName}`;
  } else if (status.includes('R')) {
    message = `refactor: rename ${fileName}`;
  } else {
    message = `chore: update ${fileName}`;
  }
  
  // Add directory context if meaningful
  if (dirName && dirName !== '.' && !dirName.includes('.')) {
    message += ` in ${dirName}`;
  }
  
  return message;
}

function commitFile(file, status) {
  return new Promise((resolve, reject) => {
    const commitMessage = getCommitMessage(file, status);
    
    if (config.dryRun) {
      log(`[DRY RUN] Would commit: "${file}" - "${commitMessage}"`, 'yellow');
      resolve({ file, success: true, message: commitMessage });
      return;
    }
    
    try {
      // Add the specific file with proper quoting for spaces
      execSync(`git add "${file}"`, { stdio: 'pipe' });
      
      // Commit the file with proper quoting for the message
      execSync(`git commit -m "${commitMessage}"`, { stdio: 'pipe' });
      
      log(`✅ Committed: "${file}"`, 'green');
      resolve({ file, success: true, message: commitMessage });
    } catch (error) {
      log(`❌ Failed to commit "${file}": ${error.message}`, 'red');
      reject({ file, success: false, error: error.message });
    }
  });
}

function processCommitsInBatches(files) {
  const batches = [];
  for (let i = 0; i < files.length; i += config.maxConcurrentCommits) {
    batches.push(files.slice(i, i + config.maxConcurrentCommits));
  }
  
  return batches.reduce((promise, batch, batchIndex) => {
    return promise.then(() => {
      log(`\n📦 Processing batch ${batchIndex + 1}/${batches.length} (${batch.length} files)`, 'cyan');
      
      const promises = batch.map(({ file, status }) => commitFile(file, status));
      
      return Promise.allSettled(promises).then(results => {
        const successful = results.filter(r => r.status === 'fulfilled' && r.value.success).length;
        const failed = results.filter(r => r.status === 'rejected' || (r.status === 'fulfilled' && !r.value.success)).length;
        
        log(`Batch ${batchIndex + 1} completed: ${successful} successful, ${failed} failed`, 
            failed > 0 ? 'yellow' : 'green');
        
        return results;
      });
    });
  }, Promise.resolve());
}

function showSummary(results) {
  const allResults = results.flat();
  const successful = allResults.filter(r => r.status === 'fulfilled' && r.value.success);
  const failed = allResults.filter(r => r.status === 'rejected' || (r.status === 'fulfilled' && !r.value.success));
  
  log('\n📊 Summary:', 'bright');
  log(`Total files processed: ${allResults.length}`, 'blue');
  log(`Successfully committed: ${successful.length}`, 'green');
  log(`Failed: ${failed.length}`, failed.length > 0 ? 'red' : 'green');
  
  if (failed.length > 0) {
    log('\n❌ Failed files:', 'red');
    failed.forEach(result => {
      const file = result.status === 'fulfilled' ? result.value.file : result.reason.file;
      const error = result.status === 'fulfilled' ? result.value.error : result.reason.error;
      log(`  - "${file}": ${error}`, 'red');
    });
  }
}

// Main execution
async function main() {
  log('🚀 Parallel Git Commit Script', 'bright');
  log('================================', 'bright');
  
  // Parse command line arguments
  const args = process.argv.slice(2);
  if (args.includes('--dry-run')) {
    config.dryRun = true;
    log('🔍 DRY RUN MODE - No actual commits will be made', 'yellow');
  }
  
  if (args.includes('--help') || args.includes('-h')) {
    log('\nUsage: node parallel-commit.js [options]', 'cyan');
    log('Options:', 'cyan');
    log('  --dry-run    Show what would be committed without actually committing', 'cyan');
    log('  --help, -h   Show this help message', 'cyan');
    log('\nConfiguration:', 'cyan');
    log(`  Max concurrent commits: ${config.maxConcurrentCommits}`, 'cyan');
    log(`  Commit message prefix: ${config.commitMessagePrefix}`, 'cyan');
    log(`  Exclude patterns: ${config.excludePatterns.join(', ')}`, 'cyan');
    return;
  }
  
  try {
    // Check if we're in a git repository
    execSync('git rev-parse --git-dir', { stdio: 'pipe' });
  } catch (error) {
    log('❌ Not in a git repository!', 'red');
    process.exit(1);
  }
  
  // Get changed files
  log('\n🔍 Scanning for changed files...', 'blue');
  const changedFiles = getChangedFiles();
  
  if (changedFiles.length === 0) {
    log('✅ No changes to commit', 'green');
    return;
  }
  
  log(`Found ${changedFiles.length} changed files:`, 'blue');
  changedFiles.forEach(({ file, status }) => {
    const statusIcon = status.includes('A') ? '🆕' : 
                      status.includes('M') ? '📝' : 
                      status.includes('D') ? '🗑️' : 
                      status.includes('R') ? '🔄' : '❓';
    log(`  ${statusIcon} "${file}" (${status})`, 'blue');
  });
  
  // Process commits
  log(`\n⚡ Processing commits (max ${config.maxConcurrentCommits} concurrent)...`, 'cyan');
  const results = await processCommitsInBatches(changedFiles);
  
  // Show summary
  showSummary(results);
  
  if (!config.dryRun && results.flat().some(r => r.status === 'fulfilled' && r.value.success)) {
    log('\n🎉 All commits completed!', 'green');
  }
}

// Handle uncaught errors
process.on('uncaughtException', (error) => {
  log(`\n💥 Uncaught Exception: ${error.message}`, 'red');
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  log(`\n💥 Unhandled Rejection: ${reason}`, 'red');
  process.exit(1);
});

// Run the script
if (require.main === module) {
  main().catch(error => {
    log(`\n💥 Script failed: ${error.message}`, 'red');
    process.exit(1);
  });
}

module.exports = { main, getChangedFiles, commitFile, config };
