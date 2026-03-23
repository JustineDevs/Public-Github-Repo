# commit CLI

Composable CLI for git commits with security checks. Commands: commit (default), security, linear (optional).

## Commands

- **commit** (default): Parallel commit with security checks
- **security**: Scan for sensitive files only
- **linear**: Print Linear issue trailer (requires `linear` CLI on PATH)

## Usage

```bash
# From repo root (E-commerce Website/)
npm run commit # commit (default)
npm run commit:dry # commit --dry-run
npm run security:check # security
npm run commit:cli # show usage

# Direct CLI
node scripts/commit/cli/index.js [command] [options]
```

## Options (commit)

- `--dry-run`: Preview without committing
- `--no-security-check`: Disable security checks (not recommended)
- `--warn-only`: Warn on sensitive files, do not fail
- `--max <n>`: Max concurrent commits (default: 5)

## Linear Integration

When `linear` CLI is installed, use `linear issue id` to resolve the current issue from the branch name (e.g. `feature/ENG-123`).

```bash
node scripts/commit/cli/index.js linear
# Output: Linear-issue: ENG-123
```

## NO_COLOR

Respects `NO_COLOR` for CI and accessibility.
