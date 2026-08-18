import { Container, Section, SectionHeading } from "@/components/section";
import { education } from "@/data/education";

export function Education() {
  return (
    <Section id="education">
      <Container>
        <SectionHeading kicker="Education" title="Degrees" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <article
              key={item.degree}
              className="rounded-2xl border border-sand bg-card p-6 sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pine">
                {item.years}
              </p>
              <h3 className="mt-3 font-serif text-2xl leading-snug text-ink">
                {item.degree}
              </h3>
              <p className="mt-2 text-muted">{item.institution}</p>
              <p className="mt-3 text-sm font-medium text-pine-deep">{item.result}</p>
              {item.note ? (
                <p className="mt-4 text-sm leading-relaxed text-muted">{item.note}</p>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
