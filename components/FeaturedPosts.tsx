import Link from "next/link";
import { getFeatured } from "@/lib/posts";
import BlogCard from "./BlogCard";
import SectionHeading from "./SectionHeading";
import { ArrowRight } from "lucide-react";

export default function FeaturedPosts() {
  const featured = getFeatured(6);

  return (
    <section className="relative mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="Latest signals"
        title="Recent blogs"
        subtitle="Fresh transmissions from the lab. Long enough to think, short enough to finish."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <BlogCard key={p.slug} post={p} index={i} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white/85 transition-all hover:border-neon-cyan/60 hover:bg-neon-cyan/10 hover:text-white hover:shadow-neon"
          data-cursor="hover"
        >
          See all blogs
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
