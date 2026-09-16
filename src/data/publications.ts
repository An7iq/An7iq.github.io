export type PublicationStatus =
  | "published"
  | "preprint"
  | "under-review"
  | "in-preparation";

export type Publication = {
  authors: string;
  title: string;
  year?: string;
  journal?: string;
  volume?: string;
  article?: string;
  book?: string;
  pages?: string;
  publisher?: string;
  doi?: string;
  url?: string;
  note?: string;
  openAccess?: "gold";
  status: PublicationStatus;
  featured?: boolean;
};

export type ConferenceOutput = {
  event: string;
  location: string;
  date: string;
  contribution: string;
  title: string;
  note?: string;
  url?: string;
};

export const statusLabels: Record<PublicationStatus, string> = {
  published: "Published",
  preprint: "Preprint",
  "under-review": "Under review",
  "in-preparation": "In preparation",
};

export function doiHref(doi: string) {
  return `https://doi.org/${doi}`;
}

export const publications: Publication[] = [
  {
    authors:
      "Hu, Y., Chen, Y., Duan, B., Dong, T., Qian, X., Li, Z., Fan, Y., Wang, A., Yang, S., Gao, W., & Chen, Y.",
    year: "2026",
    title:
      "Closing maize yield gaps in North China Plain: Based on plot-scale farmer survey and simulation",
    journal: "Agricultural Systems",
    volume: "235",
    article: "104697",
    doi: "10.1016/j.agsy.2026.104697",
    status: "published",
    featured: true,
  },
  {
    authors:
      "Su, J., Fan, Y., Zhang, X., Liu, W., He, H., Shi, L., Du, X., Gan, F., Guo, X., Yu, M., Yan, Y., Zhang, X., Wang, N., Wang, A., & Gao, J.",
    year: "2026",
    title:
      "Community-specific thresholds structure a global biotic–climatic–edaphic control gradient of grassland productivity",
    journal: "Ecological Frontiers",
    volume: "46(3)",
    pages: "1198–1211",
    doi: "10.1016/j.ecofro.2026.01.009",
    status: "published",
  },
  {
    authors: "Wang, A.",
    year: "2023",
    title:
      "The Long-term Diffusion of Dumped Wastewater from Japan in the Pacific Ocean",
    book: "Environmental Pollution Governance and Ecological Remediation Technology",
    pages: "pp. 261–269",
    publisher: "Springer",
    doi: "10.1007/978-3-031-25284-6_28",
    status: "published",
  },
  {
    authors:
      "Xu, C., Huang, Z., Wang, A., Xiao, Y., Zhang, T., Qin, H., & Guo, Z.",
    year: "2026",
    title:
      "Nonstationary flood frequency analysis and drivers in the middle-lower Yangtze River, China",
    journal: "Journal of Hydrology: Regional Studies",
    volume: "67",
    article: "103930",
    doi: "10.1016/j.ejrh.2026.103930",
    openAccess: "gold",
    status: "published",
    featured: true,
  },
  {
    authors:
      "Xu, C., Wang, A., Zhou, S., He, H., Shi, L., Xiao, R., Miao, S., Qin, H., Guo, Z., Zhang, X., & Fan, Y.",
    year: "2026",
    title:
      "Spatiotemporal evolution of ecological resilience, catch-up dynamics, and carbon-carrying constraints in the Yangtze River Delta urban agglomeration (2000–2023)",
    journal: "Cities",
    volume: "179",
    article: "107581",
    doi: "10.1016/j.cities.2026.107581",
    status: "published",
    featured: true,
  },
  {
    authors:
      "Zhou, Y., Li, Y., Wang, A., Gan, F., Yan, Y., Xia, S., Zhang, X., Wu, X., Zhong, B., & Fan, Y.",
    year: "2025",
    title:
      "Karst Rice–Tomato Cascade System: A Sustainable Agricultural Strategy for Groundwater Protection",
    journal: "Research Square",
    doi: "10.21203/rs.3.rs-7845171/v1",
    note: "journalUnconfirmed",
    status: "preprint",
    featured: true,
  },
  {
    authors: "Wang, A., et al.",
    title:
      "From Shape to Signal: Machine Learning Detection of Volcanic Events in Ice Core Records",
    status: "in-preparation",
    featured: true,
  },
  {
    authors: "Wang, A., et al.",
    title:
      "Influence of Climatic Factors on Non-Rainfall Water Formation Across Diverse Croplands: Insights for Climate-Smart Agriculture",
    status: "in-preparation",
  },
];

export const published = publications.filter((item) => item.status === "published");
export const preprints = publications.filter((item) => item.status === "preprint");
export const underReview = publications.filter(
  (item) => item.status === "under-review",
);
export const inPreparation = publications.filter(
  (item) => item.status === "in-preparation",
);

export const featuredPublications = publications.filter((item) => item.featured);

export const conferences: ConferenceOutput[] = [
  {
    event: "23rd World Congress of Soil Science",
    location: "Nanjing, China",
    date: "11 June 2026",
    contribution: "Oral presentation",
    title:
      "Neglecting Non-Rainfall Water Contributions Results in an Overestimation of Crop Water Use Efficiency",
    note: "Official congress title; related non-rainfall water research theme.",
  },
];

export const publicationsUpdated = "September 2026";
