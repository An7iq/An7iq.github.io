import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { Container } from "@/components/section";
import { featuredProjects } from "@/data/research";
import { ui } from "@/i18n/ui";
import { localizeHref, type Locale } from "@/lib/i18n";
import { localizeProjects } from "@/lib/localize-research";

export function FeaturedResearch({ locale }: { locale: Locale }) {
  const projects = localizeProjects(featuredProjects, locale);

  return (
    <section className="py-12 sm:py-14">
      <Container>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
              {ui.researchKicker[locale]}
            </p>
            <h2 className="mt-2 font-serif text-3xl tracking-tight text-ink sm:text-4xl">
              {ui.selectedResearch[locale]}
            </h2>
          </div>
          <Link
            href={localizeHref("/research/", locale)}
            className="inline-flex items-center gap-1 text-sm font-medium text-pine hover:text-pine-deep"
          >
            {ui.allProjects[locale]}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="mt-7 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              locale={locale}
              home
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
