Here is an example AI-Expert Format template for an agent that builds subagents to analyze and develop specific codebases. This example uses real variables and instructs the main agent to create subagents responsible for analysis of three codebases: frontend architecture, UI components, and the Vercel AI SDK.

***

# AI Agent Template for Building Subagents on Codebases

This example demonstrates how an AI agent can be instructed to follow a structured approach to build subagents focused on the specified codebases. Each subagent will specialize in one codebase file—frontend architecture, UI components, and Vercel AI SDK—and follow the phases below to analyze, plan, research, and implement solutions in line with best practices.

***

## 1. Analysis & Planning

First, the main agent initializes variables holding file names representing different code bases:

```python
codebases = {
    "frontend": "shadcn-frontend-architecture.md",
    "ui_expert": "shadcn-ui-expert.md",
    "vercel_sdk": "vercel-ai-sdk-v5-expert.md"
}

# Create subagents dynamically for each codebase
subagents = {}
for key, file in codebases.items():
    subagents[key] = create_subagent(target_file=file)
```

The planning phase outlines how each subagent will:

- Analyze its specific codebase file.
- Identify key components and dependencies.
- Plan for modular implementation and integration.

***

## 2. Components Research Phase

Each subagent researches AI methods, libraries, and architecture patterns relevant to its domain:

```python
def research_components(agent):
    if agent.target_file == "shadcn-frontend-architecture.md":
        return ["React", "TailwindCSS", "Component Architecture Patterns"]
    elif agent.target_file == "shadcn-ui-expert.md":
        return ["UI States", "Accessibility", "Design Tokens"]
    elif agent.target_file == "vercel-ai-sdk-v5-expert.md":
        return ["Vercel AI SDK v5 APIs", "Serverless Functions", "Edge Middleware"]

for agent in subagents.values():
    agent.components = research_components(agent)
```

***

## 3. Implementation code Phase

Subagents implement sample code snippets or architectural diagrams based on research:

```python
def implementation_snippet(agent):
    if agent.target_file == "shadcn-frontend-architecture.md":
        return """
        // Example: React component structure with Tailwind
        function Header() {
            return <header className='bg-gray-100 p-4'>Welcome</header>;
        }
        """
    elif agent.target_file == "shadcn-ui-expert.md":
        return """
        // Example: Accessible button with ARIA and state handling
        <button aria-pressed="false" onClick={togglePressed}>
          Toggle
        </button>
        """
    elif agent.target_file == "vercel-ai-sdk-v5-expert.md":
        return """
        // Example: Vercel AI SDK usage in Edge Function
        import { VercelAI } from '@vercel/ai';
        export default function handler(req, res) {
          const ai = new VercelAI();
          res.json(ai.process(req.body));
        }
        """

for agent in subagents.values():
    agent.code = implementation_snippet(agent)
```

***

## 4. Apply themes

- Subagents enforce modularity and separation of concerns.
- Emphasize security by validating inputs and sanitizing data.
- Ensure maintainability through comment documentation and standards.
- Prioritize accessibility and performance optimizations in UI-related code.

***

## Design Principles

- Single Responsibility Principle for each module/component.
- Use declarative UI patterns for predictable rendering.
- Favour simplicity and readability.
- Prioritize reusable components and composability.

***

## Code Quality Standards

- Code follows established style guides (e.g., ESLint for JavaScript/TypeScript).
- Includes inline documentation and comments.
- Implements unit tests for critical logic.
- Integrates CI/CD pipelines for automated building and testing.

***

## Integration Guidelines

- Subagents define API contracts and events for inter-component communication.
- Output data structures are standardized (e.g., JSON schema).
- Ensure backward compatibility within iterated releases.
- Document integration points clearly in markdown files.

***

## Performance Optimization

- Use memoization or React hooks like `useMemo` to avoid unnecessary re-renders.
- Employ lazy loading for non-critical components.
- Cache API responses to reduce latency.
- Minimize bundle size by tree-shaking unused code.

***

## Output format

Each subagent outputs:

- A markdown file with architectural notes.
- Well-commented source code snippets.
- A unit test file skeleton.
- Integration and usage examples.

***

## Rules

- Strictly enforce separation between frontend and backend responsibilities.
- Ensure all UI components meet WCAG 2.1 accessibility standards.
- Limit external dependencies, only use trusted and maintained libraries.
- Validate and sanitize all inputs to prevent injection attacks.
- Regularly update documentation and refactor code as needed.
- Respect data privacy and compliance regulations in SDK usage.