import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan/40 hover:shadow-neon">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-magenta/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            {project.org && (
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neon-magenta/80">
                {project.org}
              </span>
            )}
            <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-neon-cyan sm:text-2xl">
              {project.title}
            </h3>
          </div>
          <Github size={18} className="shrink-0 text-white/30 transition-colors group-hover:text-neon-cyan" />
        </div>

        <p className="flex-1 text-sm leading-relaxed text-white/65">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neon-cyan transition-all hover:gap-2.5 hover:text-white"
            data-cursor="hover"
          >
            View on GitHub <ArrowUpRight size={16} />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-white/55 transition-colors hover:text-white"
              data-cursor="hover"
            >
              Live site <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
