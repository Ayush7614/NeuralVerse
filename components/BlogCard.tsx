"use client";

import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight, Clock, ExternalLink } from "lucide-react";
import type { Post } from "@/lib/posts";
import BlogPostCover from "./BlogPostCover";

export default function BlogCard({
  post,
  index = 0,
}: {
  post: Post;
  index?: number;
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    mx.set(px);
    my.set(py);
    rotY.set(((px - rect.width / 2) / rect.width) * 10);
    rotX.set(-((py - rect.height / 2) / rect.height) * 10);
  };
  const handleLeave = () => {
    rotX.set(0);
    rotY.set(0);
  };

  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgba(0,240,255,0.18), transparent 45%)`;

  const isExternal = !!post.external;
  const href = isExternal ? post.external!.url : `/blog/${post.slug}`;
  const cover = post.external?.image;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-xl transition-shadow hover:border-neon-cyan/40 hover:shadow-neon"
      >
        <motion.div
          style={{ background: spotlight }}
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
        />

        {cover && <BlogPostCover src={cover} />}

        <div className="relative z-10 flex h-full flex-col p-6">
          <div className="mb-4 flex items-center justify-between gap-2 text-xs text-white/50">
            <time className="font-mono">{formatDate(post.date)}</time>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={12} /> {post.readingTime} min
            </span>
          </div>

          <CardLink
            href={href}
            external={isExternal}
            className="block"
          >
            <h3 className="font-display text-xl font-bold leading-tight text-white transition-colors group-hover:text-neon-cyan sm:text-2xl">
              {post.title}
            </h3>
          </CardLink>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/65">
            {post.excerpt}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between gap-3">
            <CardLink
              href={href}
              external={isExternal}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-neon-cyan transition-all hover:gap-2.5 hover:text-white"
            >
              {isExternal ? (
                <>
                  Read on{" "}
                  <span className="text-white">
                    {post.external!.platform}
                  </span>
                  <ExternalLink size={14} />
                </>
              ) : (
                <>
                  Read article <ArrowUpRight size={16} />
                </>
              )}
            </CardLink>

            {isExternal && (
              <PlatformBadge platform={post.external!.platform} />
            )}
          </div>
        </div>

        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-cyan/20 via-transparent to-neon-magenta/20 opacity-30 blur" />
        </div>
      </motion.div>
    </motion.article>
  );
}

function CardLink({
  href,
  external,
  className,
  children,
}: {
  href: string;
  external: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
        data-cursor="hover"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} data-cursor="hover">
      {children}
    </Link>
  );
}

function PlatformBadge({ platform }: { platform: string }) {
  const styles: Record<string, string> = {
    "dev.to":
      "bg-white/[0.06] text-white/80 border-white/10 group-hover:border-white/25",
    Medium:
      "bg-neon-lime/10 text-neon-lime border-neon-lime/30",
    NodeShift:
      "bg-neon-magenta/10 text-neon-magenta border-neon-magenta/30",
  };
  const classes =
    styles[platform] || "bg-white/[0.06] text-white/70 border-white/10";

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors ${classes}`}
    >
      {platform}
    </span>
  );
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}
