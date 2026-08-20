import Link from "next/link";
import { Container } from "@/components/section";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { homeMethods, homeTools } from "@/data/skills";

export function HomeSummary() {
  return (
    <section className="border-y border-sand/80 bg-paper-2/50 py-14 sm:py-16">
      <Container className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
            Experience
          </p>
          <ul className="mt-5 space-y-4">
            {experience.slice(0, 3).map((item) => (
              <li key={`${item.role}-${item.org}`}>
                <p className="font-medium text-ink">{item.role}</p>
                <p className="text-sm text-muted">{item.org}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-pine">
                  {item.start} – {item.end}
                </p>
              </li>
            ))}
          </ul>
          <Link
            href="/experience/"
            className="mt-5 inline-block text-sm font-medium text-pine hover:text-pine-deep"
          >
            Full timeline
          </Link>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
            Methods
          </p>
          <ul className="mt-5 space-y-2">
            {homeMethods.map((method) => (
              <li key={method} className="text-ink">
                {method}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-muted">{homeTools}</p>
          <Link
            href="/methods/"
            className="mt-5 inline-block text-sm font-medium text-pine hover:text-pine-deep"
          >
            Working methods
          </Link>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
            Education
          </p>
          <ul className="mt-5 space-y-4">
            {education.map((item) => (
              <li key={item.degree}>
                <p className="font-medium text-ink">{item.degree}</p>
                <p className="text-sm text-muted">{item.institution}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-pine">
                  {item.years} · {item.result}
                </p>
              </li>
            ))}
          </ul>
          <Link
            href="/education/"
            className="mt-5 inline-block text-sm font-medium text-pine hover:text-pine-deep"
          >
            Degrees
          </Link>
        </div>
      </Container>
    </section>
  );
}
