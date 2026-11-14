# Nearlings v2.2 — cohesive demonstration scope

The accompanying v2.1 PDF remains the product-vision source of truth. This document narrows only the implementation promised by the hackathon demonstration.

## Product vision represented

Nearlings is a mobile-first, owner-controlled NEAR NFT companion. Oracle, Hunter, Sage and Guardian personalities share one AI and discovery system while changing tone, interests and presentation. The complete vision includes wallet authentication, transferable persistent pets, private AI interaction, safe inference allowances, sourced discovery, calendar and journal views, and a generative UI layer that can compose interfaces from validated data and pet context.

Generative UI is a future presentation capability, not an autonomous authority. A model may propose a constrained `NearlingView` document selecting approved components, copy slots and theme tokens. The application validates the document against a strict schema and renders only allowlisted components. Generated UI cannot execute transactions, alter ownership, debit allowance, invent discovery facts or render arbitrary HTML/scripts.

## Demonstrated now

One cohesive mobile story:

1. Choose Oracle, Hunter, Sage or Guardian.
2. Create a clearly labeled demo Nearling identity and show the intended NFT token/owner fields.
3. Feed the Nearling and show bounded hunger/happiness state.
4. Talk once through the shared AI-client boundary and show allowance `3 -> 2` with duplicate-request protection.
5. Browse a small curated registry with source links, archetype filters and a date-grouped calendar view.
6. Show a read-only "Generative UI concept" panel containing a validated example `NearlingView` and the safety boundary.
7. Show a "NEAR proof" panel linking the contract source/build/test evidence that is actually available.

The demo may use a deterministic local AI provider and demo identity when live credentials, wallet compatibility or testnet deployment are unavailable. These states must be visually labeled; they must not masquerade as live NEAR AI, wallet authentication, minting or attestation.

## Implement only if verified in time

- Local NEP-171 contract build and ownership/feeding tests.
- Live NEAR AI call through the same adapter, only with a provided server-side key and explicit credit approval.
- Testnet deployment and mint, only after explicit deployment approval.

## Represent, do not claim as implemented

- Universal wallet support and production NEP-413 sessions.
- PostgreSQL persistence and production-grade distributed reconciliation.
- Transfer-aware private journal/history migration.
- Full runtime AI-generated interfaces.
- External live discovery feeds, sponsorship system, share profile, animation and autonomous monitoring.

No autonomous trades, financial transfers, advertising auction, speculative token economics or fabricated verification/yield claims.

## Demo acceptance

- The entire seven-step story works from a clean local install.
- Feeding clamps state and allowance changes exactly once for a duplicate idempotency key.
- Failed or invalid demo inference does not consume allowance.
- Discovery cards retain source URL and event date; calendar groups the same records.
- The generative UI example rejects unknown component types and unsafe action capabilities.
- Every simulated/live boundary is visible in the UI and README.
- Tests, lint, typecheck and production build pass before any release claim.
