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
  advisors?: Localized<string[]>;
  summary: Localized;
  homeOrder?: number;
  homeRole?: Localized;
  homeOrg?: Localized;
  homeDateLabel?: Localized;
  sortOrder?: number;
};

export const experience: ExperienceItem[] = [
  {
    id: "zafu-ra",
    kind: "research",
    start: "May 2025",
    end: "Present",
    dateLabel: {
      en: "May 2025–Present",
      zh: "2025 年 5 月至今",
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
    advisors: {
      en: ["Yuchuan Fan"],
      zh: ["范豫川"],
    },
    summary: {
      en: "Conduct data processing, statistical analysis, model development, and scientific interpretation for projects in smart agriculture, hydrology, ecological resilience, non-rainfall water, and groundwater protection. Contribute to research proposals, manuscript writing, figure preparation, journal submissions and revisions, and student research support.",
      zh: "围绕智慧农业、水文过程、生态韧性、非降水水分和地下水保护开展数据分析与模型研究；参与项目申报、论文撰写、图表制作、投稿返修及学生科研指导。",
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
      zh: "2024 年 3 月–2025 年 5 月",
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
    advisors: {
      en: ["Lei Zhou", "Xiaoying Gan"],
      zh: ["周磊", "甘小莺"],
    },
    summary: {
      en: "Integrated ice-core chemical records, volcanic-event catalogues, and alternative chronologies; developed signal-window features and XGBoost detection workflows; and contributed to sample construction, model comparison, error analysis, and age-offset evaluation.",
      zh: "整合冰芯化学记录、火山事件目录与不同年代框架，构建信号窗口特征和 XGBoost 检测流程，并开展样本构建、模型比较、误差分析和年代偏差评估。",
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
      zh: "2023 年 11 月–2024 年 3 月",
    },
    role: {
      en: "Research Collaboration — Ocean Carbonate-Ion Data Integration",
      zh: "科研合作：海洋碳酸根数据整合",
    },
    org: {
      en: "Tsinghua-affiliated Project",
      zh: "清华相关合作项目",
    },
    location: { en: "China", zh: "中国" },
    summary: {
      en: "Integrated global ocean observations with Earth-system model outputs, harmonised physical and biogeochemical variables, assessed data consistency and spatial coverage, and prepared model-ready datasets for machine-learning analysis.",
      zh: "整合全球海洋观测记录与地球系统模式输出，统一物理和生物地球化学变量，检查数据一致性与空间覆盖，并构建可用于机器学习分析的数据集。",
    },
    homeOrder: 3,
  },
  {
    id: "zafu-teaching",
    kind: "teaching",
    start: "2025",
    end: "Present",
    dateLabel: {
      en: "2025–Present",
      zh: "2025 年至今",
    },
    role: {
      en: "Undergraduate Teaching and Academic Service",
      zh: "本科教学与学术服务",
    },
    org: {
      en: "Zhejiang A&F University, College of Jiyang",
      zh: "浙江农林大学暨阳学院",
    },
    location: { en: "China", zh: "中国" },
    summary: {
      en: "Contribute to undergraduate teaching and academic service, including instruction for Professional English for Environmental Engineering, course assessment, invigilation, participation in undergraduate thesis defences, and support for student research design and academic writing.",
      zh: "参与本科教学与学术服务，包括《环境工程专业英语》课程讲授、课程考核与监考、本科毕业论文答辩评审，以及学生研究设计和学术写作指导。",
    },
    sortOrder: 1,
  },
  {
    id: "hankai-biology",
    kind: "teaching",
    start: "November 2023",
    end: "February 2024",
    dateLabel: {
      en: "November 2023–February 2024",
      zh: "2023 年 11 月–2024 年 2 月",
    },
    role: {
      en: "International Biology Teacher",
      zh: "国际课程生物教师",
    },
    org: {
      en: "International Division, Shenzhen Hankai Mathematical High School",
      zh: "深圳市汉开数理高中国际部",
    },
    location: { en: "China", zh: "中国" },
    summary: {
      en: "Taught A-Level, IGCSE, and AP Biology. Prepared lessons and teaching materials, delivered classroom instruction, designed exercises and assessments, and provided differentiated academic support.",
      zh: "讲授 A-Level、IGCSE 和 AP Biology，负责课程准备、课堂教学、练习与考核设计，并根据学生的学习基础开展分层辅导。",
    },
    sortOrder: 2,
  },
  {
    id: "online-tutor",
    kind: "teaching",
    start: "October 2021",
    end: "",
    dateLabel: {
      en: "From October 2021",
      zh: "自 2021 年 10 月起",
    },
    role: {
      en: "Online Tutor",
      zh: "在线辅导教师",
    },
    org: {
      en: "Independent tutoring",
      zh: "一对一在线辅导",
    },
    location: { en: "Online", zh: "线上" },
    summary: {
      en: "Provided individual online tutoring in A-Level Mathematics and Biology, IELTS, Japanese, DSE English, and EJU Geography, adapting lesson content to different curricula and student goals.",
      zh: "开展一对一线上辅导，涉及 A-Level 数学与生物、IELTS、日语、DSE 英语及日本留学考试地理，并根据不同课程体系和学生目标调整教学内容。",
    },
    sortOrder: 3,
  },
  {
    id: "zhiwei-teacher",
    kind: "teaching",
    start: "January 2020",
    end: "August 2021",
    dateLabel: {
      en: "January 2020–August 2021",
      zh: "2020 年 1 月–2021 年 8 月",
    },
    role: {
      en: "A-Level Mathematics and Computing Teacher",
      zh: "A-Level 数学与计算机课程教师",
    },
    org: {
      en: "Zhiwei International School",
      zh: "智维国际学校",
    },
    location: { en: "China", zh: "中国" },
    summary: {
      en: "Taught A-Level Mathematics, Further Mathematics, Biology and Computer Science, including lesson preparation, classroom instruction, exercise design, and student support.",
      zh: "讲授 A-Level 数学、进阶数学、生物与计算机科学，负责备课、课堂教学、练习设计及学生辅导。",
    },
    sortOrder: 4,
  },
  {
    id: "thesis-defence",
    kind: "service",
    start: "2025",
    end: "Present",
    dateLabel: {
      en: "2025–Present",
      zh: "2025 年至今",
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
      zh: "2025 年至今",
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
      zh: "2022 年 3 月–6 月",
    },
    homeDateLabel: {
      en: "March–June 2022",
      zh: "2022 年 3 月–6 月",
    },
    role: {
      en: "Research Intern",
      zh: "科研实习",
    },
    homeRole: {
      en: "Research Internship — Ocean-Current Dependence Modelling",
      zh: "科研实习：海流依赖结构建模",
    },
    org: {
      en: "Tsinghua University",
      zh: "清华大学",
    },
    location: { en: "China", zh: "中国" },
    summary: {
      en: "Characterised nonlinear multivariate dependence in ocean-current time series using R-vine copula models.",
      zh: "利用 R-vine copula 模型分析海流时间序列中的非线性多元依赖结构。",
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
      zh: "2021 年 5 月–7 月",
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
export const teachingExperience = experience
  .filter((item) => item.kind === "teaching")
  .sort((a, b) => (a.sortOrder ?? 99) - (b.sortOrder ?? 99));
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
