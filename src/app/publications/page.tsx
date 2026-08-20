import type { Metadata } from "next";
import { PublicationCitation } from "@/components/citation";
import { Container, SectionHeading } from "@/components/section";
import {
  conferences,
  inPreparation,
  published,
  publicationsUpdated,
  underReview,
} from "@/data/publications";

export const metadata: Metadata = {
  title: "Publications & Research Outputs",
  description:
    "Peer-reviewed papers, manuscripts under review, work in preparation, and conference presentations.",
};

function PublicationGroup({
  title,
  items,
}: {
  title: string;
  items: typeof published;
}) {
  return (
    <section className="mt-10 overflow-hidden rounded-2xl border border-sand bg-white p-6 shadow-[0_10px_28px_rgba(27,36,32,0.07)] sm:p-8">
      <h2 className="font-serif text-2xl text-ink">{title}</h2>
      <ul className="mt-6">
        {items.map((item) => (
          <li
            key={item.title}
            className="border-b border-sand/80 py-6 first:pt-0 last:border-b-0 last:pb-0"
          >
            <PublicationCitation item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function PublicationsPage() {
  return (
    <main id="main" className="pb-20 pt-12 sm:pb-28 sm:pt-16">
      <Container className="max-w-3xl">
        <SectionHeading
          as="h1"
          kicker="Outputs"
          title="Publications & Research Outputs"
          description="Peer-reviewed papers, manuscripts under review, and work in preparation. Unfinished work is listed separately and is not presented as published."
        />
        <PublicationGroup title="Peer-Reviewed Publications" items={published} />
        <PublicationGroup title="Manuscripts Under Review" items={underReview} />
        <PublicationGroup title="Manuscripts in Preparation" items={inPreparation} />
        <section className="mt-10 overflow-hidden rounded-2xl border border-sand bg-white p-6 shadow-[0_10px_28px_rgba(27,36,32,0.07)] sm:p-8">
          <h2 className="font-serif text-2xl text-ink">Conference Presentations</h2>
          <ul className="mt-6">
            {conferences.map((item) => (
              <li
                key={item.title}
                className="text-[0.95rem] leading-relaxed break-words text-ink/90 sm:text-base"
              >
                <p className="font-medium text-ink">{item.event}</p>
                <p className="mt-1 text-sm text-muted">
                  {item.location} · {item.date}
                </p>
                <p className="mt-2">
                  {item.contribution}: {item.title}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <p className="mt-12 text-sm text-muted">Last updated: {publicationsUpdated}</p>
      </Container>
    </main>
  );
}
