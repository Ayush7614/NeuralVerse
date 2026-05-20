import SectionHeading from "@/components/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import MagneticButton from "@/components/MagneticButton";
import { Code2, Sparkles, Compass, Layers } from "lucide-react";

export const metadata = {
  title: "About — NeuralVerse",
  description:
    "About Ayush Kumar — Senior DevRel Engineer, Community Manager, AI & Cloud Engineer.",
};

const values = [
  {
    icon: <Sparkles size={18} />,
    title: "Build in the open",
    body: "I explore open source and AI tools in public — shipping systems, not just slides. If it works, I write it up.",
  },
  {
    icon: <Compass size={18} />,
    title: "Community-first DevRel",
    body: "Growing developer communities, running education programs, and helping builders actually adopt the tech — not just hear about it.",
  },
  {
    icon: <Layers size={18} />,
    title: "AI systems that scale",
    body: "From LLMs and vector databases to agentic AI, memory layers, and cloud infra — I build and document systems end to end.",
  },
  {
    icon: <Code2 size={18} />,
    title: "Content that ships",
    body: "Technical writing, product docs, developer education, and product marketing — clarity that helps people build faster.",
  },
];

const timeline = [
  {
    year: "Now · 2025–26",
    title: "Co-founder · founding DevRel · AI & cybersecurity",
    body: "Co-building in open source, AI, and security. Founding-team DevRel across startups — shipping products, growing communities, and writing the docs that help developers adopt them.",
  },
  {
    year: "2024–25",
    title: "Lead DevRel engineer — first hire",
    body: "Owned code, content, community, and research across AI, Kubernetes, and cloud. Led regional cloud-native community programs. Full-stack DevRel: blogs, events, docs, and developer education at scale.",
  },
  {
    year: "2023–24",
    title: "Founding DevRel · community architect · cloud",
    body: "Early founding-team DevRel at startups. AWS Community Builder. Built AI-focused developer communities from zero. DevRel consulting, GCP/cloud engineering, and product marketing for technical audiences.",
  },
  {
    year: "2022–25",
    title: "GitHub Campus Expert · global student leader",
    body: "Three years leading hackathons, meetups, and conferences worldwide. Built inclusive spaces for students to learn, ship open source, and grow as builders — online and in person.",
  },
  {
    year: "2021–23",
    title: "DevRel · community manager · technical writer",
    body: "DevRel engineer, community manager, and content lead across multiple startups. Founded a major hackathon community. Ran newsletters, podcasts, and growth across Discord, Telegram, and social platforms.",
  },
  {
    year: "2020–22",
    title: "Open source roots → DevRel path",
    body: "Google Summer of Code student developer. Top-ranked contributor and mentor in GirlScript, Script WoC, KWoC, and other open-source programs. Early roles in open-source engineering, technical writing, and first DevRel internships.",
  },
  {
    year: "Always",
    title: "NeuralVerse · building in public",
    body: "800+ blogs published, 500K+ reads — documenting AI tools, systems, and experiments as I ship, learn, and play with what's next.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pt-32">
      <SectionHeading
        eyebrow="hello, world"
        title="I'm Ayush — DevRel, community builder, AI & cloud engineer."
        subtitle="Senior Developer Relations Engineer and Community Manager working on AI, ML, LLMs, vector databases, agentic AI, and memory layers — plus the docs, content, and education that help developers ship."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {values.map((v, i) => (
          <RevealOnScroll key={v.title} delay={i * 0.06}>
            <div className="glass h-full rounded-2xl p-6 transition-all hover:border-neon-cyan/40 hover:shadow-neon">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 text-neon-cyan">
                {v.icon}
              </div>
              <div className="font-display text-lg font-semibold text-white">
                {v.title}
              </div>
              <p className="mt-2 text-sm text-white/65">{v.body}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <div className="mt-24">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-neon-amber" />
          Trajectory
        </div>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          A short history
        </h2>

        <div className="relative mt-10 space-y-8 pl-6">
          <div className="absolute left-2 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-neon-cyan via-neon-violet to-neon-magenta opacity-50" />
          {timeline.map((t, i) => (
            <RevealOnScroll key={t.year} delay={i * 0.05}>
              <div className="relative">
                <span className="absolute -left-[26px] top-1.5 h-3 w-3 rounded-full bg-neon-cyan shadow-neon ring-4 ring-ink-900" />
                <div className="font-mono text-xs text-neon-cyan/80">
                  {t.year}
                </div>
                <div className="mt-1 font-display text-lg font-semibold text-white">
                  {t.title}
                </div>
                <p className="mt-1 max-w-xl text-sm text-white/65">{t.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <div className="mt-24 flex flex-col items-start gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-magenta/10 p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="font-display text-2xl font-bold text-white">
            Want to collaborate, hire me, or just say hi?
          </div>
          <p className="mt-1 text-white/65">
            I read every message. Even the long ones.
          </p>
        </div>
        <MagneticButton href="/contact">Get in touch</MagneticButton>
      </div>
    </div>
  );
}
