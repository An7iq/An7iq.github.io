export type ResearchLink = {
  label: string;
  href: string;
};

export type ResearchProject = {
  slug: string;
  title: string;
  question: string;
  summary: string;
  tags: string[];
  output: string;
  image: string;
  links: ResearchLink[];
  featured: boolean;
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
    output:
      "Oral presentation at the 23rd World Congress of Soil Science (2026). First-author manuscript in preparation.",
    image: "/images/research/non-rainfall-water.svg",
    links: [],
    featured: true,
  },
  {
    slug: "yangtze-flood-frequency",
    title: "Nonstationary Flood Frequency in the Yangtze River",
    question:
      "How do changing hydroclimatic conditions and reservoir regulation alter flood-frequency distributions?",
    summary:
      "Analysis of 63 years of flood records across four major stations in the middle–lower Yangtze River using nonstationarity diagnostics, GAMLSS, and hydroclimatic/reservoir covariates.",
    tags: ["Hydrology", "Flood Extremes", "GAMLSS", "Hydroclimate", "Time Series"],
    output: "Manuscript under review at Journal of Hydrology: Regional Studies.",
    image: "/images/research/yangtze-floods.svg",
    links: [],
    featured: true,
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
    output: "Manuscript in preparation.",
    image: "/images/research/ice-core.svg",
    links: [],
    featured: true,
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
    output: "Manuscript under review at Cities.",
    image: "/images/research/yangtze-delta.svg",
    links: [],
    featured: true,
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
    output: "Research collaboration, 2023–2024.",
    image: "/images/research/marine-biogeochemistry.svg",
    links: [],
    featured: false,
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
    output: "MSc dissertation, Imperial College London, 2023.",
    image: "/images/research/seagrass.svg",
    links: [],
    featured: false,
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
    output: "Research internship, Tsinghua University, 2022.",
    image: "/images/research/ocean-currents.svg",
    links: [],
    featured: false,
  },
  {
    slug: "pacific-pollutant-transport",
    title: "Pacific Pollutant Transport",
    question:
      "How does dumped wastewater spread over the long term in the Pacific Ocean under simplified circulation and diffusion?",
    summary:
      "Used simplified ocean-circulation and diffusion models to examine long-term pollutant transport and spatial spread in the Pacific Ocean. The work resulted in a published conference/book chapter.",
    tags: ["Ocean Circulation", "Diffusion Modelling", "Pollutant Transport"],
    output:
      "Published as a book chapter in Environmental Pollution Governance and Ecological Remediation Technology (Springer, 2023).",
    image: "/images/research/pacific-transport.svg",
    links: [],
    featured: false,
  },
];

export const featuredProjects = researchProjects.filter((project) => project.featured);
export const additionalProjects = researchProjects.filter((project) => !project.featured);
