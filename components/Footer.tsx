"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Rss, Sparkles } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  const onSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const formId =
      process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER_FORM_ID ??
      process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
    if (!formId) {
      setStatus("error");
      setError("Newsletter signup is not configured yet.");
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          _replyto: email,
          _subject: "NeuralVerse newsletter signup",
        }),
      });

      const payload = (await res.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!res.ok) {
        throw new Error(payload?.error ?? "Could not subscribe. Try again.");
      }

      setStatus("done");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Could not subscribe.");
    }
  };

  return (
    <footer className="relative z-10 mt-32 border-t border-white/10 bg-ink-900/60 backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px shimmer-line" />
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-2xl font-bold tracking-tight">
              <span className="grad-text">Neural</span>
              <span>Verse</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-white/60">
              Notebook and signal feed of Ayush Kumar — writing about
              engineering, AI, and the systems we build to think with.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <SocialLink
                href="https://github.com/Ayush7614"
                icon={<Github size={16} />}
                label="GitHub"
              />
              <SocialLink
                href="https://x.com/AYUSHKUMAR82274"
                icon={<Twitter size={16} />}
                label="X / Twitter"
              />
              <SocialLink
                href="https://www.linkedin.com/in/ayush-kumar-984443191/"
                icon={<Linkedin size={16} />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://topmate.io/ayush7"
                icon={<Sparkles size={16} />}
                label="Topmate · book a 1:1"
              />
              <SocialLink
                href="mailto:ayushknj3@gmail.com"
                icon={<Mail size={16} />}
                label="Email"
              />
              <SocialLink
                href="/rss.xml"
                icon={<Rss size={16} />}
                label="RSS"
              />
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-xs uppercase tracking-[0.2em] text-white/40">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li><Link href="/" className="hover:text-neon-cyan">Home</Link></li>
              <li><Link href="/blog" className="hover:text-neon-cyan">Blog</Link></li>
              <li><Link href="/projects" className="hover:text-neon-cyan">Projects</Link></li>
              <li><Link href="/about" className="hover:text-neon-cyan">About</Link></li>
              <li><Link href="/contact" className="hover:text-neon-cyan">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs uppercase tracking-[0.2em] text-white/40">
              Subscribe
            </h4>
            <p className="mb-3 text-sm text-white/60">
              Get new blogs in your inbox.
            </p>
            <form onSubmit={onSubscribe} className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading" || status === "done"}
                  placeholder="you@galaxy.dev"
                  className="w-full rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white placeholder-white/30 focus:border-neon-cyan/60 focus:outline-none disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "done"}
                  className="shrink-0 rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet px-3 py-2 text-xs font-semibold text-ink-900 transition-transform hover:scale-105 disabled:opacity-60"
                >
                  {status === "loading" ? "…" : status === "done" ? "Joined" : "Join"}
                </button>
              </div>
              {status === "done" && (
                <p className="text-xs text-neon-lime">You&apos;re on the list.</p>
              )}
              {status === "error" && error && (
                <p className="text-xs text-red-300">{error}</p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/40 md:flex-row">
          <div>© {new Date().getFullYear()} Ayush Kumar · NeuralVerse</div>
          <div className="font-mono">
            Built with Next.js · Framer Motion · Tailwind ·{" "}
            <span className="text-neon-cyan">love</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:");

  const className =
    "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-all hover:-translate-y-0.5 hover:border-neon-cyan/60 hover:text-neon-cyan hover:shadow-neon";

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className={className}
      >
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={label} className={className}>
      {icon}
    </Link>
  );
}
