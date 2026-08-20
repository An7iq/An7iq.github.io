export type ResearchLink = {
  label: string;
  href: string;
};

export type ResearchGroup = "current" | "dissertation" | "collaborative";

export type CaseStudyFigure = {
  src: string;
  alt: string;
  caption: string;
  after: string;
};

export type CaseStudySection = {
  title: string;
  text: string;
  points?: string[];
};

export type CaseStudy = {
  overview?: string;
  skipOverview?: boolean;
  context: string;
  data?: string;
  dataPoints?: string[];
  approach: string;
  approachTitle?: string;
  extraSections?: CaseStudySection[];
  findings: string;
  findingsTitle?: string;
  findingsPoints?: string[];
  figures?: CaseStudyFigure[];
  contribution: string;
  outputProse: string;
  outputPoints?: string[];
  relatedMethods: string[];
  academicProfile?: {
    href: string;
    account: string;
    label: string;
  };
};

export type ResearchProject = {
  slug: string;
  title: string;
  cardSummary: string;
  featuredSummary?: string;
  shortSummary: string;
  tags: string[];
  cardTags: string[];
  output: string;
  image: string | null;
  imageAlt: string;
  figureCaption?: string;
  institution?: string;
  yearLabel?: string;
  degreeLabel?: string;
  supervisor?: string;
  coSupervisor?: string;
  supervisorLabel?: string;
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
    featuredSummary:
      "Multi-site lysimeter and meteorological observations reveal when overlooked nighttime water inputs occur across contrasting croplands. XGBoost and SHAP identify their environmental controls and quantify consequences for agroecosystem water accounting.",
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
      skipOverview: true,
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
        "The work has been presented orally and is being prepared as a first-author journal manuscript.",
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
    featuredSummary:
      "Sixty-three years of records from four Yangtze River stations are analysed using nonstationarity diagnostics, GAMLSS, and RF–SHAP. The study compares changing flood distributions with hydroclimatic and reservoir-related associations.",
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
      skipOverview: true,
      overview:
        "This study examines how flood-frequency distributions changed along the middle–lower Yangtze River from 1960 to 2022. Multi-step nonstationarity diagnostics, GAMLSS, and RF–SHAP are used to compare hydroclimatic and reservoir-related associations across four gauging stations.",
      context:
        "Flood-frequency analysis in large regulated rivers is complicated by nonstationarity. The middle–lower Yangtze provides a long gauged record in which hydroclimatic variability and reservoir operation can both leave statistical signatures. This study uses diagnostic and explanatory analysis to compare how flood distributions change across reaches and over time.",
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
        "The manuscript is under review.",
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
    featuredSummary:
      "Morphology-aware features and XGBoost are used to detect volcanic signals in Antarctic ice-core chemistry. Event-catalogue matching and age-offset analysis connect signal detection with palaeoclimate chronology.",
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
      skipOverview: true,
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
        "A first-author manuscript is in preparation.",
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
    featuredSummary:
      "Multi-source data trace ecological-resilience change and carbon constraints across 27 cities from 2000 to 2023. Random Forest, SHAP, and structural equation modelling examine spatial differences and catch-up dynamics.",
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
      skipOverview: true,
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
        "The manuscript is under review.",
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
    title: "Ocean Carbonate-Ion Data Integration",
    cardSummary:
      "This collaborative project integrated global observations with Earth-system model outputs to examine spatial and temporal variability in ocean carbonate-ion conditions. The work involved harmonising physical and biogeochemical predictors, checking consistency and spatial coverage, constructing model-ready datasets, and supporting machine-learning analysis.",
    shortSummary:
      "This collaborative project integrated global observations with Earth-system model outputs to examine spatial and temporal variability in ocean carbonate-ion conditions.",
    tags: [
      "Ocean Carbonate Chemistry",
      "Earth-System Data",
      "Data Harmonisation",
      "Machine Learning",
    ],
    cardTags: [
      "Ocean Carbonate Chemistry",
      "Earth-System Data",
      "Data Harmonisation",
      "Machine Learning",
    ],
    output: "Collaborative research",
    image: null,
    imageAlt: "",
    institution: "Tsinghua-affiliated Project",
    yearLabel: "November 2023–March 2024",
    links: [],
    featured: false,
    group: "collaborative",
    caseStudy: {
      skipOverview: true,
      context:
        "This Tsinghua-affiliated collaboration ran from November 2023 to March 2024. It focused on global ocean carbonate-ion variability using observational records and Earth-system model outputs.",
      data: "The collaboration assembled heterogeneous observational products and Earth-system model fields describing physical and biogeochemical predictors relevant to carbonate-ion conditions, including datasets with different spatial coverage, temporal structure, and variable definitions.",
      approach:
        "Physical and biogeochemical predictors were harmonised across sources, then screened for consistency and spatial coverage. The resulting layers were organised as reproducible, model-ready datasets to support subsequent machine-learning analysis of environmental relationships.",
      approachTitle: "Data integration",
      findings:
        "The contribution is methodological: a documented route from heterogeneous observational and model archives to analysis-ready fields.",
      findingsTitle: "Role of the work",
      contribution:
        "Anqi Wang harmonised environmental predictors across heterogeneous observational and model datasets, carried out consistency and coverage checks, prepared reproducible model-ready data, and contributed to machine-learning analysis of environmental relationships.",
      outputProse:
        "The work is a Tsinghua-affiliated collaboration.",
      outputPoints: [
        "Tsinghua-affiliated Project",
        "November 2023–March 2024",
        "Collaborative research",
      ],
      relatedMethods: [
        "Ocean carbonate chemistry",
        "Earth-system data",
        "Data harmonisation",
        "Machine learning",
      ],
    },
  },
  {
    slug: "seagrass-restoration",
    title: "Seagrass Restoration Modelling",
    cardSummary:
      "This MSc dissertation developed a two-dimensional cellular-automata model to compare seagrass restoration scenarios under contrasting initial planting arrangements, nutrient levels, and current velocities. The study is a spatial simulation, not a forecast for one real restoration site.",
    shortSummary:
      "This MSc dissertation developed a spatially explicit cellular-automata model to compare seagrass restoration scenarios.",
    tags: [
      "Ecological Modelling",
      "Cellular Automata",
      "Restoration",
      "Marine Systems",
    ],
    cardTags: ["Ecological Modelling", "Cellular Automata", "Restoration"],
    output: "MSc dissertation, 2023",
    image: null,
    imageAlt: "",
    institution: "Imperial College London",
    yearLabel: "2023",
    degreeLabel: "MSc in Computational Methods in Ecology and Evolution",
    supervisor: "Dr Emma Ransome (Associate Professor)",
    coSupervisor: "Dr Yves Plancherel (Associate Professor)",
    links: [
      {
        label: "View academic GitHub",
        href: "https://github.com/AnqiW222",
      },
    ],
    featured: false,
    group: "dissertation",
    caseStudy: {
      skipOverview: true,
      context:
        "Seagrass restoration depends not only on total planting effort but also on the spatial arrangement of initial planting, nutrient conditions, hydrodynamic stress, local neighbourhood interactions, growth, and loss. This MSc dissertation compared restoration scenarios under controlled assumptions, focusing on spatial evolution across parameter combinations rather than prediction for one real restoration site.\n\nThe project was completed at Imperial College London between April and September 2023 for the MSc in Computational Methods in Ecology and Evolution. Supervisor: Dr Emma Ransome (Associate Professor). Co-supervisor: Dr Yves Plancherel (Associate Professor).",
      approachTitle: "Model development",
      approach:
        "The dissertation developed a two-dimensional, spatially explicit cellular-automata model using object-oriented programming in Python 3.9.12. Each grid cell represented local seagrass state and was updated through neighbourhood rules together with environmental modifiers drawn from coupled growth, nitrogen, and phosphorus kinetics. One evolution step corresponded to one week. Parameters were taken from literature averages, with a user-input script available to override defaults.\n\nFive initial spatial configurations were implemented: complete cover (CCS), in which every cell began occupied; absence (AbS), in which the grid began empty; random distribution (RIS); central planting (CGS); and clustered planting (ClGS), with regularly spaced clusters. The experiments also varied nutrient levels and current velocity. Nutrient and current-velocity experiments used mock data selected within reasonable environmental ranges rather than measurements from a single field site.",
      extraSections: [
        {
          title: "Scenario experiments",
          text: "The core comparison ran the model over five-year scenarios corresponding to 260 weekly time steps, after one-year (52-week) experiments used to inspect spatial pattern and life-cycle turnover. Scenario comparisons evaluated final spatial coverage, temporal coverage trajectories, growth frequency, differences among initial planting configurations, and responses to nutrient and current-velocity conditions. ANOVA was used to test whether nutrient levels and current velocity significantly affected simulated growth state, with significance probability values and F statistics reported in the dissertation.",
        },
      ],
      findingsTitle: "Results",
      findings:
        "These are modelled scenario results under the assumptions of the cellular-automata framework, not direct field measurements. Across the modelled scenarios, simulated coverage varied substantially, with an overall range of approximately 5.7% to 85.6%. The exact scenario-to-percentage mapping for those two extremes is not labelled in the extracted dissertation text, so they are reported here as the overall range across modelled scenarios rather than as named planting configurations.\n\nInitial spatial configuration strongly influenced the resulting restoration trajectory. In the five-year coverage experiments, the absence initialisation (AbS) rose rapidly and reached the highest later-stage coverage, nearly 60%. Complete cover (CCS) sustained high coverage at nearly 50%. Centred clustered planting (CGS) declined from about 42% to 33% in the first 15 weeks, and evenly clustered planting (ClGS) declined from about 37% to 34%; both later stabilised near 40%, with CGS reaching a stable coverage around week 150. Random initiation (RIS) showed only a modest increase from a similar starting level to CCS. More enclosed or clustered planting configurations generally produced more favourable persistence or expansion in the one-year spatial experiments than poorly connected initial patterns, although the five-year coverage trajectories show that clustered starts did not retain the highest later cover.\n\nNutrient conditions and current velocity significantly influenced simulated growth outcomes. Medium nutrient levels produced denser simulated cover (more than 95% of pixels) than low (~71% sparse cover) or high (75%) nutrient settings. Current-velocity experiments showed a similar intermediate optimum, with sparse cover at 0.5 m/s (10% of pixels) and denser growth around the mocked mean flow of 1.5 m/s. Germination trajectories diverged from coverage: AbS and CCS, which attained the highest later cover, showed the lowest sustained germinating rates after an early pulse, whereas centred clustered planting retained stronger later germinating potential.",
      figures: [
        {
          after: "Model development",
          src: "/images/research/seagrass-ca-workflow.png",
          alt: "Flow chart of the seagrass cellular-automata model, coupling growth, nitrogen, and phosphorus calculations with weekly cell-state transitions.",
          caption:
            "Cellular-automata workflow from the dissertation: hourly and daily growth–nutrient calculations feed weekly neighbourhood rules that update germinating, growth, and death states on a two-dimensional seabed grid.",
        },
        {
          after: "Scenario experiments",
          src: "/images/research/seagrass-initial-configurations.png",
          alt: "Heatmaps of five seagrass planting configurations at weeks 0, 26, and 51.",
          caption:
            "Five initial planting configurations—absence, complete cover, central planting, clustered planting, and random distribution—shown at weeks 0, 26, and 51. Colour indicates accumulated seagrass life-cycle stages on the model grid.",
        },
        {
          after: "Results",
          src: "/images/research/seagrass-five-year-coverage-trajectories.png",
          alt: "Line plots of simulated seagrass coverage and germination over 260 weeks for five planting scenarios.",
          caption:
            "Five-year (260-week) trajectories of simulated coverage and germination for the five planting configurations. These are model outputs, not field observations.",
        },
        {
          after: "Results",
          src: "/images/research/seagrass-nutrient-level-comparisons.png",
          alt: "Three simulated seagrass grids comparing low, medium, and high nutrient levels.",
          caption:
            "Nutrient-level comparison on a 100 × 100 grid. Medium nutrients produced the densest simulated cover; low and high nutrient settings were sparser. The patterns are mocked scenario outputs.",
        },
      ],
      contribution:
        "Anqi Wang designed the simulation experiments, implemented the spatially explicit cellular-automata model using object-oriented programming, tested alternative initial planting and environmental scenarios, analysed coverage and growth outcomes, conducted statistical comparisons, produced the scientific visualisations, and wrote the MSc dissertation.",
      outputProse:
        "MSc dissertation, 2023.",
      outputPoints: [
        "MSc in Computational Methods in Ecology and Evolution",
        "Imperial College London",
        "Project period: April–September 2023",
        "MSc dissertation, 2023",
        "Official title: Modelling Seagrass Growth Patterns and Identifying the Impact Factor using Cellular Automata for Restoration Purposes",
        "Supervisor: Dr Emma Ransome (Associate Professor)",
        "Co-supervisor: Dr Yves Plancherel (Associate Professor)",
      ],
      relatedMethods: [
        "Cellular automata",
        "Object-oriented programming",
        "Ecological modelling",
        "Scenario analysis",
        "ANOVA",
        "Scientific visualisation",
      ],
      academicProfile: {
        href: "https://github.com/AnqiW222",
        account: "AnqiW222",
        label: "Academic code profile · AnqiW222",
      },
    },
  },
  {
    slug: "metal-coselection",
    title: "Metal Co-selection and Antimicrobial Resistance",
    cardSummary:
      "This BSc dissertation connected a general minimum metal concentration co-selection model with soil heavy-metal adsorption and desorption behaviour. WHAM VII outputs were used to represent metal concentration and chemical speciation, including soil and dissolved organic matter, so that bioavailability could inform threshold interpretation.",
    shortSummary:
      "This BSc dissertation used WHAM VII speciation modelling to connect soil chemistry with metal concentrations associated with antimicrobial-resistance co-selection.",
    tags: ["Environmental Chemistry", "Speciation Modelling", "WHAM VII"],
    cardTags: ["Environmental Chemistry", "Speciation Modelling", "WHAM VII"],
    output: "BSc dissertation, 2022",
    image: null,
    imageAlt: "",
    institution: "University of Nottingham",
    yearLabel: "2022",
    degreeLabel: "BSc (Hons) Environmental Science",
    supervisor: "Prof. Dov Stekel",
    links: [],
    featured: false,
    group: "dissertation",
    caseStudy: {
      skipOverview: true,
      context:
        "Metals can co-select for antimicrobial resistance, but bulk totals are a limited guide to what microbial communities actually encounter. This BSc dissertation asked how soil chemistry and speciation change the interpretation of concentrations associated with co-selection. Supervisor: Prof. Dov Stekel.",
      data: "The dissertation used chemical-speciation modelling rather than a new field campaign. WHAM VII provided modelled metal concentration and speciation under stated soil-chemistry assumptions, including soil organic matter and dissolved organic matter.",
      approachTitle: "Methods",
      approach:
        "The study connected a general minimum metal concentration co-selection model with soil heavy-metal adsorption and desorption behaviour. WHAM VII outputs represented metal concentration and chemical speciation, with soil organic matter and dissolved organic matter included so that environmental bioavailability could enter threshold interpretation. Computational processing, analysis, and visualisation were carried out in R and Python.\n\nTotal metal concentration alone may not represent the fraction of a metal that is chemically available to microbial communities. WHAM VII was therefore used to connect environmental chemistry and speciation with estimates of concentrations associated with antimicrobial-resistance co-selection.",
      findingsTitle: "Findings",
      findings:
        "The dissertation produced modelled minimum co-selection concentrations under the WHAM VII setup. Those estimates depend on the stated assumptions in the speciation model, including how soil chemistry, organic matter, and bioavailability were represented, and should be read as modelled results rather than measured field thresholds.",
      contribution:
        "Anqi Wang developed and applied the modelling workflow, processed WHAM VII outputs, examined how soil chemistry and metal speciation affected co-selection estimates, produced the analyses and visualisations, and wrote the BSc dissertation.",
      outputProse: "The project is recorded as a BSc dissertation completed in 2022.",
      outputPoints: [
        "BSc (Hons) Environmental Science",
        "University of Nottingham",
        "Dissertation completed in 2022",
        "Official title: A General Model of Minimum Metal Concentration Co-Selection for Antimicrobial Resistance Optimised Using WHAM VII",
        "Supervisor: Prof. Dov Stekel",
      ],
      relatedMethods: [
        "Chemical speciation modelling",
        "WHAM VII",
        "Environmental chemistry",
        "Bioavailability interpretation",
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
    supervisor: "Dr Pengfei Ma",
    supervisorLabel: "Research mentor",
    links: [],
    featured: false,
    group: "collaborative",
    caseStudy: {
      skipOverview: true,
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
      outputPoints: [
        "Research internship, Tsinghua University, March–June 2022",
        "Research mentor: Dr Pengfei Ma",
      ],
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
    supervisor: "Prof. David Holland",
    supervisorLabel: "Academic mentor",
    links: [],
    featured: false,
    group: "collaborative",
    caseStudy: {
      skipOverview: true,
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
        "Academic mentor: Prof. David Holland",
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
export const dissertationProjects = researchProjects.filter(
  (project) => project.group === "dissertation",
);
export const collaborativeProjects = researchProjects.filter(
  (project) => project.group === "collaborative",
);

export function getProject(slug: string) {
  return researchProjects.find((project) => project.slug === slug);
}
