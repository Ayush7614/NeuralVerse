"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { posts, allTags } from "@/lib/posts";
import BlogCardLite from "./BlogCardLite";
import clsx from "clsx";

export default function BlogList() {
  const tags = allTags;
  const [active, setActive] = useState<string | null>(null);
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return [...posts]
      .sort((a, b) => b.date.localeCompare(a.date))
      .filter((p) => {
      const matchTag = !active || p.tags.includes(active);
      const matchQ =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query) ||
        p.tags.some((t) => t.toLowerCase().includes(query));
      return matchTag && matchQ;
    });
  }, [posts, active, q]);

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <Pill
            active={active === null}
            onClick={() => setActive(null)}
            label="All"
          />
          {tags.map((t) => (
            <Pill
              key={t}
              active={active === t}
              onClick={() => setActive(active === t ? null : t)}
              label={t}
            />
          ))}
        </div>
        <div className="relative w-full max-w-xs">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
          />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search blogs…"
            className="w-full rounded-full border border-white/10 bg-white/[0.04] py-2 pl-9 pr-3 text-sm text-white placeholder-white/30 focus:border-neon-cyan/60 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-3 font-mono text-xs text-white/40">
        {filtered.length} {filtered.length === 1 ? "blog" : "blogs"} matched
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <BlogCardLite key={p.slug} post={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-16 text-center text-white/50">
          No blogs found. Try a different tag or clear the search.
        </div>
      )}
    </div>
  );
}

function Pill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      data-cursor="hover"
      className={clsx(
        "rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all",
        active
          ? "border-neon-cyan/60 bg-neon-cyan/15 text-white shadow-neon"
          : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/25 hover:text-white"
      )}
    >
      {label}
    </button>
  );
}
