import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { posts, getPost, getRelated } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import ReadingProgress from "@/components/ReadingProgress";
import RevealOnScroll from "@/components/RevealOnScroll";

export function generateStaticParams() {
  // Only prerender posts with inline content; external posts redirect.
  return posts.filter((p) => p.content && !p.external).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — NeuralVerse`,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  // External posts: bounce the visitor to the original publication.
  if (post.external) {
    redirect(post.external.url);
  }

  // Defensive: if a post has no inline content and no external URL, 404.
  if (!post.content) notFound();

  const related = getRelated(slug, 3);

  return (
    <article className="relative">
      <ReadingProgress />

      <header className="relative mx-auto max-w-3xl px-5 pt-32">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-1.5 text-sm text-white/55 transition-colors hover:text-neon-cyan"
          data-cursor="hover"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to all blogs
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {post.tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <RevealOnScroll>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            {post.title}
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="mt-5 text-lg text-white/65">{post.excerpt}</p>
        </RevealOnScroll>

        <div className="mt-8 flex flex-wrap items-center gap-5 border-y border-white/10 py-4 text-sm text-white/55">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} className="text-neon-cyan" />
            <time>{post.date}</time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} className="text-neon-cyan" />
            {post.readingTime} min read
          </span>
          <span className="font-mono text-white/40">
            by{" "}
            <Link href="/about" className="text-white/70 hover:text-neon-cyan">
              Ayush Kumar
            </Link>
          </span>
        </div>
      </header>

      <div className="prose-neon relative mx-auto mt-12 max-w-3xl px-5">
        <RevealOnScroll>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </RevealOnScroll>
      </div>

      <div className="mx-auto mt-20 max-w-3xl px-5">
        <div className="glass flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-white/40">
              Thanks for reading
            </div>
            <div className="mt-1 font-display text-xl font-semibold text-white">
              Found this useful? Share it.
            </div>
          </div>
          <div className="flex gap-2">
            <ShareButton
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                post.title
              )}&url=https://neuralverse.dev/blog/${post.slug}`}
              label="Twitter"
            />
            <ShareButton
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://neuralverse.dev/blog/${post.slug}`}
              label="LinkedIn"
            />
            <ShareButton
              href={`mailto:?subject=${encodeURIComponent(
                post.title
              )}&body=https://neuralverse.dev/blog/${post.slug}`}
              label="Email"
            />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mx-auto mt-24 max-w-6xl px-5">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-violet" />
            Related
          </div>
          <h3 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Keep reading
          </h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <BlogCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

function ShareButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-white/80 transition-all hover:border-neon-cyan/60 hover:bg-neon-cyan/10 hover:text-white"
    >
      {label}
    </a>
  );
}
