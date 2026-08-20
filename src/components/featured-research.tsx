import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { Container } from "@/components/section";
import { featuredProjects } from "@/data/research";

export function FeaturedResearch() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
              Research
            </p>
            <h2 className="mt-2 font-serif text-3xl tracking-tight text-ink sm:text-4xl">
              Selected Research
            </h2>
          </div>
          <Link
            href="/research/"
            className="text-sm font-medium text-pine hover:text-pine-deep"
          >
            All projects
          </Link>
        </div>
        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              compact
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
