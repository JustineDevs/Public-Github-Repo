#!/usr/bin/env node

/**
 * commit CLI - Git commit with parallel processing and security checks.
 * Composable commands: commit, security, linear (optional).
 */

const { parse } = require('./lib/parser');
const { style } = require('./lib/output');

const commands = {
  commit: require('./commands/commit'),
  security: require('./commands/security'),
  linear: require('./commands/linear'),
  help: {
    run: () => {},
    help: () => printUsage(),
  },
};

async function main() {
  const { args, opts } = parse();

  const sub = args[0] && !args[0].startsWith('-') ? args[0] : 'commit';
  const cmd = commands[sub];

  if (!cmd) {
    console.error(`Unknown command: ${args[0] || '(none)'}`);
    printUsage();
    process.exit(1);
  }

  if (opts.help || sub === 'help') {
    cmd.help();
    return;
  }

  try {
    await cmd.run(opts);
  } catch (err) {
    console.error(err.message || err);
    process.exit(1);
  }
}

function printUsage() {
  console.log(`
${style('commit', 'bright')} - Git commit CLI with security checks

Usage: npm run commit [options]     (default: parallel commit)
       npm run commit:dry           (preview)
       npm run security:check       (scan for sensitive files)
       npm run commit:cli           (show this usage)

Commands:
  commit    Parallel commit with security checks (default)
  security  Scan for sensitive files only
  linear    Print Linear issue trailer (requires linear CLI)

Options:
  -h, --help    Show help for command
`);
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = { main, commands };
