export type Publication = {
  authors: string;
  title: string;
  venue: string;
  year: string;
  status?: string;
  href?: string;
};

export type ConferenceOutput = {
  event: string;
  location: string;
  date: string;
  contribution: string;
  title: string;
};

export const published: Publication[] = [
  {
    authors: "Wang, A.",
    title:
      "The long-term diffusion of dumped wastewater from Japan in the Pacific Ocean",
    venue:
      "In Environmental Pollution Governance and Ecological Remediation Technology (pp. 261–269). Springer.",
    year: "2023",
  },
];

export const inProgress: Publication[] = [
  {
    authors: "Wang, A., et al.",
    title:
      "From Shape to Signal: Machine Learning Detection of Volcanic Events in Ice Core Records",
    venue: "",
    year: "",
    status: "In preparation",
  },
  {
    authors: "Wang, A., et al.",
    title:
      "Influence of Climatic Factors on Non-Rainfall Water Formation Across Diverse Croplands: Insights for Climate-Smart Agriculture",
    venue: "",
    year: "",
    status: "In preparation",
  },
  {
    authors: "Chen, X., Huang, Z., Wang, A., Xiao, Y., Zhang, T., Qin, H., & Guo, Z.",
    title:
      "Nonstationary Flood Frequency Analysis and Drivers in the Middle-Lower Yangtze River",
    venue: "Journal of Hydrology: Regional Studies",
    year: "",
    status: "Under review",
  },
  {
    authors:
      "Fan, Y., Chen, X., Wang, A., Zhou, S., He, H., Shi, L., Xiao, R., Miao, S., Qin, H., Guo, Z., & Zhang, X.",
    title:
      "Spatiotemporal Evolution of Ecological Resilience, Catch-up Dynamics, and Carbon-carrying Constraints in the Yangtze River Delta Urban Agglomeration (2000–2023)",
    venue: "Cities",
    year: "",
    status: "Under review",
  },
];

export const conferences: ConferenceOutput[] = [
  {
    event: "23rd World Congress of Soil Science",
    location: "Nanjing, China",
    date: "June 2026",
    contribution: "Oral presentation",
    title:
      "Influence of Climatic Factors on Non-Rainfall Water Formation Across Diverse Croplands",
  },
];
