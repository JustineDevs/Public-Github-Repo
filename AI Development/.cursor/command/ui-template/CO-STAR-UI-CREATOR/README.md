# CO-STAR UI Creator — Setup & Usage Guide

A structured prompt system for building React/Next.js UIs with modern component registries (shadcn, Magic UI, Aceternity, etc.). Use this guide to set up and use the CO-STAR prompts in your IDE.

---

## Plug & play — copy, paste, go

### Just get the folder (fastest & simplest)
1. **Open your terminal** (Bash or PowerShell) **inside your project folder** (where you want `.cursor/` to live).
2. **Copy and paste** one block below and run it.

**Mac / Linux (Bash):**

```bash
# 1. Download only that specific folder
git clone --depth 1 --filter=blob:none --sparse https://github.com/JustineDevs/Public-Github-Repo.git
cd Public-Github-Repo
git sparse-checkout set "AI Development/.cursor/command/ui-template/CO-STAR-UI-CREATOR"
# 2. Move files to your project and clean up
mkdir -p ../.cursor/command ../.cursor/rules
cp "AI Development/.cursor/command/ui-template/CO-STAR-UI-CREATOR/ui.md" "../.cursor/command/"
cp -r "AI Development/.cursor/command/ui-template/CO-STAR-UI-CREATOR" "../.cursor/rules/"
cd .. && rm -rf Public-Github-Repo
```

**Windows (PowerShell):**

```powershell
# 1. Download only that specific folder
git clone --depth 1 --filter=blob:none --sparse https://github.com/JustineDevs/Public-Github-Repo.git
cd Public-Github-Repo
git sparse-checkout set "AI Development/.cursor/command/ui-template/CO-STAR-UI-CREATOR"
# 2. Move files to your project and clean up
New-Item -ItemType Directory -Force -Path "..\.cursor\command", "..\.cursor\rules" | Out-Null
Copy-Item "AI Development\.cursor\command\ui-template\CO-STAR-UI-CREATOR\ui.md" "..\.cursor\command\"
Copy-Item -Recurse "AI Development\.cursor\command\ui-template\CO-STAR-UI-CREATOR" "..\.cursor\rules\"
cd ..; Remove-Item -Recurse -Force Public-Github-Repo
```

**What this does:**

1. **Snatched the folder** — Grabs only that directory from GitHub (no full repo).
2. **Placed it correctly** — Creates `.cursor/command` and `.cursor/rules` in **your project** and puts the files there.
3. **Self-deleted** — Removes the temporary `Public-Github-Repo` folder so your workspace stays clean.

---

## What's in this folder

| File | Purpose |
|------|---------|
| **ui.md** | **Universal command** — put in **`command/`** only. Invoke with `/ui` or `/ui.md`; AI uses and redirects to files in `rules/CO-STAR-UI-CREATOR/`. |
| **CO-STAR-PROMPT.md** | Main development prompt — keep in `rules/CO-STAR-UI-CREATOR/`. Used when building or implementing UI. |
| **CO-STAR-CREATOR.md** | Guide for creating your own CO STAR prompt — keep in `rules/CO-STAR-UI-CREATOR/`. |
| **AGENT.mdc** | Cursor rule — keep in `rules/CO-STAR-UI-CREATOR/`. Tells the AI to use the prompts correctly. |

---

## Where to put these files

### Cursor (recommended layout)

Put **only `ui.md` in `command/`**. Put the rest of the files in **`rules/CO-STAR-UI-CREATOR/`**. When you invoke `/ui` or `/ui.md`, it automatically uses and redirects to the files in `rules/`.

**File tree:**

```
your-project/
└── .cursor/
    ├── command/
    │   └── ui.md                    ← only this in command; invoke /ui or /ui.md
    └── rules/
        └── CO-STAR-UI-CREATOR/
            ├── AGENT.mdc
            ├── CO-STAR-PROMPT.md
            ├── CO-STAR-CREATOR.md
            └── README.md
```

**Paths:**
- **Command (invoke):** `your-project/.cursor/command/ui.md`
- **Resources (referenced by ui.md):** `your-project/.cursor/rules/CO-STAR-UI-CREATOR/`

**How it works:** When you type `/ui` or `/ui.md`, the command runs `ui.md`. The AI then uses and redirects to the prompts in `rules/CO-STAR-UI-CREATOR/` (CO-STAR-PROMPT.md, CO-STAR-CREATOR.md) as defined in ui.md. No long path — everything is resolved from the command.

**Alternative (all in command):** You can instead keep the full folder under `command/`:

```
your-project/
└── .cursor/
    └── command/
        └── ui-template/
            └── CO-STAR-UI-CREATOR/
                ├── ui.md
                ├── AGENT.mdc
                ├── CO-STAR-PROMPT.md
                ├── CO-STAR-CREATOR.md
                └── README.md
```

Then `/ui` or `/ui.md` still works; the prompts live next to ui.md in the same folder.

---

### VS Code (with Cursor or similar AI)

1. Create `.cursor` in your project root if it doesn't exist.
2. Put **ui.md** in `.cursor/command/ui.md`.
3. Put the rest (AGENT.mdc, CO-STAR-PROMPT.md, CO-STAR-CREATOR.md, README.md) in `.cursor/rules/CO-STAR-UI-CREATOR/`.
4. Same behavior: `/ui` or `/ui.md` uses and redirects to the rules folder.

---

### Other IDEs (generic)

If your IDE doesn't support `.cursor` rules or commands:

1. **Copy the folder** anywhere in your project (e.g. `docs/prompts/CO-STAR-UI-CREATOR/`).
2. **Reference the prompts manually:**
   - Open `CO-STAR-PROMPT.md` when doing UI development.
   - Copy its contents (or the relevant section) into your AI chat as context.
   - Use `CO-STAR-CREATOR.md` when you want to create a custom CO STAR prompt.
3. **Bookmark the folder** so you can quickly open and paste prompts into your AI assistant.

---

## Invoke the command (short)

With **ui.md** in `.cursor/command/`, use the universal command:

| You type | Result |
|----------|--------|
| **`/ui`** or **`/ui.md`** | Command runs ui.md; AI automatically uses and redirects to the files in `rules/CO-STAR-UI-CREATOR/` (CO-STAR-PROMPT.md or CO-STAR-CREATOR.md). Short — no long path. |

Example: type `/ui` or `/ui.md` in chat, then your request (e.g. "add a pricing section"). The AI routes to the right file in the rules folder and responds without you pasting a long path.

---

## How to use

### For UI development (building components, pages, design systems)

1. Open a chat with your AI assistant in the project.
2. Reference or paste **CO-STAR-PROMPT.md** (or `@CO-STAR-PROMPT.md` in Cursor).
3. Describe what you want to build (e.g. "Add a pricing section using shadcn-style components").
4. The AI will follow the CO-STAR flow: discovery questions → plan → implementation.

### For creating your own CO STAR prompt

1. Open **CO-STAR-CREATOR.md**.
2. Work through the sections (Context, Objective, Style, Tone, Audience, Response format).
3. Fill in your product, design system, and goals.
4. Use the resulting prompt as a custom system prompt or reference in your IDE.

---

## Verifying it works (Cursor)

1. Open your project in Cursor (with ui.md in `.cursor/command/` and CO-STAR-UI-CREATOR in `.cursor/rules/`).
2. Start a new chat.
3. Type **`/ui`** or **`/ui.md`**, then e.g. "Help me add a hero section following the CO-STAR approach."
4. The AI should use ui.md, redirect to the rules folder, and follow the CO-STAR flow (discovery → plan → implementation).

If it doesn’t, reference the prompt directly: `@rules/CO-STAR-UI-CREATOR/CO-STAR-PROMPT.md` or paste the relevant section into the chat.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| AI ignores the CO-STAR flow | Explicitly `@` mention `CO-STAR-PROMPT.md` in your message. |
| Rules not applying | Ensure `AGENT.mdc` has `alwaysApply: true` or the right glob patterns. |
| Wrong folder location | Put **ui.md** in `.cursor/command/ui.md`; put prompts in `.cursor/rules/CO-STAR-UI-CREATOR/`. |
| `/ui` or `/ui.md` not showing | Ensure **ui.md** is at `.cursor/command/ui.md` so the slash command is available. |
| Using a different IDE | Copy prompts manually into your AI chat when needed. |
