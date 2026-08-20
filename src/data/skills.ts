export type SkillGroup = {
  title: string;
  note: string;
  items: string[];
};

export const homeMethods = [
  "Environmental Data Analysis",
  "Statistical Modelling",
  "Machine Learning",
  "Time-Series Analysis",
  "Geospatial Analysis",
  "Data–Model Integration",
];

export const homeTools =
  "Python · R · XGBoost · Random Forest · SHAP · GAMLSS · xarray/NetCDF · GIS/GEE";

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming & Scientific Computing",
    note: "Used for data processing, analysis, and reproducible research workflows.",
    items: [
      "Python",
      "R",
      "MATLAB",
      "SQL",
      "C",
      "LaTeX",
      "NumPy",
      "pandas",
      "xarray",
      "NetCDF",
    ],
  },
  {
    title: "Machine Learning & Statistics",
    note: "Applied in environmental modelling, interpretation, and model evaluation.",
    items: [
      "XGBoost",
      "Random Forest",
      "Neural Networks",
      "GNNs",
      "Transformers",
      "SHAP",
      "GAMLSS",
      "Bayesian Statistics",
      "Time-series Analysis",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    title: "Environmental & Geospatial",
    note: "Working competence with observational, gridded, and geospatial datasets.",
    items: [
      "ArcGIS",
      "QGIS",
      "Google Earth Engine",
      "Earth-system model outputs",
      "Remote sensing",
      "Multi-source environmental data",
      "Quality control",
    ],
  },
  {
    title: "Environmental Modelling",
    note: "Methods used across ecological, spatial, and data–model studies.",
    items: [
      "Ecological modelling",
      "Spatial modelling",
      "Cellular automata",
      "Multivariate dependence modelling",
      "Data–model integration",
      "Scientific visualisation",
    ],
  },
];

export const languages = [
  "Mandarin Chinese (Native)",
  "English (Fluent; IELTS 7.5)",
  "Japanese (JLPT N2)",
  "German (A2)",
];
