# Nearlings demonstration

Nearlings is a cohesive, bounded demonstration of owner-controlled companion intelligence. It shows how one governed discovery record can inform a companion conversation, an archetype-filtered feed, a calendar lens, disclosed sponsorship and a safe generative-UI concept.

## What this slice implements

- Four configuration-driven companion archetypes.
- A bounded local care loop and deterministic, schema-validated conversation.
- Idempotent demo allowance accounting: a replay does not debit twice.
- A shared, sourced discovery registry rendered into feed and calendar views.
- Clearly labeled simulated identity, sponsorship and inference.
- A `NearlingView` allowlist demonstrating the proposed generative-UI trust boundary.

It does **not** claim a deployed NFT, wallet authentication, live NEAR AI, continuous monitoring, campaign infrastructure or model-generated layouts. Those remain architecture and product vision in `docs/PRD.md`.

## Judge walkthrough

1. Choose Guardian and observe that the archetype changes presentation and discovery relevance.
2. Select **Feed +** and observe bounded care values.
3. Select **Talk to Guardian** and observe the allowance change from 3 to 2.
4. Select **Replay last request** and observe that the allowance remains 2.
5. Compare the sourced feed with the calendar lens; both render the shared discovery registry.
6. Review the sponsored example disclosure and the allowlisted generative-UI concept.

The implementation was created during the 2026 NEAR HACKATHON build window. The recommended current submission track is **Open Innovation**. The product vision also relates to **NFTs That Do Something**, but this demonstration does not claim an on-chain NFT implementation.

## Run locally

Requirements: Node.js 22+ and pnpm 11.25.0.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:3000`.

## Verify

```bash
pnpm run lint
pnpm run typecheck
pnpm test
pnpm run build
```

On Bash-compatible systems, `scripts/verify.sh` runs the complete sequence from a locked install.

## Libraries and tooling

The project uses Next.js, React, Zod, TypeScript, ESLint and Vitest. No proprietary pre-hackathon library or externally owned application template is included.

## Architecture boundary

The browser owns presentation-only demo state. Domain functions in `lib/domain.ts` enforce bounded care state, response validation, idempotent allowance consumption and the generative-UI allowlist. `lib/discovery.ts` is the single discovery registry used by all content views. Any production version must move authentication, ownership checks, inference credentials and atomic accounting to a trusted server and/or contract boundary before protected operations are enabled.

## License

MIT. See `LICENSE`.
