#!/usr/bin/env bash
# Fast start — no slow checks, no reinstall unless next is missing.
set -u

cd "$(dirname "$0")/.."
ROOT="$(pwd)"

echo "══════════════════════════════════════════"
echo "  NeuralVerse — fix & run"
echo "══════════════════════════════════════════"

echo "→ [1/4] Stopping old servers..."
lsof -ti :3000 2>/dev/null | xargs kill -9 2>/dev/null || true
pkill -f "${ROOT}/node_modules/.bin/next dev" 2>/dev/null || true

echo "→ [2/4] Clearing build cache..."
rm -rf .next 2>/dev/null || true

echo "→ [3/4] Checking dependencies..."
if [ ! -f "node_modules/next/dist/bin/next" ]; then
  echo "   next not found — running npm install (may take 1–2 min)..."
  npm install --no-audit --no-fund
else
  echo "   dependencies OK — skipping reinstall"
fi

echo "→ [4/4] Starting dev server..."
echo "   Open: http://localhost:3000"
echo "   Wait for: ✓ Ready"
echo "══════════════════════════════════════════"

exec node node_modules/next/dist/bin/next dev -p 3000
