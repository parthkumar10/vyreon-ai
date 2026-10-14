# Vyreon AI


> A streaming Generative AI chatbot powered by Google Gemini and Google AI Studio.

[**Live demo**](https://vyreon-ai.vercel.app) · [**Course-completion certificate**](docs/certificates/10889637_11246091_1791975109878.pdf) · [**Report a bug**](https://github.com/parthkumar10/vyreon-ai/issues)

Vyreon AI is a hands-on Generative AI project that pairs a polished conversational interface with streamed Google Gemini responses. It applies practical learning from Google AI Studio while keeping provider access in a server-side workflow.

## Highlights

- **Gemini-powered conversations** - streams responses from the `gemini-3.5-flash-lite` model.
- **Google AI Studio integration** - uses a dedicated server-side `GOOGLE_GENERATIVE_AI_API_KEY`.
- **Modern chat experience** - includes conversation threads and Markdown/GFM message rendering.
- **Secure-by-default key handling** - the provider key stays out of browser code and is never exposed through a `NEXT_PUBLIC_` variable.
- **Live deployment** - available on [Vercel](https://vyreon-ai.vercel.app).

## How it works

```text
Browser → Next.js chat interface → POST /api/chat → Vercel AI SDK + Google provider → Google Gemini
```

The client sends messages to the internal `/api/chat` route. That route converts UI messages into model messages, calls Gemini, and streams the response back to the browser.

## Generative AI learning milestone

This project was strengthened through the **Introduction to Generative AI Studio** online course, completed through **Simplilearn SkillUp**, powered by **Google Cloud**, on **14 October 2026**.

- [View the course-completion certificate](docs/certificates/10889637_11246091_1791975109878.pdf)
- Certificate code: `10889637`

> This is a course-completion credential from Simplilearn SkillUp. It is not presented as an official Google Cloud certification.

## Technology

| Area | Technology |
| --- | --- |
| Generative AI | Google Gemini, Google AI Studio |
| AI integration | Vercel AI SDK, `@ai-sdk/google` |
| Application | Next.js, React, TypeScript |
| Chat interface | assistant-ui, Markdown/GFM rendering |
| Styling | Tailwind CSS |
| Deployment | Vercel |

## Run locally

### Prerequisites

- Node.js and npm
- A Google AI Studio API key

### Setup

```bash
git clone https://github.com/parthkumar10/vyreon-ai.git
cd vyreon-ai
npm install
cp .env.example .env.local
```

Add your own Google AI Studio API key to `.env.local`:

```env
GOOGLE_GENERATIVE_AI_API_KEY=your-google-ai-studio-api-key
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run linting and formatting checks |
| `npm run format` | Check formatting |

## Security and current scope

- Keep `GOOGLE_GENERATIVE_AI_API_KEY` in `.env.local`; never commit it.
- The project currently has no user authentication, durable conversation storage, or rate limiting.
- Do not submit passwords, API keys, or other sensitive information in the public demo.

## Contributing

Suggestions and focused improvements are welcome. Please keep changes scoped, avoid committing secrets, and run the relevant checks before opening a pull request.

## License

No license has been selected for this repository yet. Do not assume the code is available for reuse, modification, or redistribution.

