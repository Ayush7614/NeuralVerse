import { posts } from "@/lib/posts";

const SITE = "https://neuralverse.dev";

export async function GET() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  const items = sorted
    .map((post) => {
      const link = post.external?.url ?? `${SITE}/blog/${post.slug}`;
      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
    </item>`;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>NeuralVerse — Ayush Kumar</title>
    <link>${SITE}</link>
    <description>Blogs on AI, engineering, security, and local LLMs.</description>
    <language>en-us</language>${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
