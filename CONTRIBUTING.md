# Contributing

Thanks for your interest in improving Vyreon AI. Bug reports, documentation
fixes, and focused code contributions are welcome.

## Before you start

- For a bug, include the steps to reproduce it and the relevant error output.
- For a feature or a substantial change, open an issue first so the scope can
  be discussed.
- Do not include API keys, `.env.local`, private user data, or generated build
  output in an issue or pull request.

## Local setup

1. Install Node.js 22 or newer.
2. Fork and clone the repository.
3. Install dependencies with `npm ci`.
4. Create `.env.local` with a Google AI Studio key if you need to test chat
   requests. Do not commit this file.
5. Start the app with `npm run dev`.

## Before opening a pull request

Run the checks relevant to your change:

```bash
npx tsc --noEmit -p tsconfig.json
npm run build
```

There is currently no automated test suite. Describe manual verification for
any behavior you changed. Keep pull requests focused and explain the motivation
and user-visible impact.
