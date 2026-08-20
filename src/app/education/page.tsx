import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/section";
import { education } from "@/data/education";

export const metadata: Metadata = {
  title: "Education",
  description: "Degrees from Imperial College London and the University of Nottingham.",
};

export default function EducationPage() {
  return (
    <main id="main" className="pb-20 pt-12 sm:pb-28 sm:pt-16">
      <Container>
        <SectionHeading as="h1" kicker="Education" title="Degrees" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <article
              key={item.degree}
              className="rounded-2xl border border-sand bg-white p-6 shadow-[0_8px_22px_rgba(27,36,32,0.07)] sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pine">
                {item.years}
              </p>
              <h2 className="mt-3 font-serif text-2xl leading-snug text-ink">
                {item.degree}
              </h2>
              <p className="mt-2 text-muted">{item.institution}</p>
              <p className="mt-3 text-sm font-medium text-pine-deep">{item.result}</p>
              {item.note ? (
                <p className="mt-4 text-sm leading-relaxed text-muted">{item.note}</p>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
