Here is an AI-Expert Format template focused on the "shadcn-ui-expert.md" codebase, designed for an AI agent to build subagents specializing in advanced UI component expertise within the Shadcn UI framework. It includes a real example with explanations and a helpful URL link for accurate information gathering.

***

# AI Expert Template for shadcn-ui-expert.md (UI Expertise)

This template guides an AI agent to analyze, research, and implement advanced UI components following Shadcn UI best practices—focusing on accessibility, state management, design tokens, and composability. The agent is instructed to parse the UI expert file and generate specialized code and documentation for reusable UI elements.

***

## 1. Analysis & Planning

Initialize the UI expert subagent targeting "shadcn-ui-expert.md" with a clear scope to improve UI states, accessibility, and design consistency:

```python
ui_expert_codebase = "shadcn-ui-expert.md"

def create_ui_expert_subagent(file_name):
    return {
        "target_file": file_name,
        "focus_areas": [],
        "code_samples": [],
        "best_practices": [],
    }

ui_expert_agent = create_ui_expert_subagent(ui_expert_codebase)
```

The agent plans to focus on isolated UI components, managing complex states, and promoting accessibility using ARIA roles and proper markup.

***

## 2. Components Research Phase

The UI expert subagent researches critical UI component concepts:

```python
ui_expert_agent["focus_areas"] = [
    "Advanced React State Management (useReducer, Zustand)",
    "ARIA Attributes for Accessibility",
    "Design Tokens for Theming",
    "Controlled vs Uncontrolled Components",
    "Compound Components Pattern"
]
```

Reference URL to gather accurate UI expertise and examples:  
[Shadcn UI for Beginners: The Ultimate Step-by-Step Tutorial](https://codeparrot.ai/blogs/shadcn-ui-for-beginners-the-ultimate-guide-and-step-by-step-tutorial)

***

## 3. Implementation code Phase

Example of a controlled toggle switch component implementing accessibility and state handling:

```jsx
import React, { useState } from "react";

export function ToggleSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      role="switch"
      aria-checked={enabled}
      onClick={() => setEnabled(!enabled)}
      className={`w-12 h-6 rounded-full transition-colors ${
        enabled ? "bg-blue-600" : "bg-gray-400"
      }`}
    >
      <span
        className={`inline-block w-6 h-6 bg-white rounded-full shadow transform transition-transform ${
          enabled ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
}
```

This snippet shows how to implement accessible UI controls with clear state transitions following Shadcn styling conventions.

***

## 4. Apply themes

- Accessibility: Use ARIA roles and properties appropriately.
- Reusability: Design components as controlled or uncontrolled.
- Theming: Use design tokens for colors, spacing, and typography.
- Composability: Implement compound components for flexible UI patterns.
- Maintainability: Document expected props and state changes.

***

## Design Principles

- Clear separation of concerns between UI and state logic.
- Use declarative patterns for predictable UI behavior.
- Ensure semantic HTML and accessible keyboard navigation.
- Follow design consistency with reusable tokens.
- Simplify API surfaces for component consumers.

***

## Code Quality Standards

- TypeScript integration for prop typing.
- Clear code comments explaining key decisions.
- Unit and accessibility testing (e.g., jest, axe-core).
- Enforce linting rules matching styling guidelines.
- Consistent use of hooks and state patterns.

***

## Integration Guidelines

- API contracts for component props and events.
- Easy integration with form libraries (React Hook Form).
- Support controlled/uncontrolled behavior.
- Document theming options and customization points.

***

## Performance Optimization

- Memoize components where appropriate.
- Minimize re-renders by managing state granularly.
- Lazy load larger UI modules if needed.
- Avoid unnecessary style recalculations.

***

## Output format

The UI expert subagent outputs:

- Markdown reports on UI best practices and state management.
- React component source files with accessibility annotations.
- Theming token JSON or CSS variables definitions.
- Sample usage scenarios and tests.

***

## Rules

- Adhere to WCAG 2.1 accessibility standards.
- Use ARIA roles and properties correctly.
- Avoid inline styles except for dynamic class toggling.
- Maintain composable and extensible component APIs.
- Validate all props for correct types and required fields.
- Provide clear error boundaries for UI failures.