#!/usr/bin/env bash
set -euo pipefail
if [[ ! -f package.json ]]; then echo 'Run from the Nearlings repository root'; exit 1; fi
pnpm install --frozen-lockfile
pnpm run lint
pnpm run typecheck
pnpm test
pnpm run build
printf 'Demo verification completed. Live wallet, contract and NEAR AI checks remain outside this slice.\n'
