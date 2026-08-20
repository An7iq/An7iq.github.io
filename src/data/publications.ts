export type PublicationStatus = "published" | "under-review" | "in-preparation";

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
  status: PublicationStatus;
  featured?: boolean;
};

export type ConferenceOutput = {
  event: string;
  location: string;
  date: string;
  contribution: string;
  title: string;
};

export const statusLabels: Record<PublicationStatus, string> = {
  published: "Published",
  "under-review": "Under review",
  "in-preparation": "In preparation",
};

export const publications: Publication[] = [
  {
    authors:
      "Hu, Y., Chen, Y., Duan, B., Dong, T., Qian, X., Li, Z., Fan, Y., Wang, A., Gao, Y., & Chen, Y.",
    year: "2026",
    title:
      "Closing maize yield gaps in North China Plain: Based on plot-scale farmer survey and simulation",
    journal: "Agricultural Systems",
    volume: "235",
    article: "104697",
    status: "published",
    featured: true,
  },
  {
    authors:
      "Su, J., Fan, Y., Zhang, X., Liu, W., He, H., Shi, L., Du, X., Gang, F., Guo, M., Yu, Y., Yan, Y., Wang, A., & Gao, J.",
    year: "2026",
    title:
      "Community-specific thresholds structure a global biotic-climatic-edaphic control gradient of grassland productivity",
    journal: "Ecological Frontiers",
    status: "published",
  },
  {
    authors: "Wang, A.",
    year: "2023",
    title:
      "The long-term diffusion of dumped wastewater from Japan in the Pacific Ocean",
    book: "Environmental Pollution Governance and Ecological Remediation Technology",
    pages: "pp. 261–269",
    publisher: "Springer",
    status: "published",
  },
  {
    authors:
      "Chen, X., Huang, Z., Wang, A., Xiao, Y., Zhang, T., Qin, H., & Guo, Z.",
    title:
      "Nonstationary Flood Frequency Analysis and Drivers in the Middle–Lower Yangtze River",
    journal: "Journal of Hydrology: Regional Studies",
    status: "under-review",
    featured: true,
  },
  {
    authors:
      "Fan, Y., Chen, X., Wang, A., Zhou, S., He, H., Shi, L., Xiao, R., Miao, S., Qin, H., Guo, Z., & Zhang, X.",
    title:
      "Spatiotemporal evolution of ecological resilience, catch-up dynamics, and carbon-carrying constraints in the Yangtze River Delta urban agglomeration",
    journal: "Cities",
    status: "under-review",
  },
  {
    authors:
      "Zhou, Y., Li, Y., Wang, A., Gan, F., Yan, Y., Xia, S., Zhang, X., Wu, X., Zhong, B., & Fan, Y.",
    title:
      "Karst Rice–Tomato Cascade System: A Sustainable Agricultural Strategy for Groundwater Protection",
    journal: "Advanced Science",
    status: "under-review",
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
    date: "June 2026",
    contribution: "Oral presentation",
    title:
      "Influence of Climatic Factors on Non-Rainfall Water Formation Across Diverse Croplands",
  },
];

export const publicationsUpdated = "August 2026";
