# Demonstration implementation plan

Architecture approval remains the stop condition before application code.

## Slice 1 — runnable story shell

- Bootstrap one Next.js/TypeScript application with lint, typecheck, tests and production build.
- Add four archetype configurations and a mobile step-through demo shell.
- Add explicit `DEMO`/`LIVE` evidence badges; default to demo.

Acceptance: clean install starts the app; all four archetypes render from shared configuration; no UI suggests a live chain or AI call occurred.

## Slice 2 — deterministic domain core

- Implement bounded feeding, pet identity and the allowance reservation/idempotency state machine as framework-independent modules.
- Add a deterministic demo provider returning locally schema-validated structured responses.
- Keep interfaces compatible with future PostgreSQL and NEAR AI adapters.

Acceptance: unit tests cover clamps, success `3 -> 2`, failed call `3 -> 3`, duplicate request `3 -> 2`, and invalid output rejection.

## Slice 3 — discovery, calendar and generative UI concept

- Add 3-5 curated records with real source links and explicit verification status.
- Render feed and date-grouped calendar from the same registry.
- Define and validate a constrained `NearlingView` schema; render one checked example using allowlisted components.

Acceptance: archetype/date filtering is deterministic; unsafe or unknown view nodes fail closed; no model-generated HTML is used.

## Slice 4 — NEAR proof, only as time permits

- Use the official NEP-171 Rust pattern for minimal mint/owner/feed behavior.
- Build and test locally with prebuilt `cargo-near`.
- Do not deploy without explicit approval.

Acceptance: owner mutation succeeds, non-owner mutation fails, and transfer revokes the prior owner in tests. If this slice does not pass, label the UI contract section "architecture concept" and do not claim a working NFT.

## Release gate

- Run lint, typecheck, unit tests and production build.
- Perform security/spec-drift review and record evidence.
- Reproduce from a clean checkout.
- Request separate approvals for testnet deployment, repository publication, spending and submission.

Hard cuts: live wallet authentication, live NEAR AI, testnet deployment, journal writes, external feeds, sponsor behavior, animation and share features. Restore an item only after the current slice is green.
