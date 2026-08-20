import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/section";
import type { CaseStudyFigure, ResearchProject } from "@/data/research";
import { ui } from "@/i18n/ui";
import { localizeHref, type Locale } from "@/lib/i18n";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-sand pt-8 first:border-t-0 first:pt-0">
      <h2 className="font-serif text-2xl text-ink">{title}</h2>
      <div className="mt-4 space-y-4 text-[1.02rem] leading-relaxed text-ink/85">
        {children}
      </div>
    </section>
  );
}

function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text.split("\n\n").map((paragraph) => (
        <p key={paragraph.slice(0, 80)}>{paragraph}</p>
      ))}
    </>
  );
}

function ProjectFigures({ figures }: { figures: CaseStudyFigure[] }) {
  return (
    <div className="space-y-6">
      {figures.map((figure) => (
        <figure
          key={figure.src}
          className="overflow-hidden rounded-2xl border border-sand bg-white p-4 shadow-[0_10px_28px_rgba(27,36,32,0.08)] sm:p-6"
        >
          <a
            href={figure.src}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src={figure.src}
              alt={figure.alt}
              width={1600}
              height={900}
              className="h-auto w-full bg-white object-contain"
              unoptimized
            />
          </a>
          <figcaption className="mt-4 text-sm leading-relaxed text-muted">
            {figure.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function ProjectView({
  project,
  locale,
}: {
  project: ResearchProject;
  locale: Locale;
}) {
  const study = project.caseStudy;
  const figuresAfter = (title: string) =>
    study.figures?.filter((figure) => figure.after === title) ?? [];
  const approachTitle = study.approachTitle ?? ui.approachDefault[locale];
  const findingsTitle = study.findingsTitle ?? ui.findingsDefault[locale];
  const showOverview =
    !study.skipOverview &&
    Boolean(study.overview) &&
    study.overview !== project.cardSummary;
  const academicLabel =
    study.academicProfile?.label === "Academic code profile · AnqiW222"
      ? ui.academicProfile[locale]
      : study.academicProfile?.label;

  return (
    <main id="main" className="pb-20 pt-12 sm:pb-28 sm:pt-16">
      <Container className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
          {project.degreeLabel ?? ui.projectKicker[locale]}
        </p>
        <h1 className="mt-3 font-serif text-3xl tracking-tight text-ink sm:text-5xl">
          {project.title}
        </h1>
        {(project.institution || project.yearLabel) && (
          <p className="mt-3 text-sm text-muted">
            {[project.institution, project.yearLabel, project.output]
              .filter(Boolean)
              .join(" · ")}
          </p>
        )}
        {(project.supervisor || project.coSupervisor) && (
          <p className="mt-2 text-sm text-pine-deep">
            {project.supervisor ? (
              <>
                {project.supervisorLabel ?? ui.supervisor[locale]}
                {locale === "zh" ? "：" : ": "}
                {project.supervisor}
              </>
            ) : null}
            {project.supervisor && project.coSupervisor ? " · " : null}
            {project.coSupervisor
              ? `${ui.coSupervisor[locale]}${locale === "zh" ? "：" : ": "}${project.coSupervisor}`
              : null}
          </p>
        )}
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink/80">
          {project.cardSummary}
        </p>
        {(project.links.length > 0 || study.academicProfile) && (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-full border border-sand bg-white px-4 text-sm font-medium text-pine shadow-[0_8px_22px_rgba(27,36,32,0.07)] hover:border-pine hover:text-pine-deep"
              >
                {link.label === "View academic GitHub"
                  ? ui.viewAcademicGithub[locale]
                  : link.label}
              </a>
            ))}
            {study.academicProfile ? (
              <a
                href={study.academicProfile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-pine hover:text-pine-deep"
              >
                {academicLabel}
              </a>
            ) : null}
          </div>
        )}
        {project.image ? (
          <figure className="mt-10 overflow-hidden rounded-2xl border border-sand bg-white p-4 shadow-[0_10px_28px_rgba(27,36,32,0.08)] sm:p-6">
            <a
              href={project.image}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={1600}
                height={900}
                className="h-auto w-full bg-white object-contain"
                unoptimized
              />
            </a>
            {project.figureCaption ? (
              <figcaption className="mt-4 text-sm leading-relaxed text-muted">
                {project.figureCaption} {ui.figureFullSize[locale]}
              </figcaption>
            ) : null}
          </figure>
        ) : null}
        <div className="mt-10 space-y-2 rounded-2xl border border-sand bg-white p-6 shadow-[0_10px_28px_rgba(27,36,32,0.08)] sm:p-8">
          {showOverview && study.overview ? (
            <Section title={ui.overview[locale]}>
              <Paragraphs text={study.overview} />
            </Section>
          ) : null}
          <Section title={ui.context[locale]}>
            <Paragraphs text={study.context} />
          </Section>
          {figuresAfter("Research context").length ||
          figuresAfter(ui.context[locale]).length ? (
            <ProjectFigures
              figures={[
                ...figuresAfter("Research context"),
                ...figuresAfter(ui.context[locale]),
              ].filter(
                (figure, index, list) =>
                  list.findIndex((item) => item.src === figure.src) === index,
              )}
            />
          ) : null}
          {study.data ? (
            <Section title={ui.data[locale]}>
              <Paragraphs text={study.data} />
              {study.dataPoints ? (
                <ul className="list-disc space-y-1 pl-5 text-[0.98rem]">
                  {study.dataPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </Section>
          ) : null}
          <Section title={approachTitle}>
            <Paragraphs text={study.approach} />
          </Section>
          {figuresAfter(approachTitle).length ? (
            <ProjectFigures figures={figuresAfter(approachTitle)} />
          ) : null}
          {study.extraSections?.map((section) => (
            <div key={section.title} className="space-y-6">
              <Section title={section.title}>
                <Paragraphs text={section.text} />
                {section.points ? (
                  <ul className="list-disc space-y-1 pl-5 text-[0.98rem]">
                    {section.points.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </Section>
              {figuresAfter(section.title).length ? (
                <ProjectFigures figures={figuresAfter(section.title)} />
              ) : null}
            </div>
          ))}
          <Section title={findingsTitle}>
            <Paragraphs text={study.findings} />
            {study.findingsPoints ? (
              <ul className="list-disc space-y-1 pl-5 text-[0.98rem]">
                {study.findingsPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </Section>
          {figuresAfter(findingsTitle).length ? (
            <ProjectFigures figures={figuresAfter(findingsTitle)} />
          ) : null}
          <Section title={ui.contribution[locale]}>
            <Paragraphs text={study.contribution} />
          </Section>
          <Section title={ui.output[locale]}>
            <Paragraphs text={study.outputProse} />
            {study.outputPoints ? (
              <ul className="list-disc space-y-1 pl-5 text-[0.98rem]">
                {study.outputPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </Section>
          <Section title={ui.relatedMethods[locale]}>
            <ul className="flex flex-wrap gap-2">
              {study.relatedMethods.map((method) => (
                <li
                  key={method}
                  className="rounded-full border border-sand bg-paper px-3 py-1.5 text-sm text-pine-deep"
                >
                  {method}
                </li>
              ))}
            </ul>
          </Section>
        </div>
        <Link
          href={localizeHref("/research/", locale)}
          className="mt-10 inline-block text-sm font-medium text-pine hover:text-pine-deep"
        >
          ← {ui.allProjectsBack[locale]}
        </Link>
      </Container>
    </main>
  );
}
