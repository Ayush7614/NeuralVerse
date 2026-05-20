"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Mail,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Twitter,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";

const EMAILS = ["ayushknj3@gmail.com", "claude24x7user@gmail.com"] as const;

const SOCIALS = [
  {
    label: "GitHub",
    handle: "@Ayush7614",
    href: "https://github.com/Ayush7614",
    icon: <Github size={16} />,
  },
  {
    label: "LinkedIn",
    handle: "ayush-kumar-984443191",
    href: "https://www.linkedin.com/in/ayush-kumar-984443191/",
    icon: <Linkedin size={16} />,
  },
  {
    label: "X / Twitter",
    handle: "@AYUSHKUMAR82274",
    href: "https://x.com/AYUSHKUMAR82274",
    icon: <Twitter size={16} />,
  },
  {
    label: "Topmate",
    handle: "topmate.io/ayush7",
    href: "https://topmate.io/ayush7",
    icon: <Sparkles size={16} />,
  },
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
    if (!formId) {
      setError("Contact form is not configured yet.");
      setLoading(false);
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
          name: data.name,
          email: data.email,
          message: data.message,
          _replyto: data.email,
          _subject: `NeuralVerse contact from ${data.name}`,
        }),
      });

      const payload = (await res.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!res.ok) {
        throw new Error(payload?.error ?? "Something went wrong. Please try again.");
      }

      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const copy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setTimeout(() => setCopied(null), 1600);
    } catch {
      /* clipboard might be blocked in some contexts */
    }
  };

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass relative overflow-hidden rounded-3xl p-7"
      >
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-neon-cyan/15 blur-3xl" />
        <Field
          id="name"
          label="Name"
          value={data.name}
          onChange={(v) => setData({ ...data, name: v })}
          placeholder="Your name"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={data.email}
          onChange={(v) => setData({ ...data, email: v })}
          placeholder="you@signal.dev"
        />
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-white/55"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            placeholder="What's on your mind?"
            className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white placeholder-white/30 focus:border-neon-cyan/60 focus:outline-none focus:ring-2 focus:ring-neon-cyan/20"
          />
        </div>

        <button
          type="submit"
          disabled={loading || sent}
          data-cursor="hover"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta px-6 py-3 text-sm font-semibold text-ink-900 shadow-neon transition-all hover:-translate-y-0.5 disabled:opacity-60"
        >
          {sent ? (
            <>
              <CheckCircle2 size={16} /> Message sent
            </>
          ) : loading ? (
            <>
              <span className="h-3 w-3 animate-spin rounded-full border-2 border-ink-900/30 border-t-ink-900" />
              Transmitting…
            </>
          ) : (
            <>
              <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
              Send message
            </>
          )}
        </button>

        <AnimatePresence>
          {sent && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 rounded-xl border border-neon-cyan/40 bg-neon-cyan/10 px-4 py-3 text-sm text-white"
            >
              Thanks, {data.name || "friend"}. I&apos;ll get back to you soon.
            </motion.div>
          )}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-100"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>

      <div className="space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="glass relative overflow-hidden rounded-2xl p-5"
        >
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-neon-magenta/15 blur-3xl" />
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neon-cyan/10 text-neon-cyan">
              <Mail size={16} />
            </span>
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                Direct email
              </div>
              <div className="text-sm text-white/80">
                Hit me on either inbox
              </div>
            </div>
          </div>

          <ul className="mt-4 space-y-2">
            {EMAILS.map((email) => (
              <li
                key={email}
                className="group flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 transition-colors hover:border-neon-cyan/40 hover:bg-neon-cyan/[0.06]"
              >
                <a
                  href={`mailto:${email}`}
                  data-cursor="hover"
                  className="truncate font-mono text-[12.5px] text-white/85 transition-colors group-hover:text-neon-cyan"
                >
                  {email}
                </a>
                <button
                  type="button"
                  onClick={() => copy(email)}
                  aria-label={`Copy ${email}`}
                  data-cursor="hover"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/60 transition-all hover:border-neon-cyan/60 hover:text-neon-cyan"
                >
                  {copied === email ? (
                    <Check size={12} className="text-neon-lime" />
                  ) : (
                    <Copy size={12} />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-2 font-mono text-[11px] text-neon-lime"
              >
                Copied to clipboard ✓
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="glass rounded-2xl p-5"
        >
          <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">
            Find me elsewhere
          </div>
          <ul className="mt-3 space-y-2">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 transition-all hover:-translate-y-0.5 hover:border-neon-cyan/40 hover:bg-neon-cyan/[0.06]"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neon-cyan/10 text-neon-cyan transition-colors group-hover:bg-neon-cyan/20">
                    {s.icon}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-white">
                      {s.label}
                    </span>
                    <span className="font-mono text-[11px] text-white/45 group-hover:text-white/70">
                      {s.handle}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <InfoCard
          icon={<MapPin size={16} />}
          label="Based in"
          value="India · GMT+5:30"
        />
        <InfoCard
          icon={<Clock size={16} />}
          label="Response time"
          value="Usually under 48 hours"
        />
        <div className="glass rounded-2xl p-5">
          <div className="font-mono text-xs text-white/40">$ status</div>
          <div className="mt-1 inline-flex items-center gap-2 text-sm text-white">
            <span className="h-2 w-2 animate-pulse rounded-full bg-neon-lime shadow-[0_0_10px_rgba(163,255,18,0.8)]" />
            Available for select projects
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-white/55"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-neon-cyan/60 focus:outline-none focus:ring-2 focus:ring-neon-cyan/20"
      />
    </div>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="glass flex items-start gap-3 rounded-2xl p-5">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neon-cyan/10 text-neon-cyan">
        {icon}
      </span>
      <div>
        <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">
          {label}
        </div>
        <div className="text-sm text-white">{value}</div>
      </div>
    </div>
  );
}
