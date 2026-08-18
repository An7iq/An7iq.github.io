import { Container, Section, SectionHeading } from "@/components/section";
import { conferences, inProgress, published } from "@/data/publications";

function Citation({
  authors,
  title,
  venue,
  year,
  status,
}: {
  authors: string;
  title: string;
  venue?: string;
  year?: string;
  status?: string;
}) {
  return (
    <li className="border-b border-sand/80 py-6 first:pt-0 last:border-b-0">
      <p className="text-[1.02rem] leading-relaxed text-ink/90">
        {authors} {year ? `(${year}).` : null}{" "}
        <span className="italic">{title}.</span>
        {venue ? ` ${venue}` : null}
        {status ? (
          <span className="ml-2 inline-flex rounded-full bg-paper-2 px-2.5 py-0.5 text-xs font-medium tracking-wide text-pine">
            {status}
          </span>
        ) : null}
      </p>
    </li>
  );
}

export function Publications() {
  return (
    <Section id="publications">
      <Container>
        <SectionHeading
          kicker="Outputs"
          title="Publications"
          description="Published work, manuscripts in progress, and conference presentations."
        />
          <div className="mt-12 grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h3 className="font-serif text-2xl text-ink">Published</h3>
            <ul className="mt-6">
              {published.map((item) => (
                <Citation key={item.title} {...item} />
              ))}
            </ul>
            <h3 className="mt-10 font-serif text-2xl text-ink">Conference</h3>
            <ul className="mt-6">
              {conferences.map((item) => (
                <li key={item.title} className="text-[1.02rem] leading-relaxed text-ink/90">
                  <p className="font-medium text-ink">{item.event}</p>
                  <p className="mt-1 text-muted">
                    {item.location} · {item.date}
                  </p>
                  <p className="mt-2">
                    {item.contribution}: <span className="italic">{item.title}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-ink">Under review / in preparation</h3>
            <ul className="mt-6">
              {inProgress.map((item) => (
                <Citation key={item.title} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
