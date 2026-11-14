# Test matrix

Unit: feeding clamps; archetype config; date/category filtering; source validation; structured AI schema; allowance state machine.
Integration: mint/owner read; non-owner feed denied; wallet nonce expiry and replay denied; NFT transfer invalidates prior owner access; successful inference consumes exactly one; failed inference refunds; concurrent duplicate requests cannot double debit; timeout/unknown outcome reconciled; exhausted allowance blocks; invalid AI output handled safely; journal access follows current owner.
Security: secret scan, dependency audit, API rate limits, XSS-safe rendering, prompt injection attempts against tool/financial permissions, NFT metadata privacy.
End-to-end: clean wallet → mint → feed → talk → see 3→2 → discovery → calendar → save if implemented → source link. Repeat from clean install and deployed URL.
Demo end-to-end: choose archetype → create labeled demo identity → feed → talk → see 3→2 → replay same idempotency key and remain at 2 → discovery → calendar → source → generative UI concept. Assert every simulated boundary remains visible.
Generative UI: valid allowlisted view renders; unknown component, arbitrary URL, raw HTML/script and transaction/tool action are rejected.
Evidence: record commands, results, contract IDs, screenshots and known limitations in docs/REVIEW_LOG.md. Never mark a test passing without running it.
