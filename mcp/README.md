# MCP Directories

Curated [Model Context Protocol](https://modelcontextprotocol.io/) server entries for **UI libraries and design-system documentation**. Sources include [GitMCP](https://gitmcp.io/) (read-only docs from GitHub) and official **stdio** MCP packages.

## Contents

| File | Purpose |
|------|---------|
| `mcp.json` | Drop-in `mcpServers` block for Cursor (merge into your config). |

## Servers in `mcp.json`

| Server key | Type | What it covers |
|------------|------|----------------|
| `react-bits-mcp-docs` | GitMCP URL | [React Bits](https://reactbits.dev/) — animated React UI components |
| `kokonutui-docs` | GitMCP URL | [Kokonut UI](https://kokonutui.com/) — shadcn registry components |
| `untitled-ui-docs` | GitMCP URL | [Untitled UI React](https://www.untitledui.com/react/components) |
| `cult-ui` | GitMCP URL | [Cult UI](https://www.cult-ui.com/docs) — shadcn extension components |
| `cursify Docs` | GitMCP URL | [Cursify](https://cursify.ui-layouts.com/components) — cursor / pointer effects |
| `sileo Docs` | GitMCP URL | [Sileo](https://sileo.aaryan.design/) — toast / notification UI |
| `uilayouts Docs` | GitMCP URL | [UI Layouts](https://www.ui-layouts.com/) — components and blocks |
| `mantine Docs` | GitMCP URL | [Mantine](https://mantine.dev/) — React component library |
| `ui-layouts-mcp` | stdio (`@ui-layouts/mcp`) | Interactive UI Layouts MCP (local via `npx`) |
| `shadcn` | stdio (`shadcn mcp`) | Official [shadcn/ui](https://ui.shadcn.com/) MCP |

## How to use in Cursor

1. Open your Cursor MCP config (user: `%USERPROFILE%\.cursor\mcp.json` on Windows, or project `.cursor/mcp.json`).
2. Copy each entry from this file’s `mcpServers` object into your existing `mcpServers` object.
3. Avoid duplicate keys: if you already have `shadcn` or `ui-layouts-mcp`, keep one definition.
4. Restart Cursor or reload MCP so new servers register.

### Merge tip

Paste the inner contents of `mcpServers` from this repo into your config’s `mcpServers`, or use a JSON-aware merge so you do not overwrite unrelated servers (e.g. cloud or API MCPs with secrets).

## Security

- **Do not commit** API keys, Render tokens, or other secrets into this folder. This `mcp.json` is limited to public GitMCP URLs and standard `npx` MCP commands.
- GitMCP endpoints expose repository documentation to the MCP client; they do not replace reading licenses and terms for each project you ship.

## Related repo docs

- [UI-UX Design Tools](../UI-UX%20Design%20Tools/README.md) — links to these products in the browser.
