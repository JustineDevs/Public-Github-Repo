Here is an AI-Expert Format template tailored for the "vercel-ai-sdk-v5-expert.md" codebase. It guides an AI agent to build subagents specializing in understanding, researching, and implementing with the Vercel AI SDK v5, including a real example and a useful URL for accurate research.

***

# AI Expert Template for vercel-ai-sdk-v5-expert.md (Vercel AI SDK)

This template directs an AI agent to analyze the Vercel AI SDK v5, exploring SDK capabilities, serverless functions integration, and edge computing use cases. The subagent follows best practices to create efficient, scalable, and secure AI-powered serverless applications.

***

## 1. Analysis & Planning

Initialize the Vercel AI SDK subagent targeting "vercel-ai-sdk-v5-expert.md":

```python
vercel_sdk_codebase = "vercel-ai-sdk-v5-expert.md"

def create_vercel_sdk_subagent(file_name):
    return {
        "target_file": file_name,
        "sdk_features": [],
        "code_samples": [],
        "integration_notes": [],
    }

vercel_sdk_agent = create_vercel_sdk_subagent(vercel_sdk_codebase)
```

Planning focuses on understanding SDK APIs, edge middleware compatibility, and how to implement serverless AI workflows efficiently.

***

## 2. Components Research Phase

The subagent researches essential SDK features and serverless architecture:

```python
vercel_sdk_agent["sdk_features"] = [
    "Vercel AI Client API",
    "Edge Middleware for request handling",
    "Serverless Function deployment model",
    "Streaming AI response support",
    "Authentication and rate limiting"
]
```

Reference URL for comprehensive SDK information:  
[Vercel AI SDK Documentation](https://vercel.com/docs/concepts/ai/sdk)

***

## 3. Implementation code Phase

Example of an edge function using Vercel AI SDK v5 that processes incoming requests with AI:

```javascript
import { VercelAI } from "@vercel/ai";

export default async function handler(req, res) {
  const ai = new VercelAI();

  try {
    const result = await ai.chat({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: "Explain Vercel AI SDK usage" }
      ]
    });

    res.status(200).json({ answer: result.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "Error processing AI request" });
  }
}
```

This example demonstrates initializing the AI client, sending a chat request, and handling the response within a serverless edge function.

***

## 4. Apply themes

- Scalability: Use stateless serverless functions to handle load.
- Security: Validate and sanitize incoming requests.
- Performance: Leverage edge deployment for low latency.
- Reliability: Handle errors gracefully with informative responses.
- Extensibility: Keep handler modular for adding additional AI endpoints.

***

## Design Principles

- Minimal and fast serverless functions.
- Clear separation between business logic and AI interaction.
- Use async/await for non-blocking operations.
- Secure API endpoints with authentication checks.
- Follow Vercel recommended deployment configurations.

***

## Code Quality Standards

- Strict typing with TypeScript if possible.
- End-to-end testing to cover AI response scenarios.
- Use environment variables securely for keys.
- Document API routes and expected requests/responses.
- Continuous integration and deployment setup.

***

## Integration Guidelines

- Define API schema for AI endpoints.
- Support streaming responses where applicable.
- Integrate with frontend or other backend services using fetch or SDK clients.
- Log requests for debugging and analytics.
- Monitor function performance metrics.

***

## Performance Optimization

- Use caching strategies for repeated queries.
- Optimize AI model parameters for cost and speed.
- Deploy functions to multiple regions.
- Minimize cold starts by warming functions if possible.

***

## Output format

The subagent outputs:

- Markdown documentation on SDK features and setup.
- Fully functional serverless function examples.
- Integration guides for frontend and edge middleware.
- Test cases and deployment instructions.

***

## Rules

- Do not expose sensitive API keys in code.
- Follow rate limits specified by Vercel AI.
- Return standardized JSON responses with error codes.
- Avoid long-running processes in serverless functions.
- Keep dependencies minimal and verified.
- Ensure code is maintainable and extensible.