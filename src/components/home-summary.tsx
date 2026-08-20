import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Container } from "@/components/section";
import { education, educationCopy } from "@/data/education";
import { experienceCopy, homeTimeline } from "@/data/experience";
import { homeSkillPills } from "@/data/skills";
import { ui } from "@/i18n/ui";
import { localizeHref, type Locale } from "@/lib/i18n";

export function HomeSummary({ locale }: { locale: Locale }) {
  return (
    <section className="border-y border-sand py-12 sm:py-14">
      <Container className="grid gap-10 md:grid-cols-2 xl:grid-cols-[minmax(0,0.94fr)_minmax(0,1fr)_minmax(0,1fr)] xl:gap-0">
        <div className="xl:pr-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
            {ui.experience[locale]}
          </p>
          <ol className="relative mt-6 border-l border-sand pl-5">
            {homeTimeline.map((item) => {
              const copy = experienceCopy(item, locale);
              return (
                <li key={item.id} className="relative pb-5 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.54rem] top-1.5 size-2.5 rounded-full border-2 border-pine bg-paper"
                  />
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-pine">
                    {item.homeDateLabel?.[locale] ?? copy.dateLabel}
                  </p>
                  <p className="mt-1 font-medium leading-snug text-ink">
                    {item.homeRole?.[locale] ?? copy.role}
                  </p>
                  <p className="mt-0.5 text-sm text-muted">
                    {item.homeOrg?.[locale] ?? copy.org}
                  </p>
                </li>
              );
            })}
          </ol>
          <Link
            href={localizeHref("/experience/", locale)}
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-pine hover:text-pine-deep"
          >
            {ui.fullTimeline[locale]}
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
        <div className="border-sand md:border-l md:pl-8 xl:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
            {ui.skills[locale]}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {homeSkillPills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-[#cfe0db] bg-[#e7f0ec] px-2.5 py-1 text-[0.78rem] text-pine-deep"
              >
                {skill}
              </li>
            ))}
          </ul>
          <Link
            href={localizeHref("/methods/", locale)}
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-pine hover:text-pine-deep"
          >
            {ui.workingMethods[locale]}
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
        <div className="border-sand md:col-span-2 xl:col-span-1 xl:border-l xl:pl-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
            {ui.education[locale]}
          </p>
          <ul className="mt-6">
            {education.map((item, index) => {
              const copy = educationCopy(item, locale);
              return (
                <li
                  key={item.degree}
                  className={index === 0 ? "border-b border-sand pb-5" : "pt-5"}
                >
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-pine">
                    {copy.years}
                  </p>
                  <p className="mt-1 font-medium leading-snug text-ink">{item.degree}</p>
                  <p className="mt-0.5 text-sm text-muted">{item.institution}</p>
                  <p className="mt-1 text-sm text-pine-deep">{copy.result}</p>
                  {copy.supervisorLine ? (
                    <p className="mt-1 text-sm text-pine-deep">{copy.supervisorLine}</p>
                  ) : null}
                  {copy.coSupervisorLine ? (
                    <p className="mt-1 text-sm text-pine-deep">{copy.coSupervisorLine}</p>
                  ) : null}
                </li>
              );
            })}
          </ul>
          <Link
            href={localizeHref("/education/", locale)}
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-pine hover:text-pine-deep"
          >
            {ui.degrees[locale]}
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
