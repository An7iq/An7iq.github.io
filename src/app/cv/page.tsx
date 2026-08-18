import type { Metadata } from "next";
import Link from "next/link";
import { DownloadIcon } from "@/components/icons";
import { Container, SectionHeading } from "@/components/section";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: "Curriculum Vitae for Anqi Wang.",
};

export default function CvPage() {
  return (
    <main id="main" className="pb-20 pt-12 sm:pb-28 sm:pt-16">
      <Container>
        <SectionHeading
          as="h1"
          kicker="CV"
          title="Curriculum Vitae"
          description="The latest master CV is available as a PDF. This page can be used wherever an application asks for a link to a CV."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={site.cvPath}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-pine px-5 text-sm font-medium text-white transition-colors hover:bg-pine-deep"
          >
            <DownloadIcon className="size-4" />
            Open CV PDF
          </Link>
          <Link
            href={site.cvPath}
            download
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-sand bg-card px-5 text-sm font-medium text-pine-deep hover:border-pine"
          >
            Download CV
          </Link>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-sand bg-card">
          <object
            data={site.cvPath}
            type="application/pdf"
            className="hidden h-[80vh] w-full md:block"
            aria-label="Anqi Wang curriculum vitae"
          >
            <p className="p-6 text-muted">
              The PDF cannot be displayed here.{" "}
              <Link href={site.cvPath} className="text-pine underline">
                Open the CV
              </Link>
              .
            </p>
          </object>
          <p className="p-6 text-sm leading-relaxed text-muted md:hidden">
            On smaller screens, open the PDF directly:{" "}
            <Link href={site.cvPath} className="font-medium text-pine underline">
              Anqi_Wang_CV.pdf
            </Link>
          </p>
        </div>
      </Container>
    </main>
  );
}
