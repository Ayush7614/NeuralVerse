#!/usr/bin/env bash
# Run from ~/Projects — avoids iCloud Desktop slowness that freezes Next.js.
set -u

SOURCE="${HOME}/Desktop/NeuralVerse"
TARGET="${HOME}/Projects/NeuralVerse"

echo "══════════════════════════════════════════"
echo "  NeuralVerse — run off Desktop (fast)"
echo "══════════════════════════════════════════"

mkdir -p "${HOME}/Projects"

echo "→ [1/4] Copying project to ~/Projects/NeuralVerse..."
echo "   (source files only — no node_modules, ~10 sec)"
rsync -a \
  --exclude node_modules \
  --exclude node_modules.broken.* \
  --exclude .next \
  --exclude .git \
  "${SOURCE}/" "${TARGET}/"

cd "${TARGET}"

echo "→ [2/4] Stopping old servers..."
lsof -ti :3000 2>/dev/null | xargs kill -9 2>/dev/null || true

echo "→ [3/4] Installing dependencies (first time only)..."
if [ ! -f "node_modules/next/dist/bin/next" ]; then
  npm install --no-audit --no-fund
else
  echo "   already installed — skipping"
fi

rm -rf .next 2>/dev/null || true

echo "→ [4/4] Starting dev server..."
echo "   Open: http://localhost:3000"
echo "══════════════════════════════════════════"

exec node node_modules/next/dist/bin/next dev -p 3000
