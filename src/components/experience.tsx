import { Container, Section, SectionHeading } from "@/components/section";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" className="bg-paper-2/40">
      <Container>
        <SectionHeading kicker="Experience" title="Research appointments" />
        <ol className="relative mt-12 border-l border-sand pl-6 sm:pl-8">
          {experience.map((item) => (
            <li key={`${item.role}-${item.org}`} className="relative pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[1.54rem] top-1.5 size-3 rounded-full border-2 border-pine bg-paper sm:-left-[2.04rem]"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pine">
                {item.start} – {item.end}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-ink">{item.role}</h3>
              <p className="mt-1 text-muted">
                {item.org} · {item.location}
              </p>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink/80">{item.summary}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
