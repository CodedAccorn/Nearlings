#!/usr/bin/env bash
set -euo pipefail
if [[ ! -f package.json ]]; then echo 'Run in the application repository after Codex scaffolds package.json'; exit 1; fi
npm ci
npm run lint --if-present
npm run typecheck --if-present
npm test --if-present -- --runInBand || { echo 'Check test runner options; do not ignore a real failure'; exit 1; }
npm run build
printf 'Verification commands completed. Also run contract, integration, security and live E2E checks.\n'
