import { Container, Section, SectionHeading } from "@/components/section";
import { site } from "@/data/site";

export function About() {
  return (
    <Section id="about">
      <Container>
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-12 lg:gap-16">
          <SectionHeading kicker="About" title="A quantitative view of environmental systems" />
          <div className="space-y-5 text-lg leading-relaxed text-ink/85">
            <p>
              I am a quantitative environmental researcher currently working as a
              Research Assistant at Zhejiang A&amp;F University. I hold an MSc in
              Computational Methods in Ecology and Evolution from Imperial College
              London and a BSc (Hons) in Environmental Science from the University of
              Nottingham.
            </p>
            <p>
              My research spans hydrology, ecological modelling, marine and
              Earth-system science, and environmental machine learning. Across these
              systems, I am particularly interested in how multi-source observations
              and computational methods can be used to identify environmental
              processes rather than only improve prediction.
            </p>
            <p>
              I am currently preparing applications for funded PhD opportunities
              beginning in 2027.
            </p>
            <p className="text-base text-muted">
              {site.domains.join(" · ")}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
