import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Publications } from "@/components/publications";
import { Research } from "@/components/research";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Research />
      <Publications />
      <Experience />
      <Education />
      <Skills />
    </main>
  );
}
