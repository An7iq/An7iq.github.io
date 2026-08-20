import { Container, SectionHeading } from "@/components/section";
import { education, educationCopy } from "@/data/education";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/lib/i18n";

export function EducationView({ locale }: { locale: Locale }) {
  return (
    <main id="main" className="pb-20 pt-12 sm:pb-28 sm:pt-16">
      <Container>
        <SectionHeading
          as="h1"
          kicker={ui.educationKicker[locale]}
          title={ui.educationTitle[locale]}
          description={ui.educationDescription[locale]}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {education.map((item) => {
            const copy = educationCopy(item, locale);
            return (
              <article
                key={item.degree}
                className="rounded-2xl border border-sand bg-white p-6 shadow-[0_8px_22px_rgba(27,36,32,0.07)] sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pine">
                  {copy.years}
                </p>
                <h2 className="mt-3 font-serif text-2xl leading-snug text-ink">
                  {item.degree}
                </h2>
                <p className="mt-2 text-muted">{item.institution}</p>
                <p className="mt-3 text-sm font-medium text-pine-deep">
                  {copy.result}
                </p>
                {copy.supervisorLine ? (
                  <p className="mt-3 text-sm text-pine-deep">{copy.supervisorLine}</p>
                ) : null}
                {copy.coSupervisorLine ? (
                  <p className="mt-1 text-sm text-pine-deep">{copy.coSupervisorLine}</p>
                ) : null}
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {copy.note}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </main>
  );
}
