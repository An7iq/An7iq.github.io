import type { Locale, Localized } from "@/lib/i18n";

export type SkillGroup = {
  title: Localized;
  note: Localized;
  items: string[];
};

export const homeMethods: Localized<string[]> = {
  en: [
    "Environmental Data Analysis",
    "Statistical Modelling",
    "Machine Learning",
    "Time-Series Analysis",
    "Geospatial Analysis",
    "Data–Model Integration",
  ],
  zh: [
    "环境数据分析",
    "统计建模",
    "机器学习",
    "时间序列分析",
    "地理空间分析",
    "数据–模式整合",
  ],
};

export const homeTools =
  "Python · R · XGBoost · Random Forest · SHAP · GAMLSS · xarray/NetCDF · GIS/GEE";

export const homeSkillPills = [
  "Python",
  "R",
  "SQL",
  "Machine Learning",
  "Statistical Modelling",
  "XGBoost",
  "Random Forest",
  "SHAP",
  "GAMLSS",
  "Time-Series Analysis",
  "Earth-System Data",
  "Hydrology",
  "Remote Sensing",
  "GIS",
  "Google Earth Engine",
  "NetCDF",
  "xarray",
  "pandas",
  "Scientific Visualisation",
  "LaTeX",
  "Git",
];

export const skillGroups: SkillGroup[] = [
  {
    title: {
      en: "Programming & Scientific Computing",
      zh: "编程与科学计算",
    },
    note: {
      en: "Used for data processing, analysis, and reproducible research workflows.",
      zh: "用于数据处理、分析与可复现的研究流程。",
    },
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
    title: {
      en: "Machine Learning & Statistics",
      zh: "机器学习与统计学",
    },
    note: {
      en: "Applied in environmental modelling, interpretation, and model evaluation.",
      zh: "用于环境建模、结果解释与模型评估。",
    },
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
    title: {
      en: "Environmental & Geospatial",
      zh: "环境与地理空间",
    },
    note: {
      en: "Working competence with observational, gridded, and geospatial datasets.",
      zh: "具备处理观测数据、网格数据与地理空间数据的工作能力。",
    },
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
    title: {
      en: "Environmental Modelling",
      zh: "环境模拟",
    },
    note: {
      en: "Methods used across ecological, spatial, and data–model studies.",
      zh: "用于生态、空间及数据–模式研究。",
    },
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

export const languages: Localized<string[]> = {
  en: [
    "Mandarin Chinese (Native)",
    "English (Fluent; IELTS 7.5)",
    "Japanese (JLPT N2)",
    "German (A2)",
  ],
  zh: [
    "中文（母语）",
    "英语（流利；IELTS 7.5）",
    "日语（JLPT N2）",
    "德语（A2）",
  ],
};

export function skillGroupCopy(group: SkillGroup, locale: Locale) {
  return {
    title: group.title[locale],
    note: group.note[locale],
  };
}
