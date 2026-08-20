import type { Locale, Localized } from "@/lib/i18n";

export type EducationItem = {
  degree: string;
  institution: string;
  years: Localized;
  result: Localized;
  note: Localized;
};

export const education: EducationItem[] = [
  {
    degree: "MSc in Computational Methods in Ecology and Evolution",
    institution: "Imperial College London",
    years: { en: "2022–2023", zh: "2022–2023" },
    result: { en: "Merit", zh: "Merit" },
    note: {
      en: "Dissertation: Modelling Seagrass Growth Growing Patterns and Identifying the Impact Factor using Cellular Automata for Restoration Purposes.",
      zh: "学位论文：Modelling Seagrass Growth Growing Patterns and Identifying the Impact Factor using Cellular Automata for Restoration Purposes.",
    },
  },
  {
    degree: "BSc (Hons) Environmental Science",
    institution: "University of Nottingham",
    years: { en: "2019–2022", zh: "2019–2022" },
    result: {
      en: "Second Class Honours, Division One",
      zh: "Second Class Honours, Division One",
    },
    note: {
      en: "Dissertation: A General Model of Minimum Metal Concentration Co-Selection for Antimicrobial Resistance Optimised Using WHAM VII.",
      zh: "学位论文：A General Model of Minimum Metal Concentration Co-Selection for Antimicrobial Resistance Optimised Using WHAM VII.",
    },
  },
];

export function educationCopy(item: EducationItem, locale: Locale) {
  return {
    years: item.years[locale],
    result: item.result[locale],
    note: item.note[locale],
  };
}
