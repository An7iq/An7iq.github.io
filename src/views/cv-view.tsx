import Link from "next/link";
import { CvDownloadActions } from "@/components/cv-actions";
import { Container, SectionHeading } from "@/components/section";
import { site } from "@/data/site";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/lib/i18n";

export function CvView({ locale }: { locale: Locale }) {
  return (
    <main id="main" className="pb-20 pt-12 sm:pb-28 sm:pt-16">
      <Container>
        <SectionHeading
          as="h1"
          kicker={ui.nav.cv[locale]}
          title={ui.cvTitle[locale]}
          description={ui.cvPageDescription[locale]}
        />
        <div className="mt-8">
          <CvDownloadActions locale={locale} />
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-sand bg-card">
          <object
            data={site.cvPath}
            type="application/pdf"
            className="hidden h-[80vh] w-full md:block"
            aria-label={ui.cvTitle[locale]}
          >
            <p className="p-6 text-muted">
              {ui.cvCannotDisplay[locale]}{" "}
              <Link href={site.cvPath} className="text-pine underline">
                {ui.openTheCv[locale]}
              </Link>
              .
            </p>
          </object>
          <p className="p-6 text-sm leading-relaxed text-muted md:hidden">
            {ui.cvMobileHint[locale]}{" "}
            <Link href={site.cvPath} className="font-medium text-pine underline">
              Anqi_Wang_CV.pdf
            </Link>
          </p>
        </div>
      </Container>
    </main>
  );
}
