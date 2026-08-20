import type { CaseStudy, ResearchProject } from "@/data/research";
import type { Locale } from "@/lib/i18n";
import { researchZh } from "@/i18n/research";

type CaseStudyOverlay = Partial<
  Omit<CaseStudy, "figures" | "extraSections">
> & {
  extraSections?: CaseStudy["extraSections"];
  figures?: Array<{
    src: string;
    alt?: string;
    caption?: string;
    after?: string;
  }>;
};

export type ResearchOverlay = Partial<
  Omit<ResearchProject, "caseStudy" | "slug">
> & {
  caseStudy?: CaseStudyOverlay;
};

function mergeCaseStudy(base: CaseStudy, overlay?: CaseStudyOverlay): CaseStudy {
  if (!overlay) return base;
  const figures = base.figures?.map((figure) => {
    const match = overlay.figures?.find((item) => item.src === figure.src);
    return match
      ? {
          ...figure,
          alt: match.alt ?? figure.alt,
          caption: match.caption ?? figure.caption,
          after: match.after ?? figure.after,
        }
      : figure;
  });
  return {
    ...base,
    ...overlay,
    extraSections: overlay.extraSections ?? base.extraSections,
    figures,
  };
}

export function localizeProject(
  project: ResearchProject,
  locale: Locale,
): ResearchProject {
  if (locale === "en") return project;
  const overlay = researchZh[project.slug];
  if (!overlay) return project;
  return {
    ...project,
    ...overlay,
    caseStudy: mergeCaseStudy(project.caseStudy, overlay.caseStudy),
  };
}

export function localizeProjects(
  projects: ResearchProject[],
  locale: Locale,
) {
  return projects.map((project) => localizeProject(project, locale));
}
