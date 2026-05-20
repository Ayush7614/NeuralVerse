#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "→ Clearing stale Next.js cache (.next)..."
rm -rf .next

echo "→ Starting dev server on http://localhost:3000"
echo "  (First compile may take 30–60 seconds — wait for 'Ready')"
npm run dev
