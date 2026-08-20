import { PublicationCitation } from "@/components/citation";
import { Container, SectionHeading } from "@/components/section";
import {
  conferences,
  inPreparation,
  published,
  underReview,
} from "@/data/publications";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/lib/i18n";

function PublicationGroup({
  title,
  items,
  locale,
}: {
  title: string;
  items: typeof published;
  locale: Locale;
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
            <PublicationCitation item={item} locale={locale} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PublicationsView({ locale }: { locale: Locale }) {
  return (
    <main id="main" className="pb-20 pt-12 sm:pb-28 sm:pt-16">
      <Container className="max-w-3xl">
        <SectionHeading
          as="h1"
          kicker={ui.publicationsKicker[locale]}
          title={ui.publicationsTitle[locale]}
          description={ui.publicationsDescription[locale]}
        />
        <PublicationGroup
          title={ui.published[locale]}
          items={published}
          locale={locale}
        />
        <PublicationGroup
          title={ui.underReview[locale]}
          items={underReview}
          locale={locale}
        />
        <PublicationGroup
          title={ui.inPreparation[locale]}
          items={inPreparation}
          locale={locale}
        />
        <section className="mt-10 overflow-hidden rounded-2xl border border-sand bg-white p-6 shadow-[0_10px_28px_rgba(27,36,32,0.07)] sm:p-8">
          <h2 className="font-serif text-2xl text-ink">{ui.conferences[locale]}</h2>
          <ul className="mt-6">
            {conferences.map((item) => (
              <li
                key={item.title}
                className="text-[0.95rem] leading-relaxed break-words text-ink/90 sm:text-base"
              >
                <p className="font-medium text-ink">{item.event}</p>
                <p className="mt-1 text-sm text-muted">
                  {locale === "zh" ? "中国南京 · 2026年6月" : `${item.location} · ${item.date}`}
                </p>
                <p className="mt-2">
                  {item.contribution === "Oral presentation"
                    ? ui.oralPresentation[locale]
                    : item.contribution}
                  : {item.title}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <p className="mt-12 text-sm text-muted">
          {ui.lastUpdated[locale]}: {ui.publicationsUpdated[locale]}
        </p>
      </Container>
    </main>
  );
}
