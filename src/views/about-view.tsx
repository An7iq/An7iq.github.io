import { Container, SectionHeading } from "@/components/section";
import { site, siteZh } from "@/data/site";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/lib/i18n";

export function AboutView({ locale }: { locale: Locale }) {
  const domains = locale === "zh" ? siteZh.domains : site.domains;

  return (
    <main id="main" className="pb-20 pt-12 sm:pb-28 sm:pt-16">
      <Container>
        <SectionHeading
          as="h1"
          kicker={ui.aboutKicker[locale]}
          title={ui.aboutTitle[locale]}
        />
        <div className="mt-10 max-w-3xl space-y-5 rounded-2xl border border-sand bg-white p-6 text-lg leading-relaxed text-ink/85 shadow-[0_10px_28px_rgba(27,36,32,0.07)] sm:p-8">
          <p>{ui.aboutP1[locale]}</p>
          <p>{ui.aboutP2[locale]}</p>
          <p>{ui.aboutP3[locale]}</p>
          <p className="text-base text-muted">{domains.join(" · ")}</p>
        </div>
      </Container>
    </main>
  );
}
