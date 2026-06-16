"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import GlitchText from "./GlitchText";
import MagneticButton from "./MagneticButton";

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay: 0.15 + i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pb-28 pt-32 sm:pb-36"
    >
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-white/70 backdrop-blur"
        >
          <Sparkles size={12} className="text-neon-cyan" />
          <span className="font-mono tracking-wider">
            v2.0 · est. 2026 · transmitting…
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tight"
        >
          <span className="block text-white/90">Welcome to the</span>
          <span className="mt-2 block">
            <GlitchText text="NeuralVerse" className="grad-text neon-text" />
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto mt-7 max-w-2xl text-lg text-white/65 sm:text-xl"
        >
          The notebook and signal feed of{" "}
          <span className="text-white">Ayush Kumar</span> — blogs on
          engineering, AI, design, open source, developer tools, LLMs, AI
          agents, agentic AI, cybersecurity, AI security, and much more.
          Built to be read, made to be felt.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton href="/blog">
            Enter the blog
            <span aria-hidden>→</span>
          </MagneticButton>
          <MagneticButton href="/about" variant="ghost">
            About me
          </MagneticButton>
        </motion.div>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-14 mb-6 grid grid-cols-2 gap-3 sm:mb-10 sm:grid-cols-4 sm:gap-4"
        >
          <Stat n="800+" label="blogs published" />
          <Stat n="100K+" label="words shipped" />
          <Stat n="500K+" label="reads" />
          <Stat n="∞" label="caffeine units" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 transform"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/40"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">
              Scroll
            </span>
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </motion.div>

      <FloatingOrbs />
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="glass rounded-2xl px-3 py-4 sm:px-6">
      <div className="font-display text-2xl font-bold text-white sm:text-3xl">
        <span className="grad-text">{n}</span>
      </div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/50 sm:text-xs">
        {label}
      </div>
    </div>
  );
}

function FloatingOrbs() {
  return (
    <>
      <motion.div
        aria-hidden
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[8%] top-[22%] h-20 w-20 rounded-full border border-neon-cyan/40 bg-neon-cyan/5 backdrop-blur-md"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 18, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[10%] top-[18%] h-14 w-14 rounded-2xl border border-neon-magenta/40 bg-neon-magenta/5 backdrop-blur-md"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, -24, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[18%] bottom-[18%] h-10 w-10 rotate-45 border border-neon-violet/40 bg-neon-violet/5 backdrop-blur-md"
      />
    </>
  );
}
