import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/section";
import { homeMethods, homeTools, languages, skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Methods",
  description: "Working methods and tools used in research workflows.",
};

export default function MethodsPage() {
  return (
    <main id="main" className="pb-20 pt-12 sm:pb-28 sm:pt-16">
      <Container>
        <SectionHeading
          as="h1"
          kicker="Methods"
          title="Working methods"
          description="Grouped by use, not claimed as expert-level mastery."
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {homeMethods.map((method) => (
            <li
              key={method}
              className="rounded-2xl border border-sand bg-white px-5 py-4 font-medium text-ink shadow-[0_8px_22px_rgba(27,36,32,0.07)]"
            >
              {method}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">{homeTools}</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-sand bg-white p-6 shadow-[0_8px_22px_rgba(27,36,32,0.07)] sm:p-7"
            >
              <h2 className="font-serif text-2xl text-ink">{group.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{group.note}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-sand bg-paper px-3 py-1.5 text-sm text-ink/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">Languages: {languages.join(" · ")}</p>
      </Container>
    </main>
  );
}
