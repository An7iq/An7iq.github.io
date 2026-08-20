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
import { ui } from "@/i18n/ui";
import type { Locale } from "@/lib/i18n";
import { localizeProjects } from "@/lib/localize-research";

export function ResearchIndexView({ locale }: { locale: Locale }) {
  const current = localizeProjects(currentProjects, locale);
  const dissertations = localizeProjects(dissertationProjects, locale);
  const collaborative = localizeProjects(collaborativeProjects, locale);

  return (
    <main id="main" className="pb-20 pt-12 sm:pb-28 sm:pt-16">
      <Container>
        <SectionHeading
          as="h1"
          kicker={ui.researchKicker[locale]}
          title={ui.researchTitle[locale]}
          description={ui.researchDescription[locale]}
        />
        <h2 className="mt-14 font-serif text-3xl tracking-tight text-ink">
          {ui.currentResearch[locale]}
        </h2>
        <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2">
          {current.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              locale={locale}
              compact
            />
          ))}
        </div>
        <h2 className="mt-20 font-serif text-3xl tracking-tight text-ink">
          {ui.dissertations[locale]}
        </h2>
        <p className="mt-3 max-w-2xl text-muted">{ui.dissertationsBlurb[locale]}</p>
        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2">
          {dissertations.map((project) => (
            <DissertationCard
              key={project.slug}
              project={project}
              locale={locale}
            />
          ))}
        </div>
        <h2 className="mt-20 font-serif text-3xl tracking-tight text-ink">
          {ui.earlierResearch[locale]}
        </h2>
        <p className="mt-3 max-w-2xl text-muted">{ui.earlierBlurb[locale]}</p>
        <div className="mt-8 grid gap-5">
          {collaborative.map((project) => (
            <EarlierProjectCard
              key={project.slug}
              project={project}
              locale={locale}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
