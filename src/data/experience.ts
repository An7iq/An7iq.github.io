import type { Locale, Localized } from "@/lib/i18n";

export type ExperienceKind = "research" | "teaching" | "service" | "internship";

export type ExperienceItem = {
  id: string;
  kind: ExperienceKind;
  start: string;
  end: string;
  dateLabel: Localized;
  role: Localized;
  org: Localized;
  location: Localized;
  advisors?: string[];
  summary: Localized;
  collaborative?: boolean;
  homeOrder?: number;
  homeRole?: Localized;
  homeDateLabel?: Localized;
};

export const experience: ExperienceItem[] = [
  {
    id: "zafu-ra",
    kind: "research",
    start: "May 2025",
    end: "Present",
    dateLabel: {
      en: "May 2025–Present",
      zh: "2025年5月至今",
    },
    role: {
      en: "Research Assistant",
      zh: "科研助理",
    },
    org: {
      en: "Zhejiang A&F University, College of Jiyang",
      zh: "浙江农林大学暨阳学院",
    },
    location: { en: "China", zh: "中国" },
    advisors: ["Yuchuan Fan"],
    summary: {
      en: "Conduct data processing, statistical analysis, model development, and scientific interpretation for projects in smart agriculture, hydrology, ecological resilience, non-rainfall water, and groundwater protection. Contribute to Methods and Results writing, research proposals, journal submissions, revisions, figure preparation, and student research support.",
      zh: "围绕智慧农业、水文气候、生态韧性、非降水水分及地下水保护等方向开展数据整理、统计分析、模型构建与结果解释；参与研究项目申报、论文方法与结果撰写、期刊投稿返修、图表制作以及学生科研与学术写作指导。",
    },
    homeOrder: 1,
  },
  {
    id: "sjtu-ra",
    kind: "research",
    start: "March 2024",
    end: "May 2025",
    dateLabel: {
      en: "March 2024–May 2025",
      zh: "2024年3月–2025年5月",
    },
    role: {
      en: "Research Assistant",
      zh: "科研助理",
    },
    org: {
      en: "Shanghai Jiao Tong University",
      zh: "上海交通大学",
    },
    location: { en: "China", zh: "中国" },
    advisors: ["Lei Zhou", "Xiaoying Gan"],
    summary: {
      en: "Conducted interdisciplinary marine and Earth-system research by integrating ice-core chemical records with volcanic-event catalogues. Developed signal-window features and XGBoost detection workflows, and contributed to chronology matching, sample construction, model evaluation, benchmarking, error analysis, and iterative workflow development.",
      zh: "参与海洋与地球系统科学交叉研究，整合冰芯化学记录与火山事件库，开发信号窗口特征和 XGBoost 事件检测流程，并推进年代匹配、样本构建、模型评估、基准比较、误差分析及流程迭代。",
    },
    homeOrder: 2,
  },
  {
    id: "tsinghua-carbonate",
    kind: "research",
    start: "November 2023",
    end: "March 2024",
    dateLabel: {
      en: "November 2023–March 2024",
      zh: "2023年11月–2024年3月",
    },
    role: {
      en: "Research Collaboration — Ocean Carbonate-Ion Data Integration",
      zh: "科研合作——海洋碳酸根数据整合",
    },
    org: {
      en: "Tsinghua-affiliated Project",
      zh: "清华大学相关合作项目",
    },
    location: { en: "China", zh: "中国" },
    summary: {
      en: "Integrated global observations with Earth-system model outputs to examine ocean carbonate-ion variability. Harmonised physical and biogeochemical predictors, conducted consistency and spatial-coverage checks, prepared model-ready datasets, and supported machine-learning analysis and scientific visualisation.",
      zh: "整合全球观测记录与地球系统模式输出，研究海洋碳酸根离子的时空变化；统一物理与生物地球化学预测变量，开展一致性和空间覆盖检查，构建可用于机器学习分析的数据集并完成科学可视化。",
    },
    collaborative: true,
    homeOrder: 3,
  },
  {
    id: "hankai-biology",
    kind: "teaching",
    start: "November 2023",
    end: "February 2024",
    dateLabel: {
      en: "November 2023–February 2024",
      zh: "2023年11月–2024年2月",
    },
    role: {
      en: "International Biology Teacher",
      zh: "国际生物学教师",
    },
    org: {
      en: "深圳市汉开数理高中融合部",
      zh: "深圳市汉开数理高中融合部",
    },
    location: { en: "China", zh: "中国" },
    summary: {
      en: "Taught A-Level, IGCSE, and AP Biology. Prepared lessons and instructional materials, delivered classroom teaching, designed exercises and assessments, and provided differentiated academic support for students with different learning needs.",
      zh: "承担 A-Level、IGCSE 和 AP Biology 课程教学，负责备课、课堂讲授、练习与考核设计，并根据学生的学习基础和需求开展分层辅导。",
    },
  },
  {
    id: "zafu-teaching",
    kind: "teaching",
    start: "2025",
    end: "Present",
    dateLabel: {
      en: "2025–Present",
      zh: "2025年至今",
    },
    role: {
      en: "Undergraduate Teaching and Course Support",
      zh: "本科教学与课程支持",
    },
    org: {
      en: "Zhejiang A&F University, College of Jiyang",
      zh: "浙江农林大学暨阳学院",
    },
    location: { en: "China", zh: "中国" },
    summary: {
      en: "Contributed to undergraduate teaching and course support, including instruction for Professional English for Environmental Engineering, student learning support, course assessment activities, and invigilation.",
      zh: "参与本科课程教学与课程支持，包括《环境工程专业英语》课程讲授、学生学习辅导、课程考核及监考工作。",
    },
  },
  {
    id: "thesis-defence",
    kind: "service",
    start: "2025",
    end: "Present",
    dateLabel: {
      en: "2025–Present",
      zh: "2025年至今",
    },
    role: {
      en: "Undergraduate Thesis Defence",
      zh: "本科毕业论文答辩",
    },
    org: {
      en: "Zhejiang A&F University, College of Jiyang",
      zh: "浙江农林大学暨阳学院",
    },
    location: { en: "China", zh: "中国" },
    summary: {
      en: "Served as a panel member for undergraduate thesis defences, reviewing student presentations and participating in academic evaluation and discussion.",
      zh: "参与本科毕业论文答辩评审，听取学生汇报并参与学术评价与讨论。",
    },
  },
  {
    id: "student-research-support",
    kind: "service",
    start: "2025",
    end: "Present",
    dateLabel: {
      en: "2025–Present",
      zh: "2025年至今",
    },
    role: {
      en: "Student Research and Academic-Writing Support",
      zh: "学生科研与学术写作支持",
    },
    org: {
      en: "Zhejiang A&F University, College of Jiyang",
      zh: "浙江农林大学暨阳学院",
    },
    location: { en: "China", zh: "中国" },
    summary: {
      en: "Supported students with research design, analytical reasoning, academic writing, and the presentation of scientific results.",
      zh: "指导和协助学生开展研究设计、分析思路梳理、学术写作及科研结果表达。",
    },
  },
  {
    id: "tsinghua-intern",
    kind: "internship",
    start: "March 2022",
    end: "June 2022",
    dateLabel: {
      en: "March 2022–June 2022",
      zh: "2022年3月–2022年6月",
    },
    homeDateLabel: {
      en: "2022",
      zh: "2022",
    },
    role: {
      en: "Research Intern",
      zh: "科研实习",
    },
    homeRole: {
      en: "Research Internship — Ocean-Current Dependence Modelling",
      zh: "科研实习——海流依赖结构建模",
    },
    org: {
      en: "Tsinghua University",
      zh: "清华大学",
    },
    location: { en: "China", zh: "中国" },
    summary: {
      en: "Characterised nonlinear multivariate dependence in ocean-current time series using R-vine copula models.",
      zh: "利用 R-vine copula 模型刻画海流时间序列中的非线性多元相依结构。",
    },
    homeOrder: 4,
  },
  {
    id: "nyu-intern",
    kind: "internship",
    start: "May 2021",
    end: "July 2021",
    dateLabel: {
      en: "May 2021–July 2021",
      zh: "2021年5月–2021年7月",
    },
    role: {
      en: "Research Intern",
      zh: "科研实习",
    },
    org: {
      en: "New York University",
      zh: "纽约大学",
    },
    location: { en: "Online", zh: "线上" },
    summary: {
      en: "Modelled long-term pollutant transport and spatial spread in the Pacific Ocean.",
      zh: "模拟太平洋污染物的长期输运与空间扩散。",
    },
  },
];

export const homeTimeline = experience
  .filter((item) => item.homeOrder)
  .sort((a, b) => (a.homeOrder ?? 0) - (b.homeOrder ?? 0));

export const researchExperience = experience.filter((item) => item.kind === "research");
export const teachingExperience = experience.filter((item) => item.kind === "teaching");
export const academicService = experience.filter((item) => item.kind === "service");
export const earlierInternships = experience.filter((item) => item.kind === "internship");

export function experienceCopy(item: ExperienceItem, locale: Locale) {
  return {
    dateLabel: item.dateLabel[locale],
    role: item.role[locale],
    org: item.org[locale],
    location: item.location[locale],
    summary: item.summary[locale],
  };
}
