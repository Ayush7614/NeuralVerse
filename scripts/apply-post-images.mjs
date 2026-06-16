/**
 * Applies cached cover images from scripts/.post-images-cache.json into lib/posts.ts
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const POSTS_FILE = path.join(ROOT, "lib/posts.ts");
const CACHE_FILE = path.join(ROOT, "scripts/.post-images-cache.json");

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const cache = JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"));
let content = fs.readFileSync(POSTS_FILE, "utf8");

let applied = 0;
for (const [url, image] of Object.entries(cache)) {
  const hasImage = new RegExp(
    `url:\\s*"${escapeRe(url)}"\\s*,\\s*\\n\\s*image:`,
  ).test(content);
  if (hasImage) continue;

  const before = content;
  content = content.replace(
    new RegExp(`(url:\\s*"${escapeRe(url)}"\\s*,\\s*\\n)(\\s*)platform:`),
    `$1$2image: "${image}",\n$2platform:`,
  );
  if (content !== before) applied += 1;
}

fs.writeFileSync(POSTS_FILE, content);
console.log(`✓ Applied ${applied} cover images from cache`);
