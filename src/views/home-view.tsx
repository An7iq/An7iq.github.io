import { CvStrip } from "@/components/cv-strip";
import { FeaturedResearch } from "@/components/featured-research";
import { Hero } from "@/components/hero";
import { HomeSummary } from "@/components/home-summary";
import type { Locale } from "@/lib/i18n";

export function HomeView({ locale }: { locale: Locale }) {
  return (
    <main id="main">
      <Hero locale={locale} />
      <FeaturedResearch locale={locale} />
      <HomeSummary locale={locale} />
      <CvStrip locale={locale} />
    </main>
  );
}
