"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  ArrowUpRight,
  GitBranch,
  Sparkles,
  Bot,
  Megaphone,
  Users,
  Brain,
  CheckCircle2,
} from "lucide-react";

const TOPMATE_URL = "https://topmate.io/ayush7";

const topics = [
  { icon: <GitBranch size={14} />, label: "Open Source" },
  { icon: <Brain size={14} />, label: "AI / ML / LLMs" },
  { icon: <Bot size={14} />, label: "Agentic AI" },
  { icon: <Megaphone size={14} />, label: "Developer Relations" },
  { icon: <Users size={14} />, label: "Community Management" },
];

type Variant = "feature" | "compact";

export default function MentorshipCard({
  variant = "feature",
}: {
  variant?: Variant;
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, rgba(255,0,229,0.18), transparent 50%)`;

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  if (variant === "compact") {
    return (
      <a
        href={TOPMATE_URL}
        target="_blank"
        rel="noreferrer"
        data-cursor="hover"
        onMouseMove={handleMove}
        className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neon-magenta/10 via-neon-violet/8 to-neon-cyan/10 p-5 transition-all hover:border-neon-magenta/40 hover:shadow-neon-pink"
      >
        <motion.div
          style={{ background: spotlight }}
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
        />
        <div className="relative z-10 flex items-start gap-3">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neon-magenta/15 text-neon-magenta">
            <Sparkles size={16} />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neon-magenta">
                Book a 1:1
              </span>
              <span className="chip !px-2 !py-0.5 !text-[9px]">Topmate</span>
            </div>
            <div className="mt-1 font-display text-base font-semibold text-white">
              Mentorship & guidance sessions
            </div>
            <div className="mt-0.5 truncate text-xs text-white/55">
              Open Source · AI · LLMs · Agentic AI · DevRel · Community
            </div>
          </div>
          <ArrowUpRight
            size={16}
            className="text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon-magenta"
          />
        </div>
      </a>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMove}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800/90 via-ink-800/60 to-ink-800/90 p-8 sm:p-12"
    >
      <motion.div
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0"
      />
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-neon-magenta/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-neon-cyan/15 blur-3xl" />

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon-magenta/30 bg-neon-magenta/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-neon-magenta">
            <Sparkles size={12} />
            1:1 mentorship · powered by Topmate
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Book a session with me on{" "}
            <span className="grad-text">whatever&apos;s in your head.</span>
          </h2>
          <p className="mt-4 max-w-xl text-white/65">
            Get unstuck on a hard problem, sharpen your roadmap, or just have a
            conversation about the road ahead. I run paid 1:1s through Topmate
            on the topics I&apos;ve spent the last decade in.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {topics.map((t) => (
              <li
                key={t.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/80 transition-all hover:border-neon-cyan/40 hover:bg-neon-cyan/10 hover:text-white"
              >
                <span className="text-neon-cyan">{t.icon}</span>
                {t.label}
              </li>
            ))}
          </ul>

          <ul className="mt-6 grid gap-1.5 text-sm text-white/65 sm:grid-cols-2">
            <Bullet>1:1 video calls (15 / 30 / 60 mins)</Bullet>
            <Bullet>Priority DMs · async questions</Bullet>
            <Bullet>Resume & LinkedIn reviews</Bullet>
            <Bullet>30+ five-star reviews on Topmate</Bullet>
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={TOPMATE_URL}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="group/btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-magenta via-neon-violet to-neon-cyan px-6 py-3 text-sm font-semibold text-ink-900 shadow-neon-pink transition-transform hover:-translate-y-0.5"
            >
              View sessions on Topmate
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
              />
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/85 transition-all hover:border-neon-cyan/60 hover:bg-neon-cyan/10 hover:text-white"
            >
              Or message me first
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-neon-magenta/30 via-neon-violet/20 to-neon-cyan/30 blur-2xl" />
          <div className="glass relative rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                topmate.io/ayush7
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-neon-lime/15 px-2 py-0.5 text-[10px] font-medium text-neon-lime">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-lime" />
                Top 1%
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-neon-cyan to-neon-magenta">
                <div className="absolute inset-0 grid place-items-center font-display text-lg font-bold text-ink-900">
                  AK
                </div>
              </div>
              <div>
                <div className="font-display text-sm font-semibold text-white">
                  Ayush Kumar
                </div>
                <div className="text-[11px] text-white/55">
                  DevRel · OSS · AI · Community
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <SessionRow
                title="Guidance on Open Source, GitHub"
                meta="60 mins · ★ 5.0"
                price="$2"
                pop
              />
              <SessionRow
                title="Guidance on Full Stack / AI / LLMs"
                meta="30 mins · ★ 5.0"
                price="$1"
              />
              <SessionRow
                title="Priority DM"
                meta="reply in ~1 day"
                price="FREE"
                free
              />
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-white/55">
              <span className="font-mono">★ 4.3 · 30 ratings · 22 reviews</span>
              <a
                href={TOPMATE_URL}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-neon-cyan hover:text-white"
              >
                See all →
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="inline-flex items-center gap-2">
      <CheckCircle2 size={14} className="shrink-0 text-neon-cyan" />
      {children}
    </li>
  );
}

function SessionRow({
  title,
  meta,
  price,
  pop,
  free,
}: {
  title: string;
  meta: string;
  price: string;
  pop?: boolean;
  free?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 transition-colors hover:border-neon-magenta/40">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="truncate text-[13px] font-medium text-white">
            {title}
          </span>
          {pop && (
            <span className="rounded-full bg-neon-magenta/20 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-neon-magenta">
              Popular
            </span>
          )}
        </div>
        <div className="font-mono text-[10px] text-white/45">{meta}</div>
      </div>
      <span
        className={
          free
            ? "rounded-full bg-neon-lime/15 px-2.5 py-0.5 text-[11px] font-semibold text-neon-lime"
            : "rounded-full bg-neon-cyan/15 px-2.5 py-0.5 text-[11px] font-semibold text-neon-cyan"
        }
      >
        {price}
      </span>
    </div>
  );
}
