import { CvStrip } from "@/components/cv-strip";
import { FeaturedResearch } from "@/components/featured-research";
import { Hero } from "@/components/hero";
import { HomeSummary } from "@/components/home-summary";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <FeaturedResearch />
      <HomeSummary />
      <CvStrip />
    </main>
  );
}
