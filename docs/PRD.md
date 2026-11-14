# Nearlings v2.2 — cohesive demonstration scope

The accompanying v2.1 PDF remains the product-vision source of truth. This document narrows only the implementation promised by the hackathon demonstration.

## Product vision represented

Nearlings is a mobile-first, owner-controlled NEAR NFT companion. Oracle, Hunter, Sage and Guardian personalities share one AI and discovery system while changing tone, interests and presentation. The complete vision includes wallet authentication, transferable persistent pets, private AI interaction, safe inference allowances, sourced discovery, calendar and journal views, and a generative UI layer that can compose interfaces from validated data and pet context.

Nearlings is ultimately an intelligence and distribution network expressed through companions. The pet creates identity, continuity and emotional engagement; the content registry supplies verifiable things worth discussing; the calendar turns those records into a time-aware experience; the journal and explicit user choices create preference signals; and the inference layer continuously converts this shared context into timely, personality-specific explanations. Sponsored discovery adds a commercial path to the same network without creating a separate or hidden advertising experience.

## Core system thesis

The product is organized around one continuous intelligence cycle:

1. **Ingest and verify content.** Protocol announcements, launches, governance events, incentives, security incidents, yields and ecosystem developments enter a shared structured registry with sources, timestamps, verification state, expiry, risk notes and commercial disclosure.
2. **Place content in time.** The calendar is a temporal projection of that registry, not a separate database. Publication dates, event dates, deadlines, maturities and expiry determine what is upcoming, current, stale or no longer eligible for promotion.
3. **Select through companion context.** Archetype interests, pet state, explicit owner preferences, saved discoveries and recent interactions determine which eligible records deserve attention. Facts remain shared; personality changes emphasis and narration rather than truth.
4. **Infer and explain.** A bounded inference service turns validated records into dialogue, summaries, questions, comparisons and next-step suggestions. It may reference a discovery ID but cannot manufacture market facts or authorize financial action.
5. **Present adaptively.** The same structured result can appear as pet dialogue, a discovery card, a calendar briefing, a journal follow-up or a validated generative-UI composition.
6. **Learn from explicit signals.** Saves, dismissals, category choices and watchlist selections improve later relevance. Private conversation history is not transferred with the NFT and is never exposed in public metadata.
7. **Distribute transparent commercial content.** Sponsored records use the same verification, eligibility, expiry and risk controls as ordinary discoveries, while retaining an unavoidable sponsorship label through selection, inference and presentation.

This cycle explains how the major ideas connect: content gives inference grounded material; calendars give inference temporal awareness; companions give it identity and voice; journals/preferences give it continuity; generative UI gives it contextual presentation; and sponsorship funds distribution and potentially inference without overriding user trust.

## Continuous inference vision

"Continuous inference" does not mean an unbounded model call running at all times. It is a future event-driven intelligence loop that can react to new verified records, approaching calendar events, meaningful source updates and user-selected watchlists. Lower-cost deterministic rules first decide whether anything has materially changed; bounded inference is reserved for summarization, comparison, personalization and companion narration.

The long-term companion can therefore prepare a morning briefing, surface an approaching governance deadline, revisit a saved opportunity when its status changes, or warn that a previously promoted record has expired. Every proactive output must retain source provenance, generated-at time, applicable data timestamp, verification status and any sponsorship disclosure. Users control notification categories and cadence. Rate limits, budgets, deduplication and quiet hours prevent inference spam and runaway cost.

Continuous inference remains advisory and presentational. It cannot trade, transfer funds, sign transactions, alter NFT ownership, silently enroll a user in a campaign or convert sponsored priority into a factual recommendation.

## Content calendar and journal relationship

The feed, calendar and journal are three views of the same governed discovery system:

- **Feed:** what is relevant now, ranked for the companion and owner.
- **Calendar:** what is relevant because of when it happened or will happen.
- **Journal:** what the owner intentionally preserved for later review.

A discovery can move between these views without losing its identity, source, verification state or disclosure. For example, a Hunter may introduce a sourced launch in the feed, the calendar may show its mainnet date, and the owner may save it to the journal. If the launch date changes or the record expires, future inference must describe the updated state instead of repeating stale narration.

## Advertising and sponsored discovery vision

Sponsored discovery is a transparent distribution product for protocols, ecosystems and developer programs. It may support launches, grants, incentive campaigns, events, educational content and verified market opportunities. Commercial records are not free-form advertisements injected into conversation; they are typed discovery records subject to provenance, expiry, relevance, risk and policy checks.

The companion may explain why a sponsored record matches the selected archetype, but it must never conceal payment, imply independent endorsement or weaken factual verification. The sponsorship marker must survive every transformation: registry record, selection result, inference prompt, generated narration, card, calendar placement, journal reference and generative-UI view.

Future campaign tooling may offer targeting by declared interests, archetype and event category; frequency caps; calendar placements; aggregate engagement analytics; protocol-funded inference allowances; and developer discovery APIs. It must not create behavioral dark patterns, private-message targeting, undisclosed bidding, guaranteed returns or pay-to-bypass safety controls.

Generative UI is a future presentation capability, not an autonomous authority. A model may propose a constrained `NearlingView` document selecting approved components, copy slots and theme tokens. The application validates the document against a strict schema and renders only allowlisted components. Generated UI cannot execute transactions, alter ownership, debit allowance, invent discovery facts or render arbitrary HTML/scripts.

Generative UI completes the intelligence cycle by choosing the safest useful representation for validated context. An approaching vote may become a countdown and source card; a security incident may become a high-priority Guardian briefing; a set of dated launches may become a calendar agenda; and a sponsored grant may become a disclosed opportunity panel. The underlying content IDs and policy labels remain authoritative even when presentation changes.

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
- External live discovery ingestion, continuous monitoring/inference, production sponsorship marketplace, campaign analytics, share profile and animation.

No autonomous trades, financial transfers, advertising auction, speculative token economics or fabricated verification/yield claims.

## Demo acceptance

- The entire seven-step story works from a clean local install.
- Feeding clamps state and allowance changes exactly once for a duplicate idempotency key.
- Failed or invalid demo inference does not consume allowance.
- Discovery cards retain source URL and event date; calendar groups the same records.
- The generative UI example rejects unknown component types and unsafe action capabilities.
- Every simulated/live boundary is visible in the UI and README.
- Tests, lint, typecheck and production build pass before any release claim.
