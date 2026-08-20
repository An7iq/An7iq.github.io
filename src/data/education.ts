import type { Locale, Localized } from "@/lib/i18n";

export type EducationItem = {
  degree: string;
  institution: string;
  years: Localized;
  result: Localized;
  note: Localized;
  supervisor?: Localized;
  coSupervisor?: Localized;
  githubHref?: string;
};

export const education: EducationItem[] = [
  {
    degree: "MSc in Computational Methods in Ecology and Evolution",
    institution: "Imperial College London",
    years: { en: "2022–2023", zh: "2022–2023" },
    result: { en: "Merit", zh: "Merit" },
    supervisor: {
      en: "Dr Emma Ransome (Associate Professor)",
      zh: "Emma Ransome 副教授",
    },
    coSupervisor: {
      en: "Dr Yves Plancherel (Associate Professor)",
      zh: "Yves Plancherel 副教授",
    },
    note: {
      en: "Dissertation: Modelling Seagrass Growth Patterns and Identifying the Impact Factor using Cellular Automata for Restoration Purposes.",
      zh: "学位论文：Modelling Seagrass Growth Patterns and Identifying the Impact Factor using Cellular Automata for Restoration Purposes.",
    },
    githubHref: "https://github.com/AnqiW222",
  },
  {
    degree: "BSc (Hons) Environmental Science",
    institution: "University of Nottingham",
    years: { en: "2019–2022", zh: "2019–2022" },
    result: {
      en: "Second Class Honours, Division One",
      zh: "Second Class Honours, Division One",
    },
    supervisor: {
      en: "Prof. Dov Stekel",
      zh: "Dov Stekel 教授",
    },
    note: {
      en: "Dissertation: A General Model of Minimum Metal Concentration Co-Selection for Antimicrobial Resistance Optimised Using WHAM VII.",
      zh: "学位论文：A General Model of Minimum Metal Concentration Co-Selection for Antimicrobial Resistance Optimised Using WHAM VII.",
    },
  },
];

export function educationCopy(item: EducationItem, locale: Locale) {
  const supervisorPunct = locale === "zh" ? "：" : ": ";
  const supervisorLine = item.supervisor
    ? `${locale === "zh" ? "导师" : "Supervisor"}${supervisorPunct}${item.supervisor[locale]}`
    : null;
  const coSupervisorLine = item.coSupervisor
    ? `${locale === "zh" ? "共同导师" : "Co-supervisor"}${supervisorPunct}${item.coSupervisor[locale]}`
    : null;

  return {
    years: item.years[locale],
    result: item.result[locale],
    note: item.note[locale],
    supervisorLine,
    coSupervisorLine,
  };
}
