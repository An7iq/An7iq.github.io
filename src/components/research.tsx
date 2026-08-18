import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { ResearchCard } from "@/components/research-card";
import { Container, Section, SectionHeading } from "@/components/section";
import { featuredProjects } from "@/data/research";

export function Research() {
  return (
    <Section id="research" className="bg-paper-2/40">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            kicker="Research"
            title="Selected research"
            description="Recent work across agroecosystems, hydrology, palaeoclimate, and spatial ecology."
          />
          <Link
            href="/research/"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-pine hover:text-pine-deep"
          >
            View all projects
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ResearchCard
              key={project.slug}
              project={project}
              index={index}
              featured
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
