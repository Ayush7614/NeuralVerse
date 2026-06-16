import Link from "next/link";
import { ArrowUpRight, Clock, ExternalLink } from "lucide-react";
import type { Post } from "@/lib/posts";

/** Lightweight card for the blog index — CSS-only hover, no per-card motion hooks. */
export default function BlogCardLite({ post }: { post: Post }) {
  const isExternal = !!post.external;
  const href = isExternal ? post.external!.url : `/blog/${post.slug}`;
  const cover = post.external?.image;

  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan/40 hover:shadow-neon">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-magenta/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {cover && (
        <div className="relative z-10">
          <div className="aspect-[16/9] w-full overflow-hidden border-b border-white/10 bg-white/[0.02]">
            <img
              src={cover}
              alt=""
              loading="lazy"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      )}

      <div className="relative z-10 flex h-full flex-col p-6">
        <div className="mb-4 flex items-center justify-between gap-2 text-xs text-white/50">
          <time className="font-mono" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={12} /> {post.readingTime} min
          </span>
        </div>

        <CardLink href={href} external={isExternal} className="block">
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
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neon-cyan transition-all group-hover:gap-2.5 group-hover:text-white"
          >
            {isExternal ? (
              <>
                Read on{" "}
                <span className="text-white">{post.external!.platform}</span>
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
    </article>
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
    "dev.to": "bg-white/[0.06] text-white/80 border-white/10",
    Medium: "bg-neon-lime/10 text-neon-lime border-neon-lime/30",
    NodeShift: "bg-neon-magenta/10 text-neon-magenta border-neon-magenta/30",
  };
  const classes =
    styles[platform] || "bg-white/[0.06] text-white/70 border-white/10";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em] ${classes}`}
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
