# Release and hackathon submission checklist

Verified against the live organizer instructions on 2026-11-14 at approximately 17:18 UTC. Deadline: **2026-11-14 23:59 UTC**. Recheck the [live instructions](https://nearhackathon.com/HACKATHON.md) immediately before submission.

## Ready

- [x] Official requirements and deadline rechecked against the live site.
- [x] Locked dependency installation and reproducible run commands documented.
- [x] Lint, typecheck, five unit tests and production build passed on 2026-11-14.
- [x] Security/scope review recorded in `docs/REVIEW_LOG.md`; simulated boundaries are disclosed.
- [x] MIT license added.
- [x] Judge walkthrough, dependencies, limitations and track recommendation documented.
- [x] No secrets detected by the repository credential-pattern scan.
- [x] Unimplemented NFT, wallet, live AI and continuous-inference behavior is not claimed.
- [x] Clean local clone of commit `e7b13f7` passed frozen install, lint, typecheck, five tests and production build.
- [x] Public repository published and anonymously verified: https://github.com/CodedAccorn/Nearlings

## Blocking submission

- [ ] Decide whether this submission is the current demo under `open`, or whether to first add verifiable NEAR functionality. Do not select `nfts` based only on the simulated token display.
- [ ] Record a short demo video because the demo is currently local-only; screenshots alone are insufficient for a local-only project.
- [ ] Create or select the required **mainnet** NEAR payout account.
- [ ] Publish the human-authored X post with the video, `@NEARProtocol` and `#NEARHackathon`; obtain its public URL.
- [ ] Provide and validate every submission field listed in `docs/SUBMISSION_PREP.md`.
- [ ] Read and affirm the exact consent notice.
- [ ] Confirm the full JSON payload after it is printed. Submit exactly once before 23:59 UTC and save the 201 confirmation.

## Optional but valuable

- [ ] Host the demo and keep it available through 2026-11-18, ideally 2026-11-25.
- [ ] Add a real NEAR testnet proof only if it can be completed, tested and honestly demonstrated before the publication freeze.
- [ ] Tag the final commit `hackathon-submission` and link the build-window diff in the README.
