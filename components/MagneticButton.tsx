"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import clsx from "clsx";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  onClick?: () => void;
};

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  className,
  onClick,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 14, mass: 0.4 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.35);
    y.set(dy * 0.45);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classes = clsx(
    "relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors",
    variant === "primary"
      ? "bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta text-ink-900 shadow-neon"
      : "border border-white/15 bg-white/[0.04] text-white hover:bg-white/10",
    className
  );

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className="inline-block"
      data-cursor="hover"
    >
      <span className={classes}>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {inner}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {inner}
    </button>
  );
}
