# Start AEOS Lite in Codex

1. Create a private Nearlings GitHub repository and clone locally.
2. Copy the contents of this folder to the repository root; include the Nearlings PRD PDF under docs/ if useful.
3. Open repository in Codex and use this initial instruction:

> Read AGENTS.md and all docs. First verify current official NEAR Hackathon requirements, NEAR AI API, wallet authentication and NFT SDK. Produce a concise architecture and risk list, and a sequence of small implementation tasks. Do not code until I approve the architecture. Then implement each milestone using plan → code → tests → independent review → commit, keeping the app runnable. Ask before contract deployment, spending, or publication.

4. Approve architecture, then ask Codex to execute milestone 1. Review its test evidence before moving on.
5. After each milestone run scripts/verify.sh (adapt test runner command to the actual stack), plus contract/integration tests.
6. Before release ask Codex to act as an adversarial reviewer, reproduce the project from a clean clone and complete docs/RELEASE_CHECKLIST.md.
7. Publish only after manually checking git history for secrets and verifying deployed app + submission URLs.
