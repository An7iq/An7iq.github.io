import { CvStrip } from "@/components/cv-strip";
import { FeaturedPublications } from "@/components/featured-publications";
import { FeaturedResearch } from "@/components/featured-research";
import { Hero } from "@/components/hero";
import { HomeSummary } from "@/components/home-summary";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <FeaturedResearch />
      <FeaturedPublications />
      <HomeSummary />
      <CvStrip />
    </main>
  );
}
