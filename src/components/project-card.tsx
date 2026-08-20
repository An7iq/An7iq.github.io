import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import type { ResearchProject } from "@/data/research";

function projectIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

const cardSurface =
  "flex h-full flex-col overflow-hidden rounded-2xl border border-sand bg-white shadow-[0_10px_28px_rgba(27,36,32,0.08)]";

function TagList({ tags }: { tags: string[] }) {
  return (
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
  );
}

export function ProjectCard({
  project,
  index,
  compact = false,
  home = false,
}: {
  project: ResearchProject;
  index: number;
  compact?: boolean;
  home?: boolean;
}) {
  const href = `/research/${project.slug}/`;
  const tags = compact || home ? project.cardTags.slice(0, 4) : project.tags;
  const summary = home
    ? (project.featuredSummary ?? project.cardSummary)
    : project.cardSummary;

  if (home) {
    return (
      <article className={cardSurface}>
        {project.image ? (
          <Link href={href} className="block" aria-hidden="true" tabIndex={-1}>
            <div className="relative h-[220px] w-full overflow-hidden rounded-t-2xl bg-white p-2 md:h-[210px] xl:h-[210px]">
              <div className="relative h-full w-full">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  priority={index < 2}
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
              </div>
            </div>
          </Link>
        ) : null}
        <div className="flex flex-1 flex-col px-4 pb-4 pt-3 sm:px-[1.05rem]">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-pine">
            {projectIndex(index)}
          </p>
          <h3 className="mt-1.5 min-h-[2.7rem] font-serif text-[1.05rem] leading-snug tracking-tight text-ink xl:min-h-[3.15rem]">
            <Link href={href} className="hover:text-pine">
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 text-[0.86rem] leading-relaxed text-ink/80">
            {summary}
          </p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-sand bg-paper px-2 py-0.5 text-[0.68rem] tracking-wide text-pine-deep"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-3">
            <p className="text-[0.72rem] leading-snug text-muted">{project.output}</p>
            <Link
              href={href}
              className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-pine hover:text-pine-deep"
            >
              View project
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={cardSurface}>
      {project.image ? (
        <Link href={href} className="block" aria-hidden="true" tabIndex={-1}>
          <div className="border-b border-sand bg-white p-4 sm:p-5">
            <div className="relative aspect-[16/10]">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                priority={index < 2}
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
              />
            </div>
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
        <p className="mt-3 text-[0.98rem] leading-relaxed text-ink/80">
          {summary}
        </p>
        <TagList tags={tags} />
        <p className="mt-auto border-t border-sand pt-3 text-sm text-ink/80">
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

export function DissertationCard({ project }: { project: ResearchProject }) {
  const href = `/research/${project.slug}/`;
  const meta = [
    project.degreeLabel,
    project.institution,
    project.yearLabel,
  ].filter(Boolean);

  return (
    <article className={`${cardSurface} p-6 sm:p-8`}>
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-pine">
        Dissertation
      </p>
      <h3 className="mt-2 font-serif text-2xl leading-snug tracking-tight text-ink">
        <Link href={href} className="hover:text-pine">
          {project.title}
        </Link>
      </h3>
      {meta.length ? (
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {meta.join(" · ")}
        </p>
      ) : null}
      <p className="mt-4 text-[0.98rem] leading-relaxed text-ink/80">
        {project.cardSummary}
      </p>
      <TagList tags={project.cardTags} />
      <p className="mt-5 text-sm text-ink/80">{project.output}</p>
      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-pine hover:text-pine-deep"
        >
          View project
          <ArrowRightIcon className="size-4" />
        </Link>
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-pine hover:text-pine-deep"
          >
            {link.label}
            <ArrowRightIcon className="size-4" />
          </a>
        ))}
      </div>
    </article>
  );
}

export function EarlierProjectCard({
  project,
}: {
  project: ResearchProject;
}) {
  return (
    <article className="rounded-2xl border border-sand bg-white p-5 shadow-[0_8px_22px_rgba(27,36,32,0.07)] sm:p-6">
      <h3 className="font-serif text-xl text-ink">
        <Link href={`/research/${project.slug}/`} className="hover:text-pine">
          {project.title}
        </Link>
      </h3>
      {project.institution || project.yearLabel ? (
        <p className="mt-2 text-sm text-muted">
          {[project.institution, project.yearLabel, project.output]
            .filter(Boolean)
            .join(" · ")}
        </p>
      ) : null}
      <p className="mt-3 text-[0.98rem] leading-relaxed text-ink/80">
        {project.cardSummary}
      </p>
      <TagList tags={project.cardTags} />
      <Link
        href={`/research/${project.slug}/`}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-pine hover:text-pine-deep"
      >
        View project
        <ArrowRightIcon className="size-4" />
      </Link>
    </article>
  );
}
