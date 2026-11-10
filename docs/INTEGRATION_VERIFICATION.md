# Integration verification

Verified on 2026-11-10. This document records evidence and open gates; it is not proof that live integrations have passed.

## Official hackathon instructions

- The organizer instructions are preserved at `HACKATHON.md`.
- Development ends at `2026-11-14T23:59:00Z`.
- Submission requires a public repository and public X demo post.
- The post must state that the project was built at NEAR HACKATHON, tag `@NEARProtocol`, include `#NEARHackathon`, and attach video or screenshots.
- The plausible track IDs are `nfts` (NFTs That Do Something) and `open` (Open Innovation). Final track selection remains a human decision.
- The live organizer instructions must be re-downloaded and diffed immediately before submission.

## NFT contract

Decision: Rust contract using `near-sdk` and the official `near-contract-standards` NEP-171 implementation pattern.

Verified official references:

- NEP-171 defines the standard NFT interface and events.
- The maintained `near-examples/NFT` project provides mint, owner lookup, transfer, metadata, events, build commands, and local sandbox integration-test patterns.
- Contract dependency and toolchain versions must be pinned when the contract is scaffolded.

Required smoke tests before G2:

- Local sandbox mint and owner lookup.
- Owner-only feed succeeds; non-owner feed fails.
- Transfer revokes the previous owner's mutation access.
- Testnet mint and owner lookup after explicit deployment approval.

## Wallet authentication

Decision: use NEP-413 signed messages for server sessions. A challenge contains a random 32-byte nonce, recipient/domain, account ID, issued time, expiry, and intended audience. The server consumes the nonce once, verifies the signature against a current account access key, and rechecks current NFT ownership on every protected operation.

Compatibility constraint: message-signing support varies by wallet. Do not claim universal compatibility. Before G2, select a minimal wallet set and run redirect and non-redirect signing tests on testnet. If a chosen wallet cannot reliably return NEP-413 signatures, use a narrowly scoped transaction challenge rather than weakening authentication.

## NEAR AI Cloud

Decision: one server-only adapter targeting `https://cloud-api.near.ai/v1`; never expose the bearer API key to the browser.

Verified official behavior:

- The API is OpenAI-compatible and uses bearer API keys.
- An account, API key, and credits are required.
- The official TypeScript inference SDK can verify deployment evidence and response signatures.
- Gateway signatures and provider-TEE signatures provide different guarantees; evidence must record the actual signature kind.

Unverified until a funded live smoke test:

- Selected production model and availability.
- Provider support for strict JSON-schema output.
- Timeout and request-identifier behavior needed for reconciliation.
- Whether the selected response exposes gateway or provider-TEE verification evidence.

Regardless of provider support, responses must be parsed and locally schema-validated. Malformed output is a failed application result. Ambiguous provider timeouts retain an `unknown` reservation until reconciled.

## Local toolchain audit

Observed on 2026-11-10:

- Git `2.56.0.windows.4`: available.
- Node `v24.22.1`: available from the Codex runtime.
- npm: unavailable on `PATH`.
- Rust and Cargo: unavailable.
- `cargo-near`: unavailable.
- WSL: not installed.

Bootstrap remains blocked until a supported Node/npm installation and the Rust contract toolchain are installed. The official NEAR app guidance recommends WSL for Windows contract development. Installing WSL is a machine-level change and requires explicit approval.

## Gate status

- Official requirements captured: pass.
- Architecture documented: ready for human approval.
- Repository initialized: pass.
- Reproducible application toolchain: blocked on npm, WSL, Rust, and `cargo-near` installation.
- Live NEAR AI verification: blocked on API credentials, credits, and spending approval.
- Testnet contract verification: blocked until implementation and explicit deployment approval.
