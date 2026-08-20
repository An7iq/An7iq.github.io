import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { Container } from "@/components/section";
import { education } from "@/data/education";
import { homeSkillPills } from "@/data/skills";

const homeTimeline = [
  {
    dates: "May 2025–Present",
    role: "Research Assistant",
    org: "Zhejiang A&F University, Jiyang College",
  },
  {
    dates: "March 2024–May 2025",
    role: "Research Assistant",
    org: "Shanghai Jiao Tong University",
  },
  {
    dates: "November 2023–March 2024",
    role: "Research Collaboration — Ocean Carbonate-Ion Data Integration",
    org: "Tsinghua-affiliated Project",
  },
  {
    dates: "2023",
    role: "MSc Dissertation",
    org: "Imperial College London",
  },
];

export function HomeSummary() {
  return (
    <section className="border-y border-sand py-12 sm:py-14">
      <Container className="grid gap-10 md:grid-cols-2 xl:grid-cols-[minmax(0,0.94fr)_minmax(0,1fr)_minmax(0,1fr)] xl:gap-0">
        <div className="xl:pr-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
            Experience
          </p>
          <ol className="relative mt-6 border-l border-sand pl-5">
            {homeTimeline.map((item) => (
              <li key={`${item.role}-${item.dates}`} className="relative pb-5 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.54rem] top-1.5 size-2.5 rounded-full border-2 border-pine bg-paper"
                />
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-pine">
                  {item.dates}
                </p>
                <p className="mt-1 font-medium leading-snug text-ink">{item.role}</p>
                <p className="mt-0.5 text-sm text-muted">{item.org}</p>
              </li>
            ))}
          </ol>
          <Link
            href="/experience/"
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-pine hover:text-pine-deep"
          >
            Full timeline
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
        <div className="border-sand md:border-l md:pl-8 xl:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
            Skills
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
            href="/methods/"
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-pine hover:text-pine-deep"
          >
            Working methods
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
        <div className="border-sand md:col-span-2 xl:col-span-1 xl:border-l xl:pl-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
            Education
          </p>
          <ul className="mt-6">
            {education.map((item, index) => (
              <li
                key={item.degree}
                className={index === 0 ? "border-b border-sand pb-5" : "pt-5"}
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-pine">
                  {item.years}
                </p>
                <p className="mt-1 font-medium leading-snug text-ink">{item.degree}</p>
                <p className="mt-0.5 text-sm text-muted">{item.institution}</p>
                <p className="mt-1 text-sm text-pine-deep">{item.result}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/education/"
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-pine hover:text-pine-deep"
          >
            Degrees
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
