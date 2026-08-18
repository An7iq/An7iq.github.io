import { Container, Section, SectionHeading } from "@/components/section";
import { languages, skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills" className="bg-paper-2/40">
      <Container>
        <SectionHeading
          kicker="Methods"
          title="Tools and working methods"
          description="Grouped by use, not claimed as expert-level mastery. These are methods I use in research workflows."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-sand bg-card p-6 sm:p-7"
            >
              <h3 className="font-serif text-2xl text-ink">{group.title}</h3>
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
        <p className="mt-8 text-sm text-muted">
          Languages: {languages.join(" · ")}
        </p>
      </Container>
    </Section>
  );
}
