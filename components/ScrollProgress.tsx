"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 22,
    mass: 0.3,
  });

  return (
    <motion.div
      style={{ scaleX: x }}
      className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta shadow-neon"
    />
  );
}
