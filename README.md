# Vyreon AI

A personal AI chatbot powered by Google Gemini. Try the live app:

**[vyreon-ai.vercel.app](https://vyreon-ai.vercel.app)**

## Features

- Streaming chat responses powered by Gemini Flash Lite
- Conversation threads and chat history in the interface
- Markdown-formatted assistant responses
- Responsive chat UI

## Tech stack

- Next.js and React
- TypeScript
- assistant-ui
- Vercel AI SDK with the Google provider
- Google Gemini
- Tailwind CSS

## Run locally

You'll need Node.js and a Google AI Studio API key.

1. Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/parthkumar10/fffj.git
   cd fffj
   npm install
   ```

2. Create `.env.local` in the project root and add your key:

   ```env
   GOOGLE_GENERATIVE_AI_API_KEY=your-google-ai-studio-api-key
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

## Deployment

The app is deployed on Vercel at **[vyreon-ai.vercel.app](https://vyreon-ai.vercel.app)**.

To deploy your own copy, import the repository into Vercel and add
`GOOGLE_GENERATIVE_AI_API_KEY` in the project's Environment Variables settings.
Keep the key server-side: don't commit `.env.local`, publish the key, or expose
it in a `NEXT_PUBLIC_` variable. The repository's `.gitignore` excludes local
environment files.

## Learning

- Completed a one-hour Google Cloud Generative AI course.
