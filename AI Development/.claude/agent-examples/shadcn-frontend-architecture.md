Here is an example AI-Expert Format template focused solely on the "shadcn-frontend-architecture.md" codebase. It includes real variables with an actual code example and a short explanation in the first paragraph. Also included is a relevant URL link to help an AI Agent gather accurate information on the topic.

***

# AI Expert Template for shadcn-frontend-architecture.md (Frontend)

This template guides an AI agent aiming to build subagents specializing in analyzing and implementing the frontend architecture based on the Shadcn UI framework using React and TailwindCSS. The agent uses a structured approach to breakdown the architecture file, research components, and implement code snippets following best practices and integration standards.

***

## 1. Analysis & Planning

The frontend agent initializes with the target file "shadcn-frontend-architecture.md" and sets up its scope:

```python
frontend_codebase = "shadcn-frontend-architecture.md"

def create_frontend_subagent(file_name):
    # Subagent focused on analyzing and implementing frontend architecture
    return {
        "target_file": file_name,
        "components": [],
        "code": "",
        "design_principles": [],
    }

frontend_agent = create_frontend_subagent(frontend_codebase)
```

Planning involves identifying how Shadcn uses React, TailwindCSS, and headless UI component patterns to enable modular, customizable, and AI-friendly frontend architecture.

***

## 2. Components Research Phase

The frontend agent researches key frontend components and technologies essential for Shadcn-based architecture:

```python
frontend_agent["components"] = [
    "React Functional Components",
    "TailwindCSS Utility Classes",
    "Radix UI Primitives",
    "React Hook Form Integration",
    "Class Variance Authority for Styling Variants"
]
```

Reference URL for accurate context and code architecture understanding:  
[Building a CRUD app with Shadcn UI and Refine - refine.dev](https://refine.dev/blog/shadcn-ui/)

***

## 3. Implementation code Phase

Example React component implementing a header using Shadcn’s style conventions and TailwindCSS utility classes:

```jsx
// shadcn-frontend-architecture.md sample React component
import React from "react";

export function Header() {
  return (
    <header className="bg-gray-100 p-4 shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">Welcome to Shadcn Frontend</h1>
    </header>
  );
}
```

The agent implements modular components leveraging Tailwind's utility classes ensuring ease of customization and AI-readiness through transparent JSX structure.

***

## 4. Apply themes

- Modularity: Each UI element encapsulated for reuse.
- Accessibility: Use semantic HTML and ARIA attributes.
- Customization: Utilize Tailwind variants and Class Variance Authority.
- AI-friendly: Open code structure for easy AI parsing and modifications.
- Performance: Minimal and efficient styling with Tailwind.

***

## Design Principles

- Separation of UI and logic (Headless UI pattern).
- Clear, predictable component APIs.
- Consistency in styling with Tailwind utility classes.
- Responsive design support through utility classes.
- Reusable and composable React components.

***

## Code Quality Standards

- Follow React best practices (function components, hooks).
- Use TypeScript for type safety (where applicable).
- Document components with JSX comments.
- Maintain consistent styling and naming conventions.
- Include unit tests for key UI components.

***

## Integration Guidelines

- Ensure Radix UI primitives are integrated correctly.
- Compose smaller components into complex layouts.
- Accept well-defined props and state management.
- Document component usage and examples clearly.

***

## Performance Optimization

- Use Tailwind’s just-in-time mode for minimal CSS.
- Memoize components where needed.
- Avoid unnecessary re-renders by using React.memo.
- Lazy load non-critical components.

***

## Output format

The frontend subagent produces:

- A markdown report summarizing component roles and architecture.
- Well-commented React component files with TailwindCSS styles.
- Usage examples in storybook or example apps.
- Unit test skeleton files.

***

## Rules

- Adhere strictly to TailwindCSS utility-based styling; no global CSS overrides.
- Components must be accessible with proper semantic tags.
- Avoid heavy dependencies beyond Tailwind and Radix primitives.
- Keep open, readable JSX code for AI analysis.
- Document all variants and prop types.