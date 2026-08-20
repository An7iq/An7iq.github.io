import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import type { ResearchProject } from "@/data/research";
import { cn } from "@/lib/cn";

function projectIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function ProjectCard({
  project,
  index,
  compact = false,
}: {
  project: ResearchProject;
  index: number;
  compact?: boolean;
}) {
  const href = `/research/${project.slug}/`;
  const tags = compact ? project.cardTags.slice(0, 4) : project.tags;
  const cardSrc = project.cardImage ?? project.image;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-sand/80 bg-card shadow-[0_1px_0_rgba(27,36,32,0.04)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(31,83,75,0.08)]">
      {cardSrc ? (
        <Link href={href} className="block" aria-hidden="true" tabIndex={-1}>
          <div
            className={cn(
              "relative aspect-[16/10] overflow-hidden",
              project.imageTone === "dark" ? "bg-[#111]" : "bg-white",
            )}
          >
            <Image
              src={cardSrc}
              alt={project.imageAlt}
              fill
              priority={index < 2}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Link>
      ) : null}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-pine">
          {projectIndex(index)}
        </p>
        <h3 className="mt-2 font-serif text-xl leading-snug tracking-tight text-ink sm:text-[1.35rem]">
          <Link href={href} className="hover:text-pine">
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 font-serif text-[1.02rem] leading-relaxed text-pine-deep/90 italic">
          {project.question}
        </p>
        {compact ? null : (
          <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
        )}
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-sand bg-paper px-2.5 py-1 text-xs tracking-wide text-pine-deep"
            >
              {tag}
            </li>
          ))}
        </ul>
        <p className="mt-4 border-t border-sand/80 pt-3 text-sm text-ink/80">
          {project.output}
        </p>
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-pine hover:text-pine-deep"
        >
          View project
          <ArrowRightIcon className="size-4" />
        </Link>
      </div>
    </article>
  );
}

export function TextProject({
  project,
}: {
  project: ResearchProject;
}) {
  return (
    <article className="border-b border-sand/80 py-6 last:border-b-0">
      <h3 className="font-serif text-xl text-ink">
        <Link href={`/research/${project.slug}/`} className="hover:text-pine">
          {project.title}
        </Link>
      </h3>
      <p className="mt-2 font-serif italic text-pine-deep/90">{project.question}</p>
      <p className="mt-2 text-sm text-muted">{project.output}</p>
    </article>
  );
}
