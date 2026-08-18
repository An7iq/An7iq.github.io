import type { Metadata } from "next";
import { ResearchCard } from "@/components/research-card";
import { Container, SectionHeading } from "@/components/section";
import {
  additionalProjects,
  featuredProjects,
  researchProjects,
} from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Selected and additional research projects by Anqi Wang across environmental and Earth-system science.",
};

export default function ResearchPage() {
  return (
    <main id="main" className="pb-20 pt-12 sm:pb-28 sm:pt-16">
      <Container>
        <SectionHeading
          as="h1"
          kicker="Research"
          title="All projects"
          description="Featured studies first, followed by additional modelling and data projects."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ResearchCard
              key={project.slug}
              project={project}
              index={index}
              featured
            />
          ))}
        </div>
        <h2 className="mt-16 font-serif text-3xl tracking-tight text-ink">
          Additional projects
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Earlier dissertation, internship, and collaboration work. These are
          included for context and are described conservatively.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {additionalProjects.map((project) => {
            const index = researchProjects.findIndex(
              (item) => item.slug === project.slug,
            );
            return (
              <ResearchCard
                key={project.slug}
                project={project}
                index={index}
              />
            );
          })}
        </div>
      </Container>
    </main>
  );
}
