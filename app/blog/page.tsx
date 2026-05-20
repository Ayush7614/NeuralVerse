import BlogList from "@/components/BlogList";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Blog — NeuralVerse",
  description: "All blogs from NeuralVerse by Ayush Kumar.",
};

export default function BlogIndexPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-32 pb-24">
      <SectionHeading
        eyebrow="The archive"
        title="All transmissions"
        subtitle="Filter by tag or browse the full feed. New blogs appear here as soon as they're written."
      />
      <BlogList />
    </section>
  );
}
