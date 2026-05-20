"use client";

import { motion } from "framer-motion";

export default function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-grid-pattern opacity-60"
        style={{ backgroundSize: "48px 48px" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-900/60 to-ink-900" />
      <motion.div
        className="absolute -left-32 top-1/4 h-[520px] w-[520px] rounded-full bg-neon-violet/20 blur-3xl"
        animate={{ x: [0, 60, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-120px] top-2/3 h-[460px] w-[460px] rounded-full bg-neon-cyan/15 blur-3xl"
        animate={{ x: [0, -60, 20, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/3 top-[-100px] h-[360px] w-[360px] rounded-full bg-neon-magenta/15 blur-3xl"
        animate={{ x: [0, 40, -40, 0], y: [0, 50, -10, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
