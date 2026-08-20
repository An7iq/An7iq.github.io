import type { Metadata } from "next";
import { ProjectCard, TextProject } from "@/components/project-card";
import { Container, SectionHeading } from "@/components/section";
import { currentProjects, earlierProjects } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Current, recent, and earlier research by Anqi Wang across environmental and Earth-system science.",
};

export default function ResearchPage() {
  return (
    <main id="main" className="pb-20 pt-12 sm:pb-28 sm:pt-16">
      <Container>
        <SectionHeading
          as="h1"
          kicker="Research"
          title="Projects"
          description="Current and recent work first, followed by earlier dissertation and internship projects."
        />
        <h2 className="mt-12 font-serif text-3xl tracking-tight text-ink">
          Current &amp; recent research
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {currentProjects
            .filter((project) => project.image)
            .map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} compact />
            ))}
        </div>
        <div className="mt-4">
          {currentProjects
            .filter((project) => !project.image)
            .map((project) => (
              <TextProject key={project.slug} project={project} />
            ))}
        </div>
        <h2 className="mt-16 font-serif text-3xl tracking-tight text-ink">
          Earlier research
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Dissertation and internship work, described conservatively. These
          entries are text-only where no original project figure is available.
        </p>
        <div className="mt-4 max-w-3xl">
          {earlierProjects.map((project) => (
            <TextProject key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </main>
  );
}
