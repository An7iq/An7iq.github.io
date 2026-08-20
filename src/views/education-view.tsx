import { Container, SectionHeading } from "@/components/section";
import { ArrowRightIcon } from "@/components/icons";
import { education, educationCopy } from "@/data/education";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/lib/i18n";

export function EducationView({ locale }: { locale: Locale }) {
  return (
    <main id="main" className="pb-20 pt-12 sm:pb-28 sm:pt-16">
      <Container>
        {locale === "zh" ? (
          <div className="max-w-2xl">
            <h1 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
              {ui.educationKicker.zh}
            </h1>
            <p className="mt-3 font-serif text-2xl text-ink">
              {ui.educationTitle.zh}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {ui.educationDescription.zh}
            </p>
          </div>
        ) : (
          <SectionHeading
            as="h1"
            kicker={ui.educationKicker.en}
            title={ui.educationTitle.en}
            description={ui.educationDescription.en}
          />
        )}
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
                {item.githubHref ? (
                  <p className="mt-4">
                    <a
                      href={item.githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-pine hover:text-pine-deep"
                    >
                      {ui.viewMscGithub[locale]}
                      <ArrowRightIcon className="size-4" />
                    </a>
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </Container>
    </main>
  );
}
