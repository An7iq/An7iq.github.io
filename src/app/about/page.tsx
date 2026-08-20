import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/section";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: site.description,
};

export default function AboutPage() {
  return (
    <main id="main" className="pb-20 pt-12 sm:pb-28 sm:pt-16">
      <Container>
        <SectionHeading as="h1" kicker="About" title="A quantitative view of environmental systems" />
        <div className="mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-ink/85">
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
          <p className="text-base text-muted">{site.domains.join(" · ")}</p>
        </div>
      </Container>
    </main>
  );
}
