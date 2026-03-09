# CO-STAR UI Creator — Universal Command

This file is the **universal actual command** for the CO-STAR UI Creator. When invoked, the AI must **decide and weigh** which resource to use based on the user's intent, then apply it.

---

## Your task

**Pre-action (mandatory):** Before doing anything else, **find and locate** where the files referenced in this command live in the user’s workspace:
- **CO-STAR-PROMPT.md**
- **CO-STAR-CREATOR.md**
- **AGENT.mdc** (optional but useful)

Search the project (e.g. `.cursor/rules/CO-STAR-UI-CREATOR/`, `.cursor/commands/ui-template/CO-STAR-UI-CREATOR/`, or elsewhere). Once you have their paths (initial data), **then** proceed with the steps below. Do not skip this step.

1. **Interpret** the user's message or request.
2. **Decide** which of the two resources below applies (and with what priority).
3. **Use** that resource as the source of truth for your response. Do not mix or bypass it.

---

## Decision: which resource to use

| If the user wants to… | Use this | Weight / priority |
|------------------------|----------|--------------------|
| **Build, implement, or change UI** — components, pages, design system, integration with shadcn/Magic UI/etc., refactors, new features | **CO-STAR-PROMPT.md** | Primary. Follow its full flow (discovery → plan → implementation). |
| **Create or customize a CO STAR prompt** — their own prompt, design system, product goals, or CO-STAR template from scratch | **CO-STAR-CREATOR.md** | Primary. Use it to guide them through Context, Objective, Style, Tone, Audience, Response. |
| **Unclear or mixed intent** — e.g. “help with UI and also I want my own prompt” | **Weigh by main ask.** If the main ask is implementation → CO-STAR-PROMPT.md first; if the main ask is “create my prompt” → CO-STAR-CREATOR.md first. Optionally do the second as a follow-up. |

---

## Weighing rules (how to decide)

- **Keywords/signals for CO-STAR-PROMPT.md:** build, implement, add, refactor, component, page, section, design system, shadcn, Tailwind, React, Next.js, hero, dashboard, landing, integrate, copy-paste registry.
- **Keywords/signals for CO-STAR-CREATOR.md:** create my prompt, custom prompt, my own CO STAR, design system doc, template for our product, tailor CO-STAR to our app, prompt from our goals.
- **Default when purely “help with UI” or “do the CO-STAR thing”:** use **CO-STAR-PROMPT.md**.

---

## After you choose

- **If CO-STAR-PROMPT.md:** Follow that file completely (role, C/O/S/T/A/R, scoped questions first, then plan, then implementation). Do not skip steps.
- **If CO-STAR-CREATOR.md:** Follow that file to help the user define their custom CO STAR prompt (context, objective, style, tone, audience, response format).

This file (ui.md) is the **command**; CO-STAR-PROMPT.md and CO-STAR-CREATOR.md are the **resources** you invoke based on your decision.
