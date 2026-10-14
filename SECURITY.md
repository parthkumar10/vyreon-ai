# Security policy

## Reporting a vulnerability

Please do not report exploitable vulnerabilities in a public issue. Use
GitHub's private vulnerability reporting for this repository if it is enabled.
If it is unavailable, contact the repository maintainer privately through
GitHub before disclosing details publicly.

Do not include API keys, credentials, or private user data in reports.

## API key handling

The app requires `GOOGLE_GENERATIVE_AI_API_KEY` on the server. Store it in a
local `.env.local` file or in the deployment provider's server-side environment
settings. Never commit the key, add a `NEXT_PUBLIC_` prefix, or paste it into
an issue, pull request, screenshot, or chat.

If a key is exposed, revoke it with Google immediately and replace it in every
environment where it was configured.

## Public demo considerations

The chat endpoint currently has no authentication or rate limiting. The public
demo should be treated as an educational project, not a hardened service for
handling sensitive data or untrusted high-volume traffic.
