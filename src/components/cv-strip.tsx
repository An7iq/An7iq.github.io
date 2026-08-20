import Link from "next/link";
import { DocumentIcon, DownloadIcon } from "@/components/icons";
import { Container } from "@/components/section";
import { site } from "@/data/site";

export function CvStrip() {
  return (
    <section className="bg-hero py-10 text-white">
      <Container className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <DocumentIcon className="mt-1 size-7 shrink-0 text-white/80" />
          <div>
            <p className="font-serif text-2xl">Curriculum Vitae</p>
            <p className="mt-1 text-sm text-white/70">
              Latest master CV as a PDF, for applications and reference.
            </p>
          </div>
        </div>
        <Link
          href={site.cvPath}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-hero transition-colors hover:bg-paper"
        >
          <DownloadIcon className="size-4" />
          Download CV ↓
        </Link>
      </Container>
    </section>
  );
}
