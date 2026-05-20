"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const nav = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div
        className={clsx(
          "mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300",
          scrolled
            ? "rounded-2xl border border-white/10 bg-ink-900/70 px-4 py-2 backdrop-blur-xl"
            : ""
        )}
      >
        <Link href="/" className="group flex items-center gap-2">
          <LogoMark />
          <span className="font-display text-base font-bold tracking-tight">
            <span className="grad-text">Neural</span>
            <span className="text-white">Verse</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-3 py-1.5 text-sm text-white/75 transition-colors hover:text-white"
              >
                <span className="relative z-10">{item.label}</span>
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-0 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 shadow-neon"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition-all hover:border-neon-cyan/60 hover:bg-neon-cyan/10 hover:shadow-neon md:inline-flex"
          data-cursor="hover"
        >
          Let&apos;s talk
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-white md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-3 max-w-6xl px-5 md:hidden"
          >
            <div className="glass-strong flex flex-col gap-1 rounded-2xl p-3">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function LogoMark() {
  return (
    <motion.svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      whileHover={{ rotate: 90 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ff00e5" />
        </linearGradient>
      </defs>
      <path
        d="M6 6L26 26M26 6L6 26M16 4V28M4 16H28"
        stroke="url(#logo-grad)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="16"
        cy="16"
        r="4"
        stroke="url(#logo-grad)"
        strokeWidth="2"
        fill="#05060a"
      />
    </motion.svg>
  );
}
