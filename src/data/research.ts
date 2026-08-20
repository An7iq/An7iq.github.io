export type ResearchLink = {
  label: string;
  href: string;
};

export type ResearchGroup = "current" | "earlier";

export type ResearchProject = {
  slug: string;
  title: string;
  question: string;
  summary: string;
  tags: string[];
  cardTags: string[];
  output: string;
  image: string | null;
  cardImage?: string;
  imageAlt: string;
  imageTone: "light" | "dark";
  figureCaption?: string;
  links: ResearchLink[];
  featured: boolean;
  group: ResearchGroup;
};

export const researchProjects: ResearchProject[] = [
  {
    slug: "non-rainfall-water",
    title: "Non-Rainfall Water Across Croplands",
    question:
      "When do small, often overlooked atmospheric water inputs matter for agroecosystem water budgets?",
    summary:
      "Multi-site lysimeter, meteorological, and crop-stage observations were used to detect non-rainfall water events and investigate their environmental controls through quality-control, event-detection, XGBoost, and SHAP workflows.",
    tags: [
      "Ecohydrology",
      "Agroecosystems",
      "Lysimeter",
      "XGBoost",
      "SHAP",
      "Hydroclimate",
    ],
    cardTags: ["Ecohydrology", "Lysimeter", "XGBoost", "SHAP"],
    output: "Oral presentation, WCSS 2026 · Manuscript in preparation",
    image: "/images/research/non-rainfall-water.png",
    imageAlt:
      "Generic lysimeter schematic beside a map of multi-site cropland study locations in China.",
    imageTone: "dark",
    figureCaption:
      "Lysimeter water-balance instrumentation and the China multi-site observation network used in the non-rainfall water study.",
    links: [],
    featured: true,
    group: "current",
  },
  {
    slug: "yangtze-flood-frequency",
    title: "Nonstationary Flood Frequency in the Yangtze River",
    question:
      "How do changing hydroclimatic conditions and reservoir regulation alter flood-frequency distributions?",
    summary:
      "Analysis of 63 years of flood records across four major stations in the middle–lower Yangtze River using nonstationarity diagnostics, GAMLSS, and hydroclimatic/reservoir covariates.",
    tags: ["Hydrology", "Flood Extremes", "GAMLSS", "Hydroclimate", "Time Series"],
    cardTags: ["Hydrology", "Flood Extremes", "GAMLSS", "Hydroclimate"],
    output: "Under review at Journal of Hydrology: Regional Studies",
    image: "/images/research/yangtze-floods.png",
    imageAlt:
      "Map of the middle–lower Yangtze River Basin showing four hydrological stations and the Three Gorges Dam.",
    imageTone: "light",
    figureCaption:
      "Study area in the middle–lower Yangtze River Basin, with hydrological stations at Yichang, Luoshan, Hankou and Datong.",
    links: [],
    featured: true,
    group: "current",
  },
  {
    slug: "ice-core-volcanic-signals",
    title: "Ice-Core Volcanic Signals and Chronology",
    question:
      "How can quantitative methods help identify volcanic signals and assess chronology in noisy palaeoclimate records?",
    summary:
      "Integrated ice-core chemical records with multiple volcanic-event chronologies, including chronology alignment, signal-window feature engineering, model benchmarking, error analysis, and evaluation of volcanic signals as candidate chronological tie points.",
    tags: [
      "Palaeoclimate",
      "Ice Cores",
      "Machine Learning",
      "Time Series",
      "Chronology",
      "Signal Detection",
    ],
    cardTags: ["Palaeoclimate", "Ice Cores", "Machine Learning", "Chronology"],
    output: "Manuscript in preparation",
    image: "/images/research/ice-core.png",
    imageAlt:
      "Three-panel Volcano Hunter workflow from ice-core input data through morphological features to event detection.",
    imageTone: "light",
    figureCaption:
      "Volcano Hunter workflow: ice-core inputs and weak supervision, morphological feature representation, and XGBoost-based event detection.",
    links: [],
    featured: true,
    group: "current",
  },
  {
    slug: "yangtze-delta-resilience",
    title: "Ecological Resilience Across the Yangtze River Delta",
    question:
      "How have ecological resilience and carbon-related constraints evolved across rapidly urbanizing landscapes?",
    summary:
      "Integrated 24 years of multi-source data across 27 Yangtze River Delta cities using Random Forest modelling, SHAP-based interpretation, and structural equation modelling.",
    tags: [
      "Spatial Ecology",
      "Environmental Data",
      "Random Forest",
      "SHAP",
      "SEM",
      "Urban Systems",
    ],
    cardTags: ["Spatial Ecology", "Random Forest", "SHAP", "SEM"],
    output: "Under review at Cities",
    image: "/images/research/yangtze-delta.png",
    cardImage: "/images/research/yangtze-delta-card.png",
    imageAlt:
      "Multi-year maps of ecological potential, elasticity, stability and resilience across the Yangtze River Delta, 2000–2023.",
    imageTone: "dark",
    figureCaption:
      "Spatiotemporal evolution of ecological potential, elasticity, stability and resilience across the Yangtze River Delta urban agglomeration, 2000–2023.",
    links: [],
    featured: true,
    group: "current",
  },
  {
    slug: "marine-biogeochemistry",
    title: "Marine Biogeochemistry",
    question:
      "How do ocean carbon-cycle conditions vary spatially, and what physical and biogeochemical factors shape that variability?",
    summary:
      "Contributed to a collaboration using global observational and Earth-system model datasets to examine ocean carbon-cycle conditions. Work included multi-source harmonisation, construction of ensemble machine-learning-ready datasets, and scientific visualisation.",
    tags: [
      "Marine Biogeochemistry",
      "Ocean Carbon",
      "Earth-System Data",
      "Data Harmonisation",
    ],
    cardTags: ["Marine Biogeochemistry", "Ocean Carbon", "Earth-System Data"],
    output: "Research collaboration, 2023–2024",
    image: null,
    imageAlt: "",
    imageTone: "light",
    links: [],
    featured: false,
    group: "current",
  },
  {
    slug: "seagrass-restoration",
    title: "Seagrass Restoration Modelling",
    question:
      "How do nutrient and current conditions shape spatially explicit seagrass restoration trajectories?",
    summary:
      "MSc dissertation at Imperial College London. Developed a spatially explicit cellular-automata model to simulate seagrass growth and restoration trajectories under contrasting nutrient and current conditions, and to identify influencing factors for restoration purposes.",
    tags: [
      "Ecological Modelling",
      "Cellular Automata",
      "Restoration",
      "Marine Systems",
    ],
    cardTags: ["Ecological Modelling", "Cellular Automata", "Restoration"],
    output: "MSc dissertation, Imperial College London, 2023",
    image: null,
    imageAlt: "",
    imageTone: "light",
    links: [],
    featured: false,
    group: "earlier",
  },
  {
    slug: "metal-coselection",
    title: "Metal Co-selection and Antimicrobial Resistance",
    question:
      "How can metal speciation modelling help estimate environmental metal concentrations associated with antimicrobial-resistance co-selection?",
    summary:
      "BSc dissertation at the University of Nottingham. Used WHAM VII to model metal speciation and estimate environmental metal concentrations associated with antimicrobial-resistance co-selection.",
    tags: ["Environmental Chemistry", "Speciation Modelling", "WHAM VII"],
    cardTags: ["Environmental Chemistry", "Speciation Modelling", "WHAM VII"],
    output: "BSc dissertation, University of Nottingham, 2022",
    image: null,
    imageAlt: "",
    imageTone: "light",
    links: [],
    featured: false,
    group: "earlier",
  },
  {
    slug: "ocean-current-dependence",
    title: "Ocean-Current Dependence Modelling",
    question:
      "How can nonlinear multivariate dependence in ocean-current time series be characterised?",
    summary:
      "Processed and integrated ocean-current time series and implemented R-vine copula models in R, covering data organisation, dependence diagnostics, model fitting, and scientific visualisation.",
    tags: [
      "Ocean Currents",
      "R-vine Copulas",
      "Multivariate Dependence",
      "Time Series",
    ],
    cardTags: ["Ocean Currents", "R-vine Copulas", "Time Series"],
    output: "Research internship, Tsinghua University, 2022",
    image: null,
    imageAlt: "",
    imageTone: "light",
    links: [],
    featured: false,
    group: "earlier",
  },
  {
    slug: "pacific-pollutant-transport",
    title: "Pacific Pollutant Transport",
    question:
      "How does dumped wastewater spread over the long term in the Pacific Ocean under simplified circulation and diffusion?",
    summary:
      "Used simplified ocean-circulation and diffusion models to examine long-term pollutant transport and spatial spread in the Pacific Ocean. The work resulted in a published conference/book chapter.",
    tags: ["Ocean Circulation", "Diffusion Modelling", "Pollutant Transport"],
    cardTags: ["Ocean Circulation", "Diffusion Modelling"],
    output:
      "Published book chapter, Springer, 2023",
    image: null,
    imageAlt: "",
    imageTone: "light",
    links: [],
    featured: false,
    group: "earlier",
  },
];

export const featuredProjects = researchProjects.filter((project) => project.featured);
export const currentProjects = researchProjects.filter(
  (project) => project.group === "current",
);
export const earlierProjects = researchProjects.filter(
  (project) => project.group === "earlier",
);

export function getProject(slug: string) {
  return researchProjects.find((project) => project.slug === slug);
}
