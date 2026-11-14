# Architecture decisions (approval required before implementation)

Status: revised for a demonstration implementation on 2026-11-14; awaiting human approval.

## Components and authority

- Next.js App Router, TypeScript and Tailwind provide the mobile-first UI and server routes.
- A Rust NEP-171 contract is authoritative for token ownership, public pet identity and bounded gameplay state.
- PostgreSQL stores wallet challenges, sessions, private interaction history, allowance reservations, journal references and discovery records.
- One server-side NEAR AI adapter handles all archetypes. Archetypes are configuration, not separate agents.
- One discovery registry powers the feed, date-grouped calendar and archetype filters.
- A constrained generative-UI boundary accepts a schema-validated `NearlingView` document and renders only allowlisted application components and theme tokens.

Private conversation history and inference allowance are never NFT metadata and never transfer with the token. The application does not claim that off-chain allowance is NFT-controlled, self-funded or enforced by NEAR.

## Authorization boundary

Wallet connection identifies an account but does not authorize server mutations. Server authorization requires a short-lived session established from a verified, single-use NEP-413 challenge. Every protected pet operation rechecks the current on-chain owner so an NFT transfer immediately revokes the prior owner's access.

Contract mutations derive the caller from the NEAR execution environment. They never trust a caller-supplied owner field.

## Inference accounting

Allowance uses a transactional state machine: `available -> reserved -> consumed`, `reserved -> released`, or `reserved -> unknown -> consumed/released`. A unique `(token_id, idempotency_key)` constraint prevents duplicate reservations. Provider calls occur outside database transactions. Definite failures release the reservation; ambiguous timeouts remain `unknown` until reconciliation. A retry reuses the original idempotency key and provider request evidence.

## AI and discovery safety

NEAR AI credentials remain server-side. Responses are locally schema-validated even if the provider offers structured output. The UI renders untrusted text safely and never executes model-proposed financial actions or tools.

AI may narrate validated discovery records but cannot create factual rates, dates, sponsorship or verification claims. Sponsored examples are explicitly labeled `Sponsored - Demo Placement`.

The generative-UI layer is presentation-only. It cannot emit arbitrary HTML, JavaScript, URLs, transaction payloads or server tool calls. Component props are validated; actions reference a closed application action enum; authorization and allowance checks remain in trusted domain/server code. The demonstration renders one deterministic example and explains the future model-driven composition path.

## Demonstration adapters

The hackathon demonstration may bind the same domain interfaces to deterministic in-process adapters:

- `DemoIdentityRepository` represents token/owner fields but is labeled as simulated.
- `DemoInferenceProvider` returns deterministic, schema-validated Nearling responses.
- `MemoryAllowanceRepository` enforces reservation and idempotency semantics for a single-process demo.
- `StaticDiscoveryRegistry` contains curated source-linked records.

These adapters prove the interaction design and domain invariants, not production persistence, chain ownership or live AI. The README and UI must distinguish each demo adapter from its production counterpart.

## Deployment boundaries

Local sandbox and mocked provider tests precede testnet. Contract deployment, credit purchase, public repository publication and final submission each require separate human approval.

See `docs/INTEGRATION_VERIFICATION.md` for current evidence, compatibility constraints and unresolved gates.
