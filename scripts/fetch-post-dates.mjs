/**
 * Fetches real publish dates for external posts and updates lib/posts.ts.
 * Usage: node scripts/fetch-post-dates.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const POSTS_FILE = path.join(ROOT, "lib/posts.ts");
const CACHE_FILE = path.join(ROOT, "scripts/.post-dates-cache.json");

const UA =
  "Mozilla/5.0 (compatible; NeuralVerse/2.0; +https://neural-verse-peach.vercel.app)";

function normalizeUrl(url) {
  try {
    const u = new URL(url);
    u.hash = "";
    u.search = "";
    let s = u.toString();
    if (s.endsWith("/")) s = s.slice(0, -1);
    return s;
  } catch {
    return url;
  }
}

function toDate(iso) {
  if (!iso) return null;
  const d = iso.slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(d) ? d : null;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchDevToCatalog() {
  const map = new Map();
  for (const username of ["ayush7614", "nodeshiftcloud", "techlatest-ai"]) {
    let page = 1;
    while (true) {
      const res = await fetch(
        `https://dev.to/api/articles?username=${username}&per_page=1000&page=${page}`,
        { headers: { Accept: "application/json" } },
      );
      if (!res.ok) break;
      const articles = await res.json();
      if (!Array.isArray(articles) || articles.length === 0) break;
      for (const a of articles) {
        if (a.url && a.published_at) {
          map.set(normalizeUrl(a.url), toDate(a.published_at));
        }
      }
      if (articles.length < 1000) break;
      page += 1;
    }
  }
  return map;
}

async function fetchFromHtml(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": UA },
    redirect: "follow",
  });
  if (!res.ok) return null;
  const html = await res.text();
  const patterns = [
    /"datePublished"\s*:\s*"([^"]+)"/,
    /property="article:published_time"\s+content="([^"]+)"/,
    /"published_at"\s*:\s*"([^"]+)"/,
    /"publishedAt"\s*:\s*"([^"]+)"/,
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m) return toDate(m[1]);
  }
  return null;
}

async function fetchViaJina(url) {
  const res = await fetch(`https://r.jina.ai/${url}`, {
    headers: { "User-Agent": UA, Accept: "text/plain" },
  });
  if (!res.ok) return null;
  const text = await res.text();
  const m =
    text.match(/Published Time:\s*(\d{4}-\d{2}-\d{2})/i) ||
    text.match(/(\d{4}-\d{2}-\d{2})T\d{2}:\d{2}:\d{2}Z/);
  return m ? m[1] : null;
}

function parsePosts(content) {
  const posts = [];
  const re =
    /slug:\s*"([^"]+)"[\s\S]*?date:\s*"([^"]+)"[\s\S]*?url:\s*"([^"]+)"[\s\S]*?platform:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    posts.push({ slug: m[1], date: m[2], url: m[3], platform: m[4] });
  }
  return posts;
}

async function resolveDate(url, devToMap, cache) {
  const key = normalizeUrl(url);
  if (cache[key]) return cache[key];

  let date = devToMap.get(key) ?? null;
  if (!date && url.includes("dev.to")) {
    date = await fetchFromHtml(url);
  }
  if (!date && (url.includes("medium.com") || url.includes("nodeshift"))) {
    date = await fetchViaJina(url);
    await sleep(400);
  }
  if (!date) {
    date = await fetchFromHtml(url);
  }

  if (date) cache[key] = date;
  return date;
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function main() {
  console.log("→ Loading dev.to catalog…");
  const devToMap = await fetchDevToCatalog();
  console.log(`  ${devToMap.size} dev.to articles indexed`);

  const cache = fs.existsSync(CACHE_FILE)
    ? JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"))
    : {};

  let content = fs.readFileSync(POSTS_FILE, "utf8");
  const posts = parsePosts(content);
  console.log(`→ Resolving dates for ${posts.length} posts…`);

  const updates = [];
  let i = 0;
  for (const post of posts) {
    i += 1;
    const resolved = await resolveDate(post.url, devToMap, cache);
    if (resolved && resolved !== post.date) {
      updates.push({ slug: post.slug, from: post.date, to: resolved });
      content = content.replace(
        new RegExp(
          `(slug:\\s*"${escapeRe(post.slug)}"[\\s\\S]*?date:\\s*")[^"]+(")`,
        ),
        `$1${resolved}$2`,
      );
    }
    if (!resolved) {
      console.warn(`\n  ⚠ no date: ${post.slug}`);
    } else {
      process.stdout.write(`\r  [${i}/${posts.length}] latest: ${resolved}`);
    }
  }
  console.log("\n");

  if (!content.includes(".sort((a, b) => b.date.localeCompare(a.date))")) {
    content = content.replace(
      /^export const posts: Post\[\] = \[([\s\S]*?)\n\];/m,
      "export const posts: Post[] = [$1\n].sort((a, b) => b.date.localeCompare(a.date));",
    );
  }

  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
  fs.writeFileSync(POSTS_FILE, content);

  console.log(`✓ Updated ${updates.length} dates`);
  if (updates.length) {
    console.log("\nSample updates:");
    updates.slice(0, 10).forEach((u) =>
      console.log(`  ${u.from} → ${u.to}  ${u.slug}`),
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
