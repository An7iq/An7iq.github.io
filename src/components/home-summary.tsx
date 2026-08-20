import Link from "next/link";
import { Container } from "@/components/section";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { homeMethods, homeTools } from "@/data/skills";

function Column({
  kicker,
  children,
  href,
  linkLabel,
}: {
  kicker: string;
  children: React.ReactNode;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className="rounded-2xl border border-sand bg-white p-6 shadow-[0_8px_22px_rgba(27,36,32,0.07)]">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
        {kicker}
      </p>
      {children}
      <Link
        href={href}
        className="mt-5 inline-block text-sm font-medium text-pine hover:text-pine-deep"
      >
        {linkLabel}
      </Link>
    </div>
  );
}

export function HomeSummary() {
  return (
    <section className="border-y border-sand py-16 sm:py-20">
      <Container className="grid gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
        <Column kicker="Experience" href="/experience/" linkLabel="Full timeline">
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
        </Column>
        <Column kicker="Methods" href="/methods/" linkLabel="Working methods">
          <ul className="mt-5 space-y-2">
            {homeMethods.map((method) => (
              <li key={method} className="text-ink">
                {method}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-muted">{homeTools}</p>
        </Column>
        <Column kicker="Education" href="/education/" linkLabel="Degrees">
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
        </Column>
      </Container>
    </section>
  );
}
