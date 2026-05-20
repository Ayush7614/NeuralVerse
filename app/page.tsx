import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import FeaturedPosts from "@/components/FeaturedPosts";
import AboutTeaser from "@/components/AboutTeaser";
import MentorshipCard from "@/components/MentorshipCard";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedPosts />
      <AboutTeaser />
      <section className="mx-auto max-w-6xl px-5 py-12">
        <MentorshipCard />
      </section>
    </>
  );
}
