import { Container, SectionHeading } from "@/components/section";
import {
  academicService,
  earlierInternships,
  experienceCopy,
  researchExperience,
  teachingExperience,
  translationExperience,
  type ExperienceItem,
} from "@/data/experience";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/lib/i18n";

function ExperienceList({
  items,
  locale,
}: {
  items: ExperienceItem[];
  locale: Locale;
}) {
  return (
    <ol className="relative border-l border-sand pl-6 sm:pl-8">
      {items.map((item) => {
        const copy = experienceCopy(item, locale);
        const advisorNames = item.advisors?.[locale] ?? [];
        const advisorLabel =
          item.advisorLabel?.[locale] ??
          (advisorNames.length > 1 ? ui.advisors[locale] : ui.advisor[locale]);
        const advisorJoin = locale === "zh" ? "、" : " and ";
        const advisorPunct = locale === "zh" ? "：" : ": ";
        const orgLine = copy.location ? `${copy.org} · ${copy.location}` : copy.org;
        return (
          <li key={item.id} className="relative pb-10 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[1.54rem] top-1.5 size-3 rounded-full border-2 border-pine bg-paper sm:-left-[2.04rem]"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pine">
              {copy.dateLabel}
            </p>
            <h3 className="mt-2 font-serif text-2xl text-ink">{copy.role}</h3>
            {copy.workTitle ? (
              <p className="mt-2 text-lg leading-snug text-ink">
                <cite className="font-serif italic">{copy.workTitle}</cite>
              </p>
            ) : null}
            {copy.detailLines.length ? (
              <div className="mt-1 space-y-1 text-muted">
                {copy.detailLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            ) : null}
            {orgLine ? <p className="mt-1 text-muted">{orgLine}</p> : null}
            {advisorNames.length ? (
              <p className="mt-2 text-sm text-pine-deep">
                {advisorLabel}
                {advisorPunct}
                {advisorNames.join(advisorJoin)}
              </p>
            ) : null}
            <p className="mt-3 leading-relaxed text-ink/80">{copy.summary}</p>
            {copy.isbn ? <p className="mt-3 text-sm text-muted">{copy.isbn}</p> : null}
            {item.publicationHref ? (
              <p className="mt-2">
                <a
                  href={item.publicationHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-pine hover:text-pine-deep"
                >
                  {ui.publicationDetails[locale]}
                </a>
              </p>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

function ExperienceCard({
  title,
  items,
  locale,
}: {
  title: string;
  items: ExperienceItem[];
  locale: Locale;
}) {
  return (
    <section className="mt-10 max-w-3xl rounded-2xl border border-sand bg-white p-6 shadow-[0_10px_28px_rgba(27,36,32,0.07)] sm:p-8">
      <h2 className="font-serif text-2xl text-ink">{title}</h2>
      <div className="mt-8">
        <ExperienceList items={items} locale={locale} />
      </div>
    </section>
  );
}

export function ExperienceView({ locale }: { locale: Locale }) {
  return (
    <main id="main" className="pb-20 pt-12 sm:pb-28 sm:pt-16">
      <Container>
        <SectionHeading
          as="h1"
          kicker={ui.experienceKicker[locale]}
          title={ui.experienceTitle[locale]}
          description={ui.experienceDescription[locale]}
        />
        <ExperienceCard
          title={ui.researchExperience[locale]}
          items={researchExperience}
          locale={locale}
        />
        <ExperienceCard
          title={ui.teachingExperience[locale]}
          items={teachingExperience}
          locale={locale}
        />
        <ExperienceCard
          title={ui.translationExperience[locale]}
          items={translationExperience}
          locale={locale}
        />
        <ExperienceCard
          title={ui.academicService[locale]}
          items={academicService}
          locale={locale}
        />
        <ExperienceCard
          title={ui.earlierAppointments[locale]}
          items={earlierInternships}
          locale={locale}
        />
      </Container>
    </main>
  );
}
