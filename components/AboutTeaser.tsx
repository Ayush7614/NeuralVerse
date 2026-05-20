"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const skills = [
  "DevRel",
  "Community",
  "AI / ML / LLMs",
  "Agentic AI",
  "Vector Databases",
  "Cloud",
  "Open Source",
  "Technical Writing",
  "Developer Education",
  "Product Marketing",
];

export default function AboutTeaser() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-magenta shadow-neon-pink" />
            About
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            I build <span className="grad-text">AI systems</span>, grow
            <br /> communities, and ship in the open.
          </h2>
          <p className="mt-5 max-w-xl text-white/65">
            I&apos;m <strong className="text-white">Ayush Kumar</strong> —
            Senior Developer Relations Engineer, Community Manager, and AI &amp;
            Cloud Engineer. I work on AI, ML, LLMs, vector databases, agentic
            AI, memory layers, and the tools that power them. I love exploring
            open source, building AI systems, growing communities, and doing
            product marketing, technical writing, documentation, and developer
            education. NeuralVerse is where I share the blogs, experiments, and
            ideas from that work.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="chip"
              >
                {s}
              </motion.span>
            ))}
          </div>

          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-neon-cyan hover:text-white"
            data-cursor="hover"
          >
            More about me
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neon-cyan/30 via-neon-violet/20 to-neon-magenta/30 blur-2xl" />
          <div className="scanlines relative h-full overflow-hidden rounded-3xl border border-white/10 bg-ink-800/60 p-6 backdrop-blur-xl">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-neon-magenta shadow-neon-pink" />
              <span className="h-2.5 w-2.5 rounded-full bg-neon-amber" />
              <span className="h-2.5 w-2.5 rounded-full bg-neon-lime" />
              <span className="ml-2 font-mono text-[11px] text-white/40">
                ~/ayush — bash
              </span>
            </div>
            <pre className="font-mono text-[13px] leading-relaxed text-white/80">
{`$ whoami
> ayush.kumar

$ cat ./roles.txt
> DevRel · Community · AI & Cloud Engineer

$ ls ~/now/
  ├── building/agentic-ai-systems
  ├── growing/developer-communities
  ├── writing/technical-docs
  ├── exploring/open-source-ai
  └── shipping/vector-memory-layers`}<span className="inline-block h-4 w-2 -mb-0.5 bg-neon-cyan animate-pulse" />
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
