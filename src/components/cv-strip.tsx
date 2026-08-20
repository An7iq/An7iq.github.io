import Link from "next/link";
import { DocumentIcon } from "@/components/icons";
import { CvDownloadActions } from "@/components/cv-actions";
import { Container } from "@/components/section";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/lib/i18n";

export function CvStrip({ locale }: { locale: Locale }) {
  return (
    <section className="bg-hero py-10 text-white">
      <Container className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <DocumentIcon className="mt-1 size-7 shrink-0 text-white/80" />
          <div>
            <p className="font-serif text-2xl">{ui.cvTitle[locale]}</p>
            <p className="mt-1 text-sm text-white/70">{ui.cvBlurb[locale]}</p>
          </div>
        </div>
        <CvDownloadActions locale={locale} variant="dark" />
      </Container>
    </section>
  );
}
