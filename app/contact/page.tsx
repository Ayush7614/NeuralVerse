import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import MentorshipCard from "@/components/MentorshipCard";

export const metadata = {
  title: "Contact — NeuralVerse",
  description: "Get in touch with Ayush Kumar.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Open channel"
          title="Let's talk."
          subtitle="Project, idea, opportunity, or just a kind word — drop me a line. I usually respond within a day or two."
        />
      </div>

      <div className="mt-14">
        <MentorshipCard />
      </div>

      <div id="contact-form" className="mx-auto mt-20 max-w-3xl scroll-mt-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan shadow-neon" />
          Or message me directly
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
