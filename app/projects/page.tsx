import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects — NeuralVerse",
  description:
    "Open-source projects by Ayush Kumar — RuntimeWall, GraphOS, NeuralVerse, and ayushbuilds.dev.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-32 pb-24">
      <SectionHeading
        eyebrow="Ship log"
        title="Projects I build in the open."
        subtitle="AI agents, security runtimes, developer tools, and the sites where I share the work — all on GitHub."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
