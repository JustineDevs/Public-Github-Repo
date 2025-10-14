# Git Commit Automation Guide

This repository includes automated scripts for efficient git commit management with parallel processing capabilities.

## Quick Start

### Using NPM Scripts (Recommended)

```bash
# Preview what will be committed (safe to run)
npm run commit:dry

# Commit all changes with parallel processing
npm run commit

# Use shell script version (faster, no Node.js required)
npm run commit:sh

# Traditional single commit for all changes
npm run commit:all
```

### Direct Script Usage

```bash
# Node.js version (more features)
node scripts/parallel-commit.js --dry-run
node scripts/parallel-commit.js

# Bash version (faster, cross-platform)
bash scripts/parallel-commit.sh --dry-run
bash scripts/parallel-commit.sh
```

## What the Scripts Do

1. **Scan for Changes**: Automatically detects all modified, added, or deleted files
2. **Generate Commit Messages**: Creates contextual commit messages based on file changes
3. **Parallel Processing**: Commits multiple files simultaneously for speed
4. **Smart Filtering**: Excludes build artifacts, logs, and temporary files
5. **Space-Safe Handling**: Properly handles files and directories with spaces using double quotes
6. **Error Handling**: Continues processing even if individual commits fail

## Commit Message Examples

The scripts generate intelligent commit messages:

- `feat: add README.md` - New file added
- `update: modify scripts/parallel-commit.js` - File modified
- `remove: delete old-file.txt` - File deleted
- `refactor: rename component.js in src/components` - File renamed with context

## Configuration

### Adjust Concurrency
```bash
# Limit to 3 concurrent commits
bash scripts/parallel-commit.sh --max 3
```

### Exclude Files
Edit the `excludePatterns` in `scripts/parallel-commit.js`:
```javascript
excludePatterns: [
  'node_modules/**',
  '.git/**',
  '*.log',
  '*.tmp',
  '.DS_Store',
  'Thumbs.db'
]
```

## Workflow Examples

### Daily Development
```bash
# 1. Make your changes
# 2. Preview what will be committed
npm run commit:dry

# 3. Commit all changes
npm run commit

# 4. Push to remote
git push
```

### Large Refactoring
```bash
# For many files, use limited concurrency
bash scripts/parallel-commit.sh --max 2

# Or commit everything at once
npm run commit:all
```

### Safe Testing
```bash
# Always test first with dry run
npm run commit:dry

# Then commit for real
npm run commit
```

## Troubleshooting

### Common Issues

1. **Script not found**: Make sure you're in the repository root
2. **Permission denied**: Run `chmod +x scripts/parallel-commit.sh`
3. **Node.js not found**: Use the bash version instead
4. **No changes**: Script will tell you if there's nothing to commit

### Performance Tips

- Use `--max 3` for slower systems
- Use `npm run commit:all` for bulk changes
- Always run `--dry-run` first to preview

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run commit` | Commit all changes with parallel processing |
| `npm run commit:dry` | Preview what would be committed |
| `npm run commit:sh` | Use bash script version |
| `npm run commit:sh:dry` | Bash script dry run |
| `npm run commit:all` | Single commit for all changes |
| `npm run commit:auto` | Auto-commit with limited concurrency |
| `npm run status` | Show git status |
| `npm run changes` | Show changed files |
| `npm run staged` | Show staged files |

## Benefits

- **Speed**: Parallel processing commits multiple files simultaneously
- **Intelligence**: Automatic commit message generation
- **Safety**: Dry-run mode prevents accidental commits
- **Flexibility**: Multiple options for different use cases
- **Cross-platform**: Works on Windows, macOS, and Linux

For detailed documentation, see `scripts/README.md`.
