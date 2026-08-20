import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/section";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Research appointments and collaborations.",
};

export default function ExperiencePage() {
  return (
    <main id="main" className="pb-20 pt-12 sm:pb-28 sm:pt-16">
      <Container>
        <SectionHeading as="h1" kicker="Experience" title="Research appointments" />
        <ol className="relative mt-12 max-w-3xl border-l border-sand pl-6 sm:pl-8">
          {experience.map((item) => (
            <li key={`${item.role}-${item.org}`} className="relative pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[1.54rem] top-1.5 size-3 rounded-full border-2 border-pine bg-paper sm:-left-[2.04rem]"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pine">
                {item.start} – {item.end}
              </p>
              <h2 className="mt-2 font-serif text-2xl text-ink">{item.role}</h2>
              <p className="mt-1 text-muted">
                {item.org} · {item.location}
              </p>
              <p className="mt-3 leading-relaxed text-ink/80">{item.summary}</p>
            </li>
          ))}
        </ol>
      </Container>
    </main>
  );
}
