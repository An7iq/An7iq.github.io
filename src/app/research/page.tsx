import type { Metadata } from "next";
import {
  DissertationCard,
  EarlierProjectCard,
  ProjectCard,
} from "@/components/project-card";
import { Container, SectionHeading } from "@/components/section";
import {
  collaborativeProjects,
  currentProjects,
  dissertationProjects,
} from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Current, recent, dissertation, and collaborative research by Anqi Wang across environmental and Earth-system science.",
};

export default function ResearchPage() {
  return (
    <main id="main" className="pb-20 pt-12 sm:pb-28 sm:pt-16">
      <Container>
        <SectionHeading
          as="h1"
          kicker="Research"
          title="Projects"
          description="Current manuscripts first, then dissertations, then earlier collaborative work. Short collaborations are not presented as equivalent to current first-author studies."
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
          Dissertations
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Independent degree projects with fuller computational or chemical
          modelling detail on their project pages.
        </p>
        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2">
          {dissertationProjects.map((project) => (
            <DissertationCard key={project.slug} project={project} />
          ))}
        </div>
        <h2 className="mt-20 font-serif text-3xl tracking-tight text-ink">
          Earlier &amp; collaborative research
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Affiliated collaborations and internships. These entries document
          research experience rather than independent first-author manuscripts.
        </p>
        <div className="mt-8 grid gap-5">
          {collaborativeProjects.map((project) => (
            <EarlierProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </main>
  );
}
