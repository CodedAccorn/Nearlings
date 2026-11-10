# AEOS Lite — Nearlings Codex Operating Instructions

## Mission
Ship a reproducible, secure Nearlings hackathon MVP before 2026-11-14 23:59 UTC. Read docs/PRD.md and docs/IMPLEMENTATION_PLAN.md first. Treat verified official hackathon instructions as authoritative; do not guess API capabilities.

## Execution loop
For each bounded task: (1) write a brief plan and acceptance tests; (2) implement the smallest vertical slice; (3) run relevant tests, lint, types and build; (4) inspect the diff for security, correctness and scope; (5) fix issues; (6) commit with a descriptive message; (7) report files changed, evidence and remaining risks. Never report unrun tests as passing.

## Engineering rules
- Prefer one shared discovery registry and one AI client; archetypes are configuration, not separate agents.
- Keep AI credentials server-side; verify signed wallet challenges, nonce expiry and current NFT ownership for protected operations.
- Atomic inference reservation and idempotency are mandatory. Reconcile uncertain provider outcomes; do not silently debit twice.
- Never invent APYs, dates, verification claims or hackathon compliance. Label mock sponsorship and unverified examples.
- Do not expose private conversation history in NFT metadata or across ownership transfers.
- No autonomous trading, financial transfers, ad auction, or speculative token economics.
- Ask for approval before deploying contracts, publishing repository, spending funds, or changing security-sensitive permissions.

## Gates
G1: official docs verified + architecture approved. G2: mint/feed/ownership tested. G3: real NEAR AI + accounting tested. G4: discovery/calendar + archetypes demonstrated. G5: security review + reproducible clean install + deploy smoke test + submission checklist.

## Reviewer pass
After each milestone, perform a separate review focused on authorization, concurrency, secrets, unsafe AI output, source provenance, tests and spec drift. Record findings and fixes in docs/REVIEW_LOG.md.
