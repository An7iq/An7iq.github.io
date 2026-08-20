import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/section";
import { getProject, researchProjects } from "@/data/research";
import { cn } from "@/lib/cn";

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
    description: project.question,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main id="main" className="pb-20 pt-12 sm:pb-28 sm:pt-16">
      <Container className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
          Project
        </p>
        <h1 className="mt-3 font-serif text-3xl tracking-tight text-ink sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 font-serif text-xl italic leading-relaxed text-pine-deep">
          {project.question}
        </p>
        {project.image ? (
          <figure className="mt-10">
            <div
              className={cn(
                "overflow-hidden rounded-2xl border border-sand",
                project.imageTone === "dark" ? "bg-[#111]" : "bg-white",
              )}
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={1600}
                height={900}
                className="h-auto w-full"
                unoptimized
              />
            </div>
            {project.figureCaption ? (
              <figcaption className="mt-3 text-sm leading-relaxed text-muted">
                {project.figureCaption}
              </figcaption>
            ) : null}
          </figure>
        ) : null}
        <p className="mt-8 text-lg leading-relaxed text-ink/85">{project.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-sand bg-card px-3 py-1.5 text-sm text-pine-deep"
            >
              {tag}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-ink/80">{project.output}</p>
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
