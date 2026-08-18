import Image from "next/image";
import Link from "next/link";
import type { ResearchProject } from "@/data/research";
import { cn } from "@/lib/cn";

function projectIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function ResearchCard({
  project,
  index,
  featured = false,
}: {
  project: ResearchProject;
  index: number;
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-sand/80 bg-card shadow-[0_1px_0_rgba(27,36,32,0.04)] transition duration-300",
        "hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(31,83,75,0.08)]",
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-paper-2">
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-pine">
          Project {projectIndex(index)}
        </p>
        <h3 className="mt-3 font-serif text-2xl leading-snug tracking-tight text-ink">
          {project.title}
        </h3>
        <p className="mt-3 font-serif text-[1.05rem] leading-relaxed text-pine-deep/90 italic">
          {project.question}
        </p>
        <p className="mt-4 text-[0.98rem] leading-relaxed text-muted">
          {project.summary}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-sand bg-paper px-2.5 py-1 text-xs tracking-wide text-pine-deep"
            >
              {tag}
            </li>
          ))}
        </ul>
        <p className="mt-5 border-t border-sand/80 pt-4 text-sm leading-relaxed text-ink/80">
          {project.output}
        </p>
        {project.links.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-pine underline-offset-4 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
