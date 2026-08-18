export type ExperienceItem = {
  start: string;
  end: string;
  role: string;
  org: string;
  location: string;
  summary: string;
};

export const experience: ExperienceItem[] = [
  {
    start: "May 2025",
    end: "Present",
    role: "Research Assistant",
    org: "Zhejiang A&F University, Jiyang College",
    location: "China",
    summary:
      "Quantitative research across hydrology, agroecosystems, and spatial ecology, with undergraduate teaching in environmental courses.",
  },
  {
    start: "Mar 2024",
    end: "May 2025",
    role: "Research Assistant",
    org: "Shanghai Jiao Tong University",
    location: "China",
    summary:
      "Machine-learning methods for volcanic-signal detection and chronology assessment in ice-core palaeoclimate records.",
  },
  {
    start: "Nov 2023",
    end: "Mar 2024",
    role: "Research Collaboration — Marine Biogeochemistry",
    org: "Tsinghua-affiliated Project",
    location: "China",
    summary:
      "Harmonised global observational and Earth-system model datasets for ocean carbon-cycle analysis.",
  },
  {
    start: "Mar 2022",
    end: "Jun 2022",
    role: "Research Intern",
    org: "Tsinghua University",
    location: "China",
    summary:
      "Characterised nonlinear multivariate dependence in ocean-current time series using R-vine copula models.",
  },
  {
    start: "May 2021",
    end: "Jul 2021",
    role: "Research Intern",
    org: "New York University",
    location: "Online",
    summary:
      "Modelled long-term pollutant transport and spatial spread in the Pacific Ocean.",
  },
];
