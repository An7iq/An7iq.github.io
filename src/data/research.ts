export type ResearchLink = {
  label: string;
  href: string;
};

export type ResearchGroup = "current" | "earlier";

export type CaseStudy = {
  overview: string;
  context: string;
  data: string;
  dataPoints?: string[];
  approach: string;
  findings: string;
  findingsPoints?: string[];
  contribution: string;
  outputProse: string;
  outputPoints?: string[];
  relatedMethods: string[];
};

export type ResearchProject = {
  slug: string;
  title: string;
  cardSummary: string;
  shortSummary: string;
  tags: string[];
  cardTags: string[];
  output: string;
  image: string | null;
  imageAlt: string;
  figureCaption?: string;
  institution?: string;
  yearLabel?: string;
  links: ResearchLink[];
  featured: boolean;
  group: ResearchGroup;
  caseStudy: CaseStudy;
};

export const researchProjects: ResearchProject[] = [
  {
    slug: "non-rainfall-water",
    title: "Non-Rainfall Water Across Croplands",
    cardSummary:
      "This multi-site study quantifies overlooked nighttime atmospheric water inputs across contrasting crops and surface conditions. Lysimeter, meteorological, and crop-stage observations are combined with quality control, event detection, XGBoost, and SHAP to identify environmental controls and assess water-budget bias.",
    shortSummary:
      "This multi-site study quantifies overlooked nighttime atmospheric water inputs across contrasting crops and surface conditions.",
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
    image: "/images/research/non-rainfall-water-lysimeter-and-sites.png",
    imageAlt:
      "Generic lysimeter schematic beside a map of multi-site cropland study locations in China.",
    figureCaption:
      "Lysimeter water-balance instrumentation and the China multi-site observation network used in the non-rainfall water study.",
    institution: "Zhejiang A&F University, Jiyang College",
    yearLabel: "2025–2026",
    links: [],
    featured: true,
    group: "current",
    caseStudy: {
      overview:
        "This multi-site study quantifies overlooked nighttime atmospheric water inputs across contrasting crops and surface conditions. Lysimeter, meteorological, and crop-stage observations are combined with quality control, event detection, XGBoost, and SHAP to identify environmental controls and assess water-budget bias.",
      context:
        "Non-rainfall water, including dew and related nighttime mass gains, is often omitted from agroecosystem water-budget accounts even though it can contribute to surface moisture when rainfall is absent. The project asks when these small fluxes become large enough to matter for water-input accounting across croplands, without treating the resulting associations as proof of a single causal mechanism.",
      data: "The analysis draws on multi-site lysimeter records together with meteorological, irrigation, precipitation, and crop-stage information. After quality control, the compiled series provide a consistent basis for event detection across crop and land-surface categories.",
      dataPoints: [
        "More than 19 observation sites, 2004–2016",
        "Thirteen crop or surface categories",
        "Initial records: 28,746",
        "Records retained after quality control: 23,954",
      ],
      approach:
        "Nighttime mass gains were screened against a 0.02 mm detection threshold and a no-rainfall condition to identify candidate NRW event-days. An XGBoost classifier with class-imbalance handling was then used to relate event occurrence to environmental covariates, and SHAP values were grouped by environmental-process families to interpret relative associations rather than to assert causation.",
      findings:
        "The compiled record indicates that NRW events are uncommon but not negligible, and that omitting them can shift water-input accounting. The modelled associations point to temperature and moisture conditions as major controls, with stronger wind sensitivity on bare land. These patterns are reported as observed associations.",
      findingsPoints: [
        "NRW event prevalence: approximately 4.07%, corresponding to 975 event-days",
        "Detection threshold: 0.02 mm",
        "Omitting NRW produced a median water-accounting bias of approximately 16.9% in the relevant assessment",
      ],
      contribution:
        "Anqi Wang developed the quality-control, event-detection, and XGBoost/SHAP workflows, contributed to interpretation and figure development, and is preparing the first-author manuscript.",
      outputProse:
        "The work has been presented orally and is being prepared as a first-author journal manuscript. It is not reported here as published.",
      outputPoints: [
        "Oral presentation, 23rd World Congress of Soil Science, Nanjing, June 2026",
        "First-author manuscript in preparation",
      ],
      relatedMethods: [
        "Environmental data analysis",
        "Event detection",
        "XGBoost",
        "SHAP interpretation",
        "Water-budget accounting",
      ],
    },
  },
  {
    slug: "yangtze-flood-frequency",
    title: "Nonstationary Flood Frequency in the Yangtze River",
    cardSummary:
      "This study examines how flood-frequency distributions changed along the middle–lower Yangtze River from 1960 to 2022. Multi-step nonstationarity diagnostics, GAMLSS, and RF–SHAP are used to compare hydroclimatic and reservoir-related associations across four gauging stations.",
    shortSummary:
      "This study examines how flood-frequency distributions changed along the middle–lower Yangtze River from 1960 to 2022.",
    tags: ["Hydrology", "Flood Extremes", "GAMLSS", "Hydroclimate", "Time Series"],
    cardTags: ["Hydrology", "Flood Extremes", "GAMLSS", "Hydroclimate"],
    output: "Under review at Journal of Hydrology: Regional Studies",
    image: "/images/research/yangtze-flood-frequency-study-area.png",
    imageAlt:
      "Map of the middle–lower Yangtze River Basin showing four hydrological stations and the Three Gorges Dam.",
    figureCaption:
      "Study area in the middle–lower Yangtze River Basin, with hydrological stations at Yichang, Luoshan, Hankou and Datong.",
    institution: "Zhejiang A&F University, Jiyang College",
    yearLabel: "2025–2026",
    links: [],
    featured: true,
    group: "current",
    caseStudy: {
      overview:
        "This study examines how flood-frequency distributions changed along the middle–lower Yangtze River from 1960 to 2022. Multi-step nonstationarity diagnostics, GAMLSS, and RF–SHAP are used to compare hydroclimatic and reservoir-related associations across four gauging stations.",
      context:
        "Flood-frequency analysis in large regulated rivers is complicated by nonstationarity. The middle–lower Yangtze provides a long gauged record in which hydroclimatic variability and reservoir operation can both leave statistical signatures. The study is framed as an explanatory and diagnostic analysis rather than a forecasting model, and it avoids deterministic claims about reservoirs or climate modes.",
      data: "Annual flood peaks and maximum 30-day flood volumes were compiled for four main-stem stations spanning the middle–lower Yangtze. Covariate families include antecedent precipitation windows, flood-season temperature, large-scale climate indices, and a modified reservoir index.",
      dataPoints: [
        "Stations: Yichang, Luoshan, Hankou, and Datong",
        "Study period: 1960–2022",
        "Series: annual flood peaks and maximum 30-day flood volumes",
      ],
      approach:
        "A three-stage diagnosis combined persistence, trend, and change-point evidence before distributional modelling. GAMLSS was used to represent changing flood distributions, with candidate distributions selected primarily by AIC and supplemented by BIC. Model adequacy was examined using normalized randomized quantile residual diagnostics, Q–Q assessment, and worm plots. RF–SHAP provided a complementary statistical interpretation of candidate drivers.",
      findings:
        "The analysis characterises how flood-frequency distributions vary among stations and through time, and how those changes co-vary with hydroclimatic and reservoir-related indices. Results are interpreted as associations that help diagnose nonstationarity, not as causal attribution to any single driver.",
      contribution:
        "Anqi Wang contributed to the hydrologic time-series analysis, nonstationarity diagnostics, GAMLSS modelling, and interpretation of hydroclimatic and reservoir-related associations.",
      outputProse:
        "The manuscript is under review and is listed separately from published work.",
      outputPoints: [
        "Under review at Journal of Hydrology: Regional Studies",
      ],
      relatedMethods: [
        "Nonstationarity diagnostics",
        "GAMLSS",
        "Model selection (AIC/BIC)",
        "Residual diagnostics",
        "RF–SHAP",
      ],
    },
  },
  {
    slug: "ice-core-volcanic-signals",
    title: "Ice-Core Volcanic Signals and Chronology",
    cardSummary:
      "This project develops quantitative methods for identifying volcanic signals in Antarctic ice-core chemical records. Morphology-aware window features, XGBoost benchmarking, event-catalogue matching, and age-offset analysis are integrated to evaluate both event detection and chronological alignment.",
    shortSummary:
      "This project develops quantitative methods for identifying volcanic signals in Antarctic ice-core chemical records.",
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
    image: "/images/research/ice-core-volcano-hunter-workflow.png",
    imageAlt:
      "Three-panel Volcano Hunter workflow from ice-core input data through morphological features to event detection.",
    figureCaption:
      "Volcano Hunter workflow: ice-core inputs and weak supervision, morphological feature representation, and XGBoost-based event detection.",
    institution: "Shanghai Jiao Tong University",
    yearLabel: "2024–2025",
    links: [],
    featured: true,
    group: "current",
    caseStudy: {
      overview:
        "This project develops quantitative methods for identifying volcanic signals in Antarctic ice-core chemical records. Morphology-aware window features, XGBoost benchmarking, event-catalogue matching, and age-offset analysis are integrated to evaluate both event detection and chronological alignment.",
      context:
        "Volcanic sulfate horizons are widely used as chronological markers, but detection in noisy ice-core chemistry remains sensitive to threshold choice and to irregular temporal resolution. The project therefore treats detection and chronology as linked problems: candidate events must be compared with independent compilations, and mismatches can be read as age offsets rather than only as classification errors.",
      data: "The principal archive is the Antarctic EPICA Dome C (EDC) ice-core chemical record. Historical volcanic-event compilations and alternative chronologies supply weak supervision through resolution-aware temporal matching.",
      dataPoints: [
        "Antarctic EDC ice-core chemical records",
        "Established volcanic-event compilations and alternative chronologies",
      ],
      approach:
        "Sliding windows defined in data points were used to accommodate irregular resolution. Morphology-aware features, including amplitude, slope, duration, asymmetry, and skewness, were passed to an XGBoost classifier and compared with rule-based peak, MAD, BGSTD, and co-peak approaches. Evaluation considered event matches, false positives, missed events, and age offsets.",
      findings:
        "At a ±3-year matching window, the machine-learning workflow achieved F1 = 0.441 compared with F1 = 0.280 for the conventional Peaks method. The same framework is used to examine how volcanic horizons can support chronological alignment, rather than to claim a single accuracy figure for all detection settings.",
      contribution:
        "Anqi Wang contributed to chronology alignment, signal-window feature engineering, model benchmarking, error analysis, scientific visualisation, and manuscript development in an interdisciplinary collaboration.",
      outputProse:
        "A first-author manuscript is in preparation. The project is not reported here as published.",
      outputPoints: ["Manuscript in preparation"],
      relatedMethods: [
        "Time-series segmentation",
        "Morphological feature engineering",
        "XGBoost",
        "Weak supervision",
        "Chronology assessment",
      ],
    },
  },
  {
    slug: "yangtze-delta-resilience",
    title: "Ecological Resilience Across the Yangtze River Delta",
    cardSummary:
      "This 24-year study traces ecological-resilience change, catch-up dynamics, and carbon-related constraints across 27 cities in the Yangtze River Delta. Multi-source spatial data are analysed using Random Forest, SHAP, and structural equation modelling to distinguish temporal convergence from persistent spatial differences.",
    shortSummary:
      "This 24-year study traces ecological-resilience change, catch-up dynamics, and carbon-related constraints across 27 cities in the Yangtze River Delta.",
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
    image: "/images/research/yangtze-delta-ecological-resilience-2000-2023.png",
    imageAlt:
      "Multi-year maps of ecological potential, elasticity, stability and resilience across the Yangtze River Delta, 2000–2023.",
    figureCaption:
      "Spatiotemporal evolution of ecological potential, elasticity, stability and resilience across the Yangtze River Delta urban agglomeration, 2000–2023.",
    institution: "Zhejiang A&F University, Jiyang College",
    yearLabel: "2025–2026",
    links: [],
    featured: true,
    group: "current",
    caseStudy: {
      overview:
        "This 24-year study traces ecological-resilience change, catch-up dynamics, and carbon-related constraints across 27 cities in the Yangtze River Delta. Multi-source spatial data are analysed using Random Forest, SHAP, and structural equation modelling to distinguish temporal convergence from persistent spatial differences.",
      context:
        "Rapid urbanisation in the Yangtze River Delta has reshaped ecological potential, elasticity, stability, and composite resilience. The analysis is designed to separate temporal catch-up from persistent spatial structure, and to keep carbon-related constraints in view without converting spatial association into a causal story.",
      data: "The study integrates twenty-four years of multi-source spatial and environmental indicators at both city and grid levels for 27 cities in the urban agglomeration.",
      dataPoints: [
        "Study period: 2000–2023",
        "Twenty-seven cities",
        "City-level and grid-level analysis",
      ],
      approach:
        "Random Forest and SHAP were used to interpret indicator importance, while structural equation modelling summarised relationships among resilience components and carbon-related constraints. Catch-up or convergence analysis quantified how later values relate to earlier conditions.",
      findings:
        "The maps and models describe how resilience-related indicators evolved from 2000 to 2023 and how catch-up dynamics sit alongside persistent spatial differences. A reported convergence fit of approximately R² = 0.972 characterises the catch-up relationship in the analysis; it should be read as a statistical association, not as evidence of a causal mechanism.",
      contribution:
        "Anqi Wang contributed quantitative analysis, interpretation, and manuscript development to the collaborative paper now under review.",
      outputProse:
        "The manuscript is under review and is listed separately from published work.",
      outputPoints: ["Under review at Cities"],
      relatedMethods: [
        "Geospatial analysis",
        "Random Forest",
        "SHAP",
        "Structural equation modelling",
        "Convergence analysis",
      ],
    },
  },
  {
    slug: "marine-biogeochemistry",
    title: "Marine Biogeochemistry",
    cardSummary:
      "This research integrates global observations with Earth-system model outputs to examine spatial variability in ocean carbonate conditions. The work focuses on multi-source harmonisation, quality and coverage assessment, physical–biogeochemical predictors, and the construction of reproducible model-ready datasets.",
    shortSummary:
      "This research integrates global observations with Earth-system model outputs to examine spatial variability in ocean carbonate conditions.",
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
    institution: "Tsinghua-affiliated Project",
    yearLabel: "2023–2024",
    links: [],
    featured: false,
    group: "current",
    caseStudy: {
      overview:
        "This research integrates global observations with Earth-system model outputs to examine spatial variability in ocean carbonate conditions. The work focuses on multi-source harmonisation, quality and coverage assessment, physical–biogeochemical predictors, and the construction of reproducible model-ready datasets.",
      context:
        "Ocean carbonate-ion conditions vary spatially under the combined influence of circulation, biology, and air–sea exchange. Comparing those patterns across observational products and Earth-system models first requires a consistent, quality-checked data layer.",
      data: "The collaboration assembled global observational datasets and Earth-system model outputs describing carbon-cycle, physical, and biogeochemical variables with different spatial and temporal structures.",
      approach:
        "Heterogeneous variables were harmonised and screened for quality, consistency, spatial coverage, and comparability. The resulting layers were organised as reproducible machine-learning-ready datasets for ensemble analysis, cross-dataset comparison, and scientific visualisation.",
      findings:
        "The contribution is methodological and infrastructural: a documented route from heterogeneous archives to model-ready fields that can support later analysis of physical and biogeochemical controls. Independent numerical results are not claimed here beyond that data-integration role.",
      contribution:
        "This was collaborative research. Anqi Wang contributed data-integration and modelling support, including multi-source harmonisation, consistency and coverage checks, construction of reproducible model-ready datasets, and scientific visualisation.",
      outputProse:
        "The work is recorded as a research collaboration rather than as a standalone first-author paper.",
      outputPoints: ["Research collaboration, Tsinghua-affiliated project, 2023–2024"],
      relatedMethods: [
        "Multi-source data harmonisation",
        "Quality and coverage assessment",
        "Earth-system data",
        "Reproducible dataset construction",
      ],
    },
  },
  {
    slug: "seagrass-restoration",
    title: "Seagrass Restoration Modelling",
    cardSummary:
      "This MSc dissertation developed a spatially explicit cellular-automata framework to simulate seagrass restoration under contrasting nutrient and current conditions. Five-year scenarios were used to evaluate how environmental constraints produced strongly divergent recovery trajectories.",
    shortSummary:
      "This MSc dissertation developed a spatially explicit cellular-automata framework to simulate seagrass restoration under contrasting nutrient and current conditions.",
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
    institution: "Imperial College London",
    yearLabel: "2023",
    links: [],
    featured: false,
    group: "earlier",
    caseStudy: {
      overview:
        "This MSc dissertation developed a spatially explicit cellular-automata framework to simulate seagrass restoration under contrasting nutrient and current conditions. Five-year scenarios were used to evaluate how environmental constraints produced strongly divergent recovery trajectories.",
      context:
        "Seagrass restoration outcomes depend on how growth, disturbance, and environmental thresholds interact in space. The dissertation used a controlled simulation setting to compare restoration trajectories rather than to forecast a specific field site.",
      data: "The model was exercised on a regular spatial grid under defined initial-cover scenarios and contrasting nutrient and current-velocity settings. Five-year (260-week) runs were used to compare longer-term coverage trajectories among those scenarios.",
      approach:
        "A cellular-automata representation updated local seagrass state through neighbourhood rules and environmental modifiers. Scenario-based experiments compared complete-cover, absence, random, central, and clustered initial conditions, together with nutrient-level and current-velocity experiments.",
      findings:
        "The five-year experiments showed that initial configuration and environmental constraints produced strongly divergent recovery trajectories. In the dissertation’s scenario experiments, complete-cover conditions sustained the highest later coverage, while absence, clustered, and current- or nutrient-limited settings followed different paths; these outcomes are simulation results under stated assumptions, not field measurements.",
      contribution:
        "Anqi Wang designed and implemented the spatially explicit model, ran the scenario experiments, and wrote the MSc dissertation at Imperial College London.",
      outputProse:
        "The project is recorded as an MSc dissertation.",
      outputPoints: [
        "MSc dissertation, Imperial College London, 2023",
        "Dissertation title: Modelling Seagrass Growth Patterns and Identifying Influencing Factors Using Cellular Automata for Restoration Purposes",
      ],
      relatedMethods: [
        "Cellular automata",
        "Ecological modelling",
        "Scenario analysis",
        "Scientific visualisation",
      ],
    },
  },
  {
    slug: "metal-coselection",
    title: "Metal Co-selection and Antimicrobial Resistance",
    cardSummary:
      "This BSc dissertation used WHAM VII chemical-speciation modelling to investigate environmentally relevant metal concentrations associated with antimicrobial-resistance co-selection. The work connected soil chemistry, metal bioavailability, and ecological risk interpretation.",
    shortSummary:
      "This BSc dissertation used WHAM VII chemical-speciation modelling to investigate environmentally relevant metal concentrations associated with antimicrobial-resistance co-selection.",
    tags: ["Environmental Chemistry", "Speciation Modelling", "WHAM VII"],
    cardTags: ["Environmental Chemistry", "Speciation Modelling", "WHAM VII"],
    output: "BSc dissertation, University of Nottingham, 2022",
    image: null,
    imageAlt: "",
    institution: "University of Nottingham",
    yearLabel: "2022",
    links: [],
    featured: false,
    group: "earlier",
    caseStudy: {
      overview:
        "This BSc dissertation used WHAM VII chemical-speciation modelling to investigate environmentally relevant metal concentrations associated with antimicrobial-resistance co-selection. The work connected soil chemistry, metal bioavailability, and ecological risk interpretation.",
      context:
        "Metals can co-select for antimicrobial resistance, but total metal concentrations are a limited guide to environmental relevance. Speciation modelling is one way to relate bulk chemistry to the fractions more likely to interact with microbial communities.",
      data: "The dissertation used chemical-speciation modelling rather than a new field campaign, drawing on WHAM VII to represent metal binding under stated environmental conditions.",
      approach:
        "WHAM VII was used to estimate metal speciation and to identify environmentally relevant concentrations associated with antimicrobial-resistance co-selection. The interpretation linked modelled speciation to soil chemistry and ecological-risk language used in the dissertation.",
      findings:
        "The study produced a modelled estimate of minimum metal concentrations associated with co-selection under the WHAM VII setup. Those values are modelling results under stated assumptions, not measured field thresholds.",
      contribution:
        "Anqi Wang carried out the speciation modelling and wrote the BSc dissertation at the University of Nottingham.",
      outputProse: "The project is recorded as a BSc dissertation.",
      outputPoints: [
        "BSc dissertation, University of Nottingham, 2022",
        "Dissertation title: A General Model of Minimum Metal Concentration Co-Selection for Antimicrobial Resistance Optimised Using WHAM VII",
      ],
      relatedMethods: [
        "Chemical speciation modelling",
        "WHAM VII",
        "Environmental chemistry",
      ],
    },
  },
  {
    slug: "ocean-current-dependence",
    title: "Ocean-Current Dependence Modelling",
    cardSummary:
      "This research internship applied R-vine copula methods to characterise nonlinear and multivariate dependence in ocean-current time series. The project explored dependence structures that are not adequately represented by simple pairwise correlation.",
    shortSummary:
      "This research internship applied R-vine copula methods to characterise nonlinear and multivariate dependence in ocean-current time series.",
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
    institution: "Tsinghua University",
    yearLabel: "2022",
    links: [],
    featured: false,
    group: "earlier",
    caseStudy: {
      overview:
        "This research internship applied R-vine copula methods to characterise nonlinear and multivariate dependence in ocean-current time series. The project explored dependence structures that are not adequately represented by simple pairwise correlation.",
      context:
        "Ocean-current records can exhibit joint extremes and nonlinear dependence that a single correlation coefficient does not capture. Vine copulas provide a structured way to build multivariate dependence from pair-copulas.",
      data: "The internship used processed ocean-current time series assembled for dependence analysis.",
      approach:
        "After data organisation and dependence diagnostics, R-vine copula models were fitted in R and examined through scientific visualisation of the resulting dependence structure.",
      findings:
        "The fitted models described nonlinear and multivariate dependence beyond pairwise correlation. The internship is reported as a methods-and-characterisation study rather than as a claim about a specific circulation regime.",
      contribution:
        "Anqi Wang processed and integrated the time series, implemented the R-vine models, and produced the associated visualisations during a research internship at Tsinghua University.",
      outputProse: "The project is recorded as a research internship.",
      outputPoints: ["Research internship, Tsinghua University, March–June 2022"],
      relatedMethods: [
        "R-vine copulas",
        "Multivariate dependence",
        "Time-series analysis",
      ],
    },
  },
  {
    slug: "pacific-pollutant-transport",
    title: "Pacific Pollutant Transport",
    cardSummary:
      "This mathematical-modelling project examined the long-term transport and diffusion of discharged wastewater in the Pacific Ocean under simplified circulation assumptions. The work later formed the basis of a Springer book chapter published in 2023.",
    shortSummary:
      "This mathematical-modelling project examined the long-term transport and diffusion of discharged wastewater in the Pacific Ocean under simplified circulation assumptions.",
    tags: ["Ocean Circulation", "Diffusion Modelling", "Pollutant Transport"],
    cardTags: ["Ocean Circulation", "Diffusion Modelling"],
    output: "Published book chapter, Springer, 2023",
    image: null,
    imageAlt: "",
    institution: "New York University",
    yearLabel: "2021",
    links: [],
    featured: false,
    group: "earlier",
    caseStudy: {
      overview:
        "This mathematical-modelling project examined the long-term transport and diffusion of discharged wastewater in the Pacific Ocean under simplified circulation assumptions. The work later formed the basis of a Springer book chapter published in 2023.",
      context:
        "Long-term spread of discharged wastewater in the open ocean is often discussed with limited observational constraint. A simplified circulation-and-diffusion model can illustrate spatial spread under stated assumptions without pretending to be a full ocean-general-circulation simulation.",
      data: "The internship used a simplified representation of Pacific circulation and diffusion rather than a new observational campaign.",
      approach:
        "Simplified ocean-circulation and diffusion models were used to examine long-term pollutant transport and spatial spread. The subsequent book chapter reported that modelling exercise.",
      findings:
        "The model described long-term spatial spread under simplified assumptions. Those patterns should be read as the outcome of the stated circulation and diffusion setup, not as an operational forecast.",
      contribution:
        "Anqi Wang carried out the modelling during a New York University research internship and later published the work as a sole-author book chapter.",
      outputProse: "The internship resulted in a published book chapter.",
      outputPoints: [
        "Research internship, New York University, May–July 2021",
        "Wang, A. (2023). The long-term diffusion of dumped wastewater from Japan in the Pacific Ocean. In Environmental Pollution Governance and Ecological Remediation Technology (pp. 261–269). Springer.",
      ],
      relatedMethods: [
        "Ocean circulation modelling",
        "Diffusion modelling",
        "Pollutant transport",
      ],
    },
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
