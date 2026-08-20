import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/section";
import { getProject, researchProjects } from "@/data/research";

export const dynamicParams = false;

export async function generateStaticParams() {
  return researchProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.shortSummary,
  };
}

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
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
    </>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const study = project.caseStudy;

  return (
    <main id="main" className="pb-20 pt-12 sm:pb-28 sm:pt-16">
      <Container className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
          Project
        </p>
        <h1 className="mt-3 font-serif text-3xl tracking-tight text-ink sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink/80">
          {project.cardSummary}
        </p>
        {project.image ? (
          <figure className="mt-10 overflow-hidden rounded-2xl border border-sand bg-white p-4 shadow-[0_10px_28px_rgba(27,36,32,0.08)] sm:p-6">
            <a
              href={project.image}
              target="_blank"
              rel="noreferrer"
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
                {project.figureCaption} Open the figure to view it at full size.
              </figcaption>
            ) : null}
          </figure>
        ) : null}
        <div className="mt-10 space-y-2 rounded-2xl border border-sand bg-white p-6 shadow-[0_10px_28px_rgba(27,36,32,0.08)] sm:p-8">
          <Section title="Overview">
            <Paragraphs text={study.overview} />
          </Section>
          <Section title="Research context">
            <Paragraphs text={study.context} />
          </Section>
          <Section title="Data">
            <Paragraphs text={study.data} />
            {study.dataPoints ? (
              <ul className="list-disc space-y-1 pl-5 text-[0.98rem]">
                {study.dataPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </Section>
          <Section title="Analytical approach">
            <Paragraphs text={study.approach} />
          </Section>
          <Section title="Key findings or current evidence">
            <Paragraphs text={study.findings} />
            {study.findingsPoints ? (
              <ul className="list-disc space-y-1 pl-5 text-[0.98rem]">
                {study.findingsPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </Section>
          <Section title="My contribution">
            <Paragraphs text={study.contribution} />
          </Section>
          <Section title="Research output">
            <Paragraphs text={study.outputProse} />
            {study.outputPoints ? (
              <ul className="list-disc space-y-1 pl-5 text-[0.98rem]">
                {study.outputPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </Section>
          <Section title="Related methods">
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
          href="/research/"
          className="mt-10 inline-block text-sm font-medium text-pine hover:text-pine-deep"
        >
          ← All projects
        </Link>
      </Container>
    </main>
  );
}
