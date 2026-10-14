# Vyreon AI

**A streaming Gemini chatbot built as a hands-on Next.js learning project.**

[Try the live demo](https://vyreon-ai.vercel.app) · [Report a bug](https://github.com/parthkumar10/vyreon-ai/issues)

Vyreon AI connects a chat interface to Google's Gemini model through a server-side API route. It is a small, practical example of combining a React chat UI, streamed model responses, and server-only API credentials.

> This project is actively being developed as a learning project. It does not currently provide user accounts, durable conversation storage, or rate limiting.

## Contents

- [Features](#features)
- [Preview](#preview)
- [Technology](#technology)
- [Run locally](#run-locally)
- [Commands](#commands)
- [How it works](#how-it-works)
- [Project structure](#project-structure)
- [Security and privacy](#security-and-privacy)
- [Troubleshooting](#troubleshooting)
- [Deploy on Vercel](#deploy-on-vercel)
- [Learning](#learning)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- Streams assistant replies from Google's Gemini Flash Lite model.
- Provides a chat UI with conversation threads.
- Renders assistant messages with Markdown support.
- Keeps the Gemini API key on the server rather than exposing it to browser code.

The interface can display and switch between threads, but this project does not configure a persistent storage adapter. Do not assume conversations will be saved across browsers or sessions.

## Preview

A screenshot is not included yet. Add a real screenshot of the running app at `docs/screenshot.png` before enabling the image below.

<!-- Uncomment after adding docs/screenshot.png:
![Screenshot of the Vyreon AI chat interface](docs/screenshot.png)
-->

## Technology

- [Next.js](https://nextjs.org/) and [React](https://react.dev/)
- TypeScript
- [assistant-ui](https://www.assistant-ui.com/) for the chat experience
- [Vercel AI SDK](https://ai-sdk.dev/) and its Google provider
- Google Gemini (`gemini-3.5-flash-lite`)
- Tailwind CSS

## Run locally

### Prerequisites

- Node.js 22 or newer
- npm
- A Google AI Studio API key

### Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/parthkumar10/vyreon-ai.git
   cd vyreon-ai
   ```

2. Install the dependency versions recorded in the lockfile:

   ```bash
   npm ci
   ```

3. Create `.env.local` in the project root. Add your own key:

   ```env
   GOOGLE_GENERATIVE_AI_API_KEY=your-google-ai-studio-api-key
   ```

   `.env.local` is intentionally ignored by Git. Never commit a real API key or expose it through a `NEXT_PUBLIC_` variable.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server using Webpack |
| `npm run build` | Create a production build |
| `npm run start` | Serve a production build |
| `npx tsc --noEmit -p tsconfig.json` | Run the TypeScript check |
| `npm run lint` | Run Oxlint and check formatting |
| `npm run format` | Check formatting |

There is currently no automated test suite. The lint command includes a formatting check; format findings need to be fixed before it can be treated as a passing check.

## How it works

The chat UI sends messages to `POST /api/chat`. The server route converts the UI messages into model messages, calls Gemini through the Vercel AI SDK, and streams the result back to the browser. The route uses `GOOGLE_GENERATIVE_AI_API_KEY` from the server environment.

`POST /api/chat` is an internal endpoint for this application, not a stable, general-purpose public API.

## Project structure

```text
app/
  api/chat/route.ts       # Server-side Gemini chat endpoint
  assistant.tsx           # Chat runtime and application shell
  layout.tsx              # Root layout and page metadata
  page.tsx                 # Home page
components/                # Chat, thread, sidebar, and UI components
hooks/                     # Reusable React hooks
lib/                       # Shared utilities
.agents/skills/            # assistant-ui reference material for coding agents
.env.example               # Safe environment-variable template
.gitignore                 # Excludes local secrets and generated files
```

## Security and privacy

- Keep `GOOGLE_GENERATIVE_AI_API_KEY` on the server. Do not use a `NEXT_PUBLIC_` prefix for it.
- Keep `.env.local` private. The repository's `.gitignore` excludes local environment files.
- The public chat endpoint currently has no authentication or rate limiting. Anyone who can access the demo may be able to make requests that use the deployment's configured provider key. Monitor provider usage and avoid sharing the demo widely until usage controls are in place.
- Do not submit passwords, API keys, or other sensitive personal information to the public demo.
- If a key is exposed, revoke it with the provider and replace it in local and deployment environment settings.

## Troubleshooting

### The app reports a missing API key

For local development, confirm that `.env.local` exists in the project root and defines `GOOGLE_GENERATIVE_AI_API_KEY`. Restart the development server after changing environment variables.

For Vercel, add the variable under the project's **Settings → Environment Variables**, enable it for the deployment environment, and redeploy.

### The model request fails

Check that the key is valid, the selected model is available to the Google AI Studio project, and the project has quota. Read the server terminal output locally or the deployment function logs on Vercel; never paste the API key into an issue.

### The page fails to compile

Stop and restart the development server after changing dependencies or configuration. Check the first error in the terminal and verify that the supported Node.js version is installed.

## Deploy on Vercel

The live demo is [vyreon-ai.vercel.app](https://vyreon-ai.vercel.app).

To deploy your own copy:

1. Import the repository into Vercel.
2. Keep the detected Next.js framework and default build settings.
3. Add `GOOGLE_GENERATIVE_AI_API_KEY` in **Settings → Environment Variables**. Enter the value directly in Vercel; never commit it to GitHub.
4. Deploy. Redeploy after changing the environment variable.

## Learning

The project author completed a one-hour Google Cloud Generative AI course. Add the exact course title and a public certificate verification link here when available; neither has been supplied for this repository yet.

## Contributing

Bug reports and constructive suggestions are welcome. Before opening a pull request:

1. Open an issue to discuss substantial changes.
2. Keep changes focused and explain their purpose.
3. Run `npx tsc --noEmit -p tsconfig.json` and `npm run build`.
4. Never include secrets or `.env.local` in a commit.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the contributor workflow.

## License

No license has been selected for this repository yet. Until a license is added, do not assume the code is available for reuse, modification, or redistribution.

## Acknowledgments

- [assistant-ui](https://github.com/assistant-ui/assistant-ui) for the chat interface foundation
- [Vercel AI SDK](https://github.com/vercel/ai) for the model integration
- Google Gemini for the model used by the demo
