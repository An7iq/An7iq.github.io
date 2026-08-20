export type EducationItem = {
  degree: string;
  institution: string;
  years: string;
  result: string;
  note?: string;
};

export const education: EducationItem[] = [
  {
    degree: "MSc in Computational Methods in Ecology and Evolution",
    institution: "Imperial College London",
    years: "2022–2023",
    result: "Merit",
    note: "Dissertation: Modelling Seagrass Growth Growing Patterns and Identifying the Impact Factor using Cellular Automata for Restoration Purposes.",
  },
  {
    degree: "BSc (Hons) Environmental Science",
    institution: "University of Nottingham",
    years: "2019–2022",
    result: "Second Class Honours, Division One",
    note: "Dissertation: A General Model of Minimum Metal Concentration Co-Selection for Antimicrobial Resistance Optimised Using WHAM VII.",
  },
];
