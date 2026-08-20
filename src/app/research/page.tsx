import type { Metadata } from "next";
import { EarlierProjectCard, ProjectCard } from "@/components/project-card";
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
        <h2 className="mt-14 font-serif text-3xl tracking-tight text-ink">
          Current &amp; recent research
        </h2>
        <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2">
          {currentProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} compact />
          ))}
        </div>
        <h2 className="mt-20 font-serif text-3xl tracking-tight text-ink">
          Earlier research
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Dissertation and internship work, described conservatively. These
          entries are text-only where no original project figure is available.
        </p>
        <div className="mt-8 grid gap-5">
          {earlierProjects.map((project) => (
            <EarlierProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </main>
  );
}
