# NEAR HACKATHON submission preparation

This file contains no private submission payload and must not be used as evidence that a submission was sent.

## Compliance assessment

| Requirement | Current status | Evidence or action |
|---|---|---|
| Working prototype | Ready | Local Next.js demonstration; judge steps are in `README.md`. |
| Public repository | Blocked | No Git remote is configured. Human approval is required before creation, push or publication. |
| Reproducible setup | Ready, clean-clone retest pending | Locked pnpm install and verification commands are documented. |
| License | Ready | MIT `LICENSE`. |
| Concrete NEAR fit | At risk | NEAR identity/NFT and AI are represented but simulated. Submit to `open` unless verifiable NEAR functionality is added. |
| Public X demo post | Blocked | Human must publish it; a local-only demo requires video. |
| Mainnet payout account | Blocked | Must be supplied by the human; never invent one. |
| Submission fields and consent | Blocked | Human decisions are listed below. |
| Submit before deadline | Blocked | One submission only, before 2026-11-14 23:59 UTC. |

## Human-supplied fields

Provide these values without placeholders before a payload is generated:

- Project name, 2–80 characters. Recommended: `Nearlings`.
- Team lead name, 2–80 characters.
- Contact email, maximum 160 characters.
- Team size: exactly one of `1`, `2 - 4`, `4 - 6`, `6 - 8`, `8+`.
- Track IDs. Recommended for the current implementation: `["open"]`.
- Mainnet NEAR payout account, lowercase and 2–64 characters.
- Public repository URL, maximum 300 characters.
- Public X demo-post URL, maximum 300 characters.
- Confirmation that this repository has not already been submitted.
- Disclosure of any second hackathon project submitted under the same email.

Consent notice to affirm verbatim:

> I agree that the organizers may use these details to review our submission and contact us about this hackathon.

## Draft project description

Nearlings explores how persistent companion intelligence can turn sourced ecosystem developments into an understandable, owner-controlled experience. The demonstration connects four configurable companion perspectives to a shared content registry, calendar context, transparent sponsored placement and a governed generative-UI format. It proves bounded care state, schema-validated responses and idempotent inference accounting locally. The broader NEAR design uses NFT ownership as the companion identity and authorization boundary and NEAR AI as the private inference provider; those integrations are explicitly simulated in this deadline-bounded demonstration rather than presented as deployed functionality.

Review this description before use. It is deliberately explicit about the current implementation boundary.

## Demo recording plan

Target 60–90 seconds:

1. State the problem: crypto information is fragmented across feeds, dates and promotions.
2. Choose Guardian to show personality as configuration, not a separate ungoverned agent.
3. Feed the companion, then talk once and show the allowance move from 3 to 2.
4. Replay the request and show it remains at 2.
5. Show a sourced discovery in both feed and calendar.
6. Point out the sponsored disclosure and generative-UI allowlist.
7. End on the limitation label: NFT identity and live NEAR AI are the intended NEAR production boundary, simulated in this demo.

## Draft X post

Crypto information is fragmented across feeds, calendars and promotions. Nearlings explores an owner-controlled companion that turns sourced records into continuous, personality-driven context.

Built at NEAR HACKATHON. The demo shows bounded care, idempotent inference accounting, shared feed/calendar records, sponsorship disclosure and a governed generative-UI concept. NEAR NFT identity and NEAR AI are represented honestly as the next integration boundary, not claimed as deployed.

[Attach demo video and add the public repository URL]

@NEARProtocol #NEARHackathon

## Final submission sequence

1. Freeze implementation and rerun clean-clone verification.
2. Record the video from that exact commit.
3. Commit final documentation and tag the commit if desired.
4. With human approval, create/push the public repository and verify anonymous access.
5. Human publishes the X post and returns its URL.
6. Validate all fields and generate one UUID request ID. Do not commit the payload.
7. Print the exact JSON payload and obtain explicit human confirmation.
8. Send one submission. Reuse the same request ID only for a validation fix or transient retry.
9. Save the 201 response and submitted URLs privately.
10. For later corrections, use the organizer request-changes page; never submit again.
