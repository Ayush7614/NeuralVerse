"use client";

const items = [
  "AI Engineering",
  "Distributed Systems",
  "Design Systems",
  "Rust",
  "TypeScript",
  "Neural Networks",
  "Edge Compute",
  "Cryptography",
  "Product",
  "Open Source",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="relative mt-16 overflow-hidden border-y border-white/10 bg-white/[0.02] py-8 sm:mt-24 sm:py-10">
      <div className="marquee-track">
        {doubled.map((it, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-8 px-6 font-display text-2xl text-white/30 sm:text-3xl"
          >
            <span className="transition-colors hover:text-neon-cyan">{it}</span>
            <span className="text-neon-cyan/60">◆</span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink-900 to-transparent" />
    </div>
  );
}
