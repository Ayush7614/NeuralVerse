/**
 * Fetches external cover images (og:image / Medium first-content image)
 * and updates lib/posts.ts by inserting `image: "<url>"` into `external`.
 *
 * Usage: node scripts/fetch-post-images.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const POSTS_FILE = path.join(ROOT, "lib/posts.ts");
const CACHE_FILE = path.join(ROOT, "scripts/.post-images-cache.json");

const UA =
  "Mozilla/5.0 (compatible; NeuralVerse/2.0; +https://neural-verse-peach.vercel.app)";

function normalizeUrl(url) {
  try {
    const u = new URL(url);
    u.hash = "";
    // keep query for dev.to dynamic images? usually none; normalize anyway
    u.search = "";
    let s = u.toString();
    if (s.endsWith("/")) s = s.slice(0, -1);
    return s;
  } catch {
    return url;
  }
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function pickMediumCover(markdown) {
  const imgs = [...markdown.matchAll(/!\[[^\]]*\]\((https?:\/\/[^)]+)\)/g)].map(
    (m) => m[1],
  );
  const fit = imgs.find((u) => u.includes("miro.medium.com") && u.includes("/resize:fit:"));
  const firstNonAvatar = imgs.find((u) => !u.includes("resize:fill:64:64"));
  return fit ?? firstNonAvatar ?? null;
}

async function fetchOgImage(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA }, redirect: "follow" });
  if (!res.ok) return null;
  const html = await res.text();
  const og =
    html.match(/property="og:image"\s+content="([^"]+)"/i)?.[1] ??
    html.match(/name="twitter:image"\s+content="([^"]+)"/i)?.[1] ??
    null;
  return og;
}

async function fetchMediumViaJina(url) {
  const res = await fetch(`https://r.jina.ai/${url}`, {
    headers: { "User-Agent": UA, Accept: "text/plain" },
  });
  if (!res.ok) return null;
  const text = await res.text();
  if (text.includes("Just a moment")) return null;
  return pickMediumCover(text);
}

async function resolveImage(url, platform, cache) {
  const key = normalizeUrl(url);
  if (cache[key]) return cache[key];

  let img = null;

  if (platform === "Medium" || url.includes("medium.com")) {
    img = await fetchMediumViaJina(url);
  }

  if (!img) {
    img = await fetchOgImage(url);
  }

  if (img) cache[key] = img;
  return img;
}

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const cache = fs.existsSync(CACHE_FILE)
    ? JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"))
    : {};

  let content = fs.readFileSync(POSTS_FILE, "utf8");

  const externals = [];
  const re =
    /external:\s*\{\s*\n\s*url:\s*"([^"]+)"\s*,\s*\n\s*(?:image:\s*"[^"]+"\s*,\s*\n\s*)?platform:\s*"([^"]+)"\s*,\s*\n\s*\}/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    externals.push({ url: m[1], platform: m[2] });
  }

  console.log(`→ Resolving cover images for ${externals.length} external posts…`);

  let updated = 0;
  let i = 0;
  for (const ext of externals) {
    i += 1;
    // Skip if already has image line
    const already = new RegExp(
      `url:\\s*"${escapeRe(ext.url)}"\\s*,\\s*\\n\\s*image:`,
    ).test(content);
    if (already) continue;

    const img = await resolveImage(ext.url, ext.platform, cache);
    if (img) {
      updated += 1;
      const before = content;
      content = content.replace(
        new RegExp(`(url:\\s*"${escapeRe(ext.url)}"\\s*,\\s*\\n)(\\s*)platform:`),
        `$1$2image: "${img}",\n$2platform:`,
      );
      if (content === before) {
        console.warn(`\n  ⚠ failed to insert image for ${ext.url}`);
        updated -= 1;
      }
    }
    process.stdout.write(`\r  [${i}/${externals.length}] +${updated}`);
    await sleep(200);
  }
  console.log("\n");

  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
  fs.writeFileSync(POSTS_FILE, content);

  console.log(`✓ Inserted ${updated} cover images`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

