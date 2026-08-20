import type { ResearchOverlay } from "@/lib/localize-research";

export const researchZh: Record<string, ResearchOverlay> = {
  "non-rainfall-water": {
    title: "农田非降水水分",
    cardSummary:
      "基于多站点蒸渗仪、气象和作物生育期观测，识别不同农田中的夜间非降水水分事件；进一步利用 XGBoost 与 SHAP 分析其环境驱动因素及其对农田水分核算的影响。",
    featuredSummary:
      "基于多站点蒸渗仪、气象和作物生育期观测，识别不同农田中的夜间非降水水分事件；进一步利用 XGBoost 与 SHAP 分析其环境驱动因素及其对农田水分核算的影响。",
    shortSummary:
      "基于多站点蒸渗仪、气象和作物生育期观测，识别不同农田中的夜间非降水水分事件。",
    output: "WCSS 2026 口头报告｜论文准备中",
    imageAlt: "通用蒸渗仪示意图与中国多站点农田观测位置图。",
    figureCaption:
      "非降水水分研究使用的蒸渗仪水量平衡观测装置及中国多站点观测网络。",
    institution: "浙江农林大学暨阳学院",
    caseStudy: {
      context:
        "非降水水分（包括露水及相关夜间质量增加）常被排除在农田水分收支之外，但在缺乏降雨时仍可能补充地表湿度。本研究关注这些小通量何时足以影响农田水分输入核算，并将结果作为观测关联报告。",
      data: "分析基于多站点蒸渗仪记录，并结合气象、灌溉、降水与作物生育期信息。经质量控制后，整理后的序列为跨作物与地表类型的事件识别提供一致基础。",
      dataPoints: [
        "观测站点超过 19 个，时段为 2004–2016 年",
        "十三类作物或地表类型",
        "初始记录：28,746",
        "质量控制后保留记录：23,954",
      ],
      approach:
        "以 0.02 mm 检测阈值和无降雨条件筛选夜间质量增加，识别候选非降水水分事件日。随后用处理类别不平衡的 XGBoost 分类器将事件发生与环境协变量联系起来，并按环境过程族汇总 SHAP 值，以解释相对关联而非断言因果关系。",
      findings:
        "整理后的记录表明，非降水水分事件并不常见，但并非可以忽略；忽略它们会改变水分输入核算。模拟关联指向温度与湿度条件为主要控制因子，裸地的风速敏感性更强。上述格局均作为观测关联报告。",
      findingsPoints: [
        "非降水水分事件发生率约为 4.07%，对应 975 个事件日",
        "检测阈值为 0.02 mm",
        "在相应评估中，忽略非降水水分产生的水分核算偏差中位数约为 16.9%",
      ],
      contribution:
        "王安奇负责质量控制、事件识别及 XGBoost/SHAP 工作流开发，参与结果解释与图件制作，并正在准备第一作者稿件。",
      outputProse: "该工作已作口头报告，并正在整理为第一作者期刊稿件。",
      outputPoints: [
        "口头报告，第23届世界土壤学大会，南京，2026年6月",
        "第一作者稿件准备中",
      ],
      relatedMethods: [
        "环境数据分析",
        "事件识别",
        "XGBoost",
        "SHAP 解释",
        "水分收支核算",
      ],
    },
  },
  "yangtze-flood-frequency": {
    title: "长江中下游非平稳洪水频率",
    cardSummary:
      "基于长江中下游四个水文站 1960–2022 年的洪水记录，结合非平稳性诊断、GAMLSS 与 RF–SHAP，比较不同河段洪水分布变化及其与水文气候和水库调节指标的统计关联。",
    featuredSummary:
      "基于长江中下游四个水文站 1960–2022 年的洪水记录，结合非平稳性诊断、GAMLSS 与 RF–SHAP，比较不同河段洪水分布变化及其与水文气候和水库调节指标的统计关联。",
    shortSummary:
      "基于长江中下游四个水文站 1960–2022 年洪水记录，比较不同河段洪水分布变化及其与水文气候和水库调节指标的统计关联。",
    output: "投稿至 Journal of Hydrology: Regional Studies｜审稿中",
    imageAlt: "长江中下游流域图，标示四个水文站与三峡大坝。",
    figureCaption:
      "长江中下游研究区，水文站包括宜昌、螺山、汉口与大通。",
    institution: "浙江农林大学暨阳学院",
    caseStudy: {
      context:
        "大型受控河流的洪水频率分析常受非平稳性影响。长江中下游具有较长实测记录，水文气候变率和水库运行都可能在统计上留下印记。本研究通过诊断和解释，比较洪水分布如何随河段和时间变化。",
      data: "整理了长江中下游四个干流水文站的年洪峰与最大 30 日洪量。协变量包括前期降水窗口、汛期温度、大尺度气候指数以及修正水库指数。",
      dataPoints: [
        "站点：宜昌、螺山、汉口、大通",
        "研究时段：1960–2022 年",
        "序列：年洪峰与最大 30 日洪量",
      ],
      approach:
        "三阶段诊断结合持续性、趋势与变点证据，再进行分布建模。GAMLSS 用于表征变化中的洪水分布，候选分布主要以 AIC 选择，并以 BIC 补充。模型充分性通过标准化随机分位数残差、Q–Q 评估与虫图检验。RF–SHAP 为候选驱动因子提供互补的统计解释。",
      findings:
        "分析比较了洪水频率分布在站点之间及随时间的变化，以及这些变化如何与水文气候和水库相关指数共变。结果按统计关联报告。",
      contribution:
        "王安奇参与水文时间序列分析、非平稳诊断、GAMLSS 建模，以及水文气候与水库相关关联的解释。",
      outputProse: "稿件正在审稿。",
      outputPoints: ["审稿中，期刊：Journal of Hydrology: Regional Studies"],
      relatedMethods: [
        "非平稳诊断",
        "GAMLSS",
        "模型选择（AIC/BIC）",
        "残差诊断",
        "RF–SHAP",
      ],
    },
  },
  "ice-core-volcanic-signals": {
    title: "冰芯火山信号识别与年代分析",
    cardSummary:
      "整合南极冰芯化学记录、火山事件目录与多套年代框架，构建形态窗口特征和 XGBoost 检测流程，并通过事件匹配与年龄偏差分析评估火山信号识别及其年代学应用。",
    featuredSummary:
      "整合南极冰芯化学记录、火山事件目录与多套年代框架，构建形态窗口特征和 XGBoost 检测流程，并通过事件匹配与年龄偏差分析评估火山信号识别及其年代学应用。",
    shortSummary:
      "整合南极冰芯化学记录、火山事件目录与多套年代框架，评估火山信号识别及其年代学应用。",
    output: "论文准备中",
    imageAlt: "Volcano Hunter 三面板流程：由冰芯输入数据到形态特征再到事件检测。",
    figureCaption:
      "Volcano Hunter 流程：冰芯输入与弱监督、形态特征表征，以及基于 XGBoost 的事件检测。",
    institution: "上海交通大学",
    caseStudy: {
      context:
        "火山硫酸盐层常被用作年代标记，但在噪声较大的冰芯化学记录中，检测结果仍受阈值选择和不规则时间分辨率影响。因此，本项目将检测与年代学联系起来：候选事件需与独立汇编比对，错配可理解为年龄偏差，而不只是分类错误。",
      data: "主要资料为南极 EPICA Dome C（EDC）冰芯化学记录。历史火山事件汇编与替代年代标尺通过考虑分辨率的时间匹配提供弱监督。",
      dataPoints: [
        "南极 EDC 冰芯化学记录",
        "既有火山事件汇编与替代年代标尺",
      ],
      approach:
        "为适应不规则分辨率，滑动窗口以数据点定义。将振幅、斜率、持续时间、不对称性与偏度等形态特征输入 XGBoost 分类器，并与基于规则的峰值、MAD、BGSTD 及共峰方法比较。评估同时考虑事件匹配、假阳性、漏检与年龄偏差。",
      findings:
        "在 ±3 年匹配窗口下，机器学习流程的 F1 = 0.441，常规 Peaks 方法为 F1 = 0.280。同一框架也用于考察火山层如何支持年代对齐。",
      contribution:
        "王安奇在跨学科合作中参与年代对齐、信号窗口特征工程、模型基准比较、误差分析、科学可视化与稿件撰写。",
      outputProse: "第一作者稿件准备中。",
      outputPoints: ["稿件准备中"],
      relatedMethods: [
        "时间序列分段",
        "形态特征工程",
        "XGBoost",
        "弱监督",
        "年代评估",
      ],
    },
  },
  "yangtze-delta-resilience": {
    title: "长三角城市生态韧性",
    cardSummary:
      "基于 2000–2023 年 27 个城市的多源空间数据，分析长三角生态韧性的时空演变、追赶过程与碳承载约束，并利用 Random Forest、SHAP 与结构方程模型解释城市间差异。",
    featuredSummary:
      "基于 2000–2023 年 27 个城市的多源空间数据，分析长三角生态韧性的时空演变、追赶过程与碳承载约束，并利用 Random Forest、SHAP 与结构方程模型解释城市间差异。",
    shortSummary:
      "基于 2000–2023 年 27 个城市的多源空间数据，分析长三角生态韧性的时空演变、追赶过程与碳承载约束。",
    output: "投稿至 Cities｜审稿中",
    imageAlt: "2000–2023 年长三角生态潜力、弹性、稳定性与韧性多年地图。",
    figureCaption:
      "2000–2023 年长三角城市群生态潜力、弹性、稳定性与韧性的时空演变。",
    institution: "浙江农林大学暨阳学院",
    caseStudy: {
      context:
        "长三角快速城市化改变了生态潜力、弹性、稳定性与综合韧性。分析试图区分时间上的追赶与持续的空间差异，并把碳相关约束纳入比较。",
      data: "研究整合城市群 27 个城市连续 24 年的多源空间与环境指标，覆盖城市尺度与网格尺度。",
      dataPoints: [
        "研究时段：2000–2023 年",
        "27 个城市",
        "城市尺度与网格尺度分析",
      ],
      approach:
        "Random Forest 与 SHAP 用于解释指标重要性，结构方程模型概括韧性组分与碳相关约束之间的关系。追赶或收敛分析量化后期状态与前期条件之间的关系。",
      findings:
        "地图与模型描述了 2000–2023 年韧性相关指标的演变，以及追赶过程如何与持续的空间差异并存。分析中报告的收敛拟合约为 R² = 0.972，按统计关联理解。",
      contribution:
        "王安奇为目前审稿中的合作论文贡献了定量分析、结果解释与稿件撰写。",
      outputProse: "稿件正在审稿。",
      outputPoints: ["审稿中，期刊：Cities"],
      relatedMethods: [
        "地理空间分析",
        "Random Forest",
        "SHAP",
        "结构方程模型",
        "收敛分析",
      ],
    },
  },
  "marine-biogeochemistry": {
    title: "海洋碳酸根离子数据整合",
    cardSummary:
      "这项合作研究整合全球观测与地球系统模式输出，考察海洋碳酸根离子条件的时空变化。工作包括统一物理与生物地球化学预测变量、检查一致性与空间覆盖、构建可用于模型分析的数据集，并支持机器学习分析。",
    shortSummary:
      "这项合作研究整合全球观测与地球系统模式输出，考察海洋碳酸根离子条件的时空变化。",
    output: "合作研究",
    institution: "清华大学相关合作项目",
    yearLabel: "2023年11月–2024年3月",
    caseStudy: {
      context:
        "该项合作开展于 2023 年 11 月至 2024 年 3 月，关注如何把全球海洋观测记录与地球系统模式输出结合起来，用于研究海洋碳酸根离子变化。",
      data: "合作汇集了描述与碳酸根离子条件相关的物理和生物地球化学变量的观测产品与地球系统模式场。这些资料在空间覆盖、时间结构和变量定义上并不一致。",
      approach:
        "跨来源统一物理与生物地球化学变量，并检查数据一致性与空间覆盖。随后将结果整理为可用于机器学习分析的数据集。",
      approachTitle: "数据整合",
      findings:
        "工作重点在于建立从异构观测与模式档案到可分析数据的流程。",
      findingsTitle: "工作定位",
      contribution:
        "王安奇负责跨异构观测与模式数据集统一环境预测变量，开展一致性与覆盖检查，准备可复现的模型就绪数据，并参与环境关系的机器学习分析。",
      outputProse: "该工作为清华大学相关合作研究。",
      outputPoints: [
        "清华大学相关合作项目",
        "2023年11月–2024年3月",
        "合作研究",
      ],
      relatedMethods: [
        "海洋碳酸盐化学",
        "地球系统数据",
        "数据同化与统一",
        "机器学习",
      ],
    },
  },
  "seagrass-restoration": {
    title: "海草修复的空间模拟",
    supervisor: "Emma Ransome 副教授",
    coSupervisor: "Yves Plancherel 副教授",
    cardSummary:
      "本研究构建二维元胞自动机模型，比较不同初始种植格局、养分水平和水流速度下的海草生长与修复情景，分析环境条件和空间配置对修复结果的影响。项目重点是探索不同参数组合下的空间演化过程，而不是对某一具体修复地点进行预测。",
    shortSummary:
      "本研究构建二维元胞自动机模型，比较不同初始种植格局、养分水平和水流速度下的海草生长与修复情景。",
    output: "硕士学位论文，2023",
    yearLabel: "2023",
    caseStudy: {
      context:
        "海草修复不仅取决于总种植量，也取决于初始种植的空间格局、养分条件、水动力胁迫、局部邻域相互作用以及生长与损失过程。本研究比较不同参数组合下的空间演化过程，而不是对某一具体修复地点进行预测。\n\n项目于 2023 年 4 月至 9 月在 Imperial College London 完成，属于 MSc in Computational Methods in Ecology and Evolution。导师：Emma Ransome 副教授。共同导师：Yves Plancherel 副教授。",
      approachTitle: "模型构建",
      approach:
        "学位论文使用 Python 3.9.12 的面向对象编程，发展了二维空间显式元胞自动机模型。每个网格单元表示局部海草状态，并通过邻域规则以及耦合生长、氮、磷动力学中的环境修正进行更新。一个演化步对应一周。参数取自文献平均值，并可通过用户输入脚本覆盖默认值。\n\n实现了五种初始空间配置：完全覆盖（CCS），所有单元初始占用；空缺（AbS），网格初始为空；随机分布（RIS）；中心种植（CGS）；以及规则间隔的簇状种植（ClGS）。实验同时变化养分水平与流速。养分与流速实验使用合理环境范围内的模拟数据，而非单一野外站点实测。",
      extraSections: [
        {
          title: "情景实验",
          text: "核心比较在对应 260 个周时间步的五年情景上运行模型，此前先用一年（52 周）实验观察空间格局与生活史周转。情景比较评估最终空间覆盖、覆盖时间轨迹、生长频率、初始种植配置差异，以及对养分和流速条件的响应。学位论文用 ANOVA 检验养分水平与流速是否显著影响模拟生长状态，并报告显著概率与 F 统计量。",
        },
      ],
      findingsTitle: "结果",
      findings:
        "这些是元胞自动机框架假设下的模拟情景结果，而非直接野外测量。在模拟情景中，覆盖度变化很大，总体范围约为 5.7% 至 85.6%。这两个极值对应的具体情景在已提取的论文文本中未标注，因此在此报告为模拟情景的总体范围，而非具名种植配置。\n\n初始空间配置强烈影响随后的修复轨迹。在五年覆盖实验中，空缺初始化（AbS）迅速上升并达到最高后期覆盖，接近 60%。完全覆盖（CCS）维持近 50% 的高覆盖。中心簇状种植（CGS）在前 15 周由约 42% 降至 33%，均匀簇状种植（ClGS）由约 37% 降至 34%；二者后期稳定在约 40%，其中 CGS 约在第 150 周达到稳定覆盖。随机初始化（RIS）仅从与 CCS 相近的起始水平小幅上升。一年空间实验中，更封闭或簇状的种植通常比连接较差的初始格局更有利于维持或扩展，但五年覆盖轨迹显示簇状起始并未保持最高后期覆盖。\n\n养分条件与流速显著影响模拟生长结果。中等养分水平产生比低养分（约 71% 稀疏覆盖）或高养分（75%）更密的模拟覆盖（超过 95% 的像元）。流速实验呈现类似的中间最适：0.5 m/s 时覆盖稀疏（10% 像元），在模拟平均流 1.5 m/s 附近更密。萌发轨迹与覆盖不同：后期覆盖最高的 AbS 与 CCS 在早期脉冲后维持萌发率最低，而中心簇状种植保留更强的后期萌发潜力。",
      figures: [
        {
          after: "模型构建",
          src: "/images/research/seagrass-ca-workflow.png",
          alt: "海草元胞自动机模型流程图，将生长、氮和磷计算与每周单元状态转换耦合。",
          caption:
            "学位论文中的元胞自动机流程：小时与日尺度的生长–养分计算进入每周邻域规则，更新二维海底网格上的萌发、生长与死亡状态。",
        },
        {
          after: "情景实验",
          src: "/images/research/seagrass-initial-configurations.png",
          alt: "五种海草种植配置在第 0、26 和 51 周的热图。",
          caption:
            "五种初始种植配置——空缺、完全覆盖、中心种植、簇状种植与随机分布——分别显示第 0、26 和 51 周。颜色表示模型网格上累积的海草生活史阶段。",
        },
        {
          after: "结果",
          src: "/images/research/seagrass-five-year-coverage-trajectories.png",
          alt: "五种种植情景在 260 周内的模拟覆盖与萌发折线图。",
          caption:
            "五种种植配置五年（260 周）模拟覆盖与萌发轨迹。这些是模型输出，而非野外观测。",
        },
        {
          after: "结果",
          src: "/images/research/seagrass-nutrient-level-comparisons.png",
          alt: "低、中、高养分水平下的三幅模拟海草网格。",
          caption:
            "100 × 100 网格上的养分水平比较。中等养分产生最密的模拟覆盖；低、高养分更稀疏。格局为模拟情景输出。",
        },
      ],
      contribution:
        "王安奇设计模拟实验，用面向对象编程实现空间显式元胞自动机模型，测试不同初始种植与环境情景，分析覆盖与生长结果，进行统计比较，完成科学可视化，并撰写硕士学位论文。",
      outputProse: "硕士学位论文，2023。",
      outputPoints: [
        "MSc in Computational Methods in Ecology and Evolution",
        "Imperial College London",
        "项目时段：2023年4月–9月",
        "硕士学位论文，2023",
        "正式题目：Modelling Seagrass Growth Patterns and Identifying the Impact Factor using Cellular Automata for Restoration Purposes",
        "导师：Emma Ransome 副教授",
        "共同导师：Yves Plancherel 副教授",
      ],
      relatedMethods: [
        "Cellular automata",
        "面向对象编程",
        "生态模拟",
        "情景分析",
        "ANOVA",
        "科学可视化",
      ],
    },
  },
  "metal-coselection": {
    title: "重金属共选择与抗微生物耐药",
    supervisor: "Dov Stekel 教授",
    cardSummary:
      "本研究将最低金属浓度共选择模型与土壤中重金属的吸附、解吸和化学形态联系起来，并结合 WHAM VII 的模拟结果，分析金属生物有效性对抗微生物耐药共选择阈值的影响。",
    shortSummary:
      "本研究结合 WHAM VII 模拟结果，分析土壤重金属化学形态与抗微生物耐药共选择阈值之间的关系。",
    output: "本科学位论文，2022",
    caseStudy: {
      context:
        "金属可以共选择抗微生物耐药，但总量对微生物群落实际接触的部分只能提供有限信息。本科学位论文关注土壤化学与形态如何改变与共选择相关的浓度解释。导师：Dov Stekel 教授。",
      data: "学位论文采用化学形态模拟，而非新的野外观测。WHAM VII 在给定土壤化学假设下提供模拟金属浓度与形态，包括土壤有机质与溶解有机质。",
      approachTitle: "方法",
      approach:
        "研究将一般最低金属浓度共选择模型与土壤重金属吸附–解吸行为联系起来。WHAM VII 输出表征金属浓度与化学形态，并纳入土壤有机质与溶解有机质，从而使环境生物有效性进入阈值解释。计算处理、分析与可视化在 R 和 Python 中完成。\n\n仅用金属总量可能无法代表微生物群落化学上可利用的部分。因此使用 WHAM VII，将环境化学与形态同抗微生物耐药共选择相关浓度估计联系起来。",
      findingsTitle: "主要结果",
      findings:
        "学位论文在 WHAM VII 设置下得到模拟最低共选择浓度。这些估计依赖于形态模型中的既定假设，包括土壤化学、有机质与生物有效性的表征方式，因此应理解为建模结果，而不是实测野外阈值。",
      contribution:
        "王安奇发展并应用建模流程，处理 WHAM VII 输出，考察土壤化学与金属形态如何影响共选择估计，完成分析与可视化，并撰写本科学位论文。",
      outputProse: "该项目记录为 2022 年完成的本科学位论文。",
      outputPoints: [
        "BSc (Hons) Environmental Science",
        "University of Nottingham",
        "学位论文完成于 2022 年",
        "正式题目：A General Model of Minimum Metal Concentration Co-Selection for Antimicrobial Resistance Optimised Using WHAM VII",
        "导师：Dov Stekel 教授",
      ],
      relatedMethods: [
        "化学形态模拟",
        "WHAM VII",
        "环境化学",
        "生物有效性解释",
      ],
    },
  },
  "ocean-current-dependence": {
    title: "海流相依性建模",
    cardSummary:
      "这次科研实习应用 R-vine copula 方法刻画海流时间序列中的非线性多元相依。项目探索简单成对相关无法充分表征的相依结构。",
    shortSummary:
      "这次科研实习应用 R-vine copula 方法刻画海流时间序列中的非线性多元相依。",
    output: "科研实习，清华大学，2022",
    institution: "清华大学",
    caseStudy: {
      context:
        "海流记录可呈现联合极值与非线性相依，单一相关系数无法捕捉这些结构。Vine copula 提供由 pair-copula 构建多元相依的结构化途径。",
      data: "实习使用为相依分析整理后的海流时间序列。",
      approach:
        "在数据整理与相依诊断之后，在 R 中拟合 R-vine copula 模型，并通过科学可视化考察所得相依结构。",
      findings:
        "拟合模型描述了超越成对相关的非线性多元相依。该实习作为方法与表征研究记录，而非对某一具体环流状态的断言。",
      contribution:
        "王安奇在清华大学科研实习期间处理并整合时间序列，实现 R-vine 模型，并完成相关可视化。",
      outputProse: "该项目记录为科研实习。",
      outputPoints: ["科研实习，清华大学，2022年3月–6月"],
      relatedMethods: ["R-vine copulas", "多元相依", "时间序列分析"],
    },
  },
  "pacific-pollutant-transport": {
    title: "太平洋污染物输运",
    cardSummary:
      "这项数学建模项目在简化环流假设下考察太平洋排放废水的长期输运与扩散。后续工作构成 2023 年 Springer 书章的基础。",
    shortSummary:
      "这项数学建模项目在简化环流假设下考察太平洋排放废水的长期输运与扩散。",
    output: "已发表书章，Springer，2023",
    institution: "纽约大学",
    caseStudy: {
      context:
        "开放大洋中排放废水的长期扩散常在观测约束有限的情况下讨论。简化的环流–扩散模型可以在既定假设下说明空间扩散，而不假装成为完整的海洋环流模拟。",
      data: "实习使用太平洋环流与扩散的简化表征，而非新的观测计划。",
      approach:
        "用简化海洋环流与扩散模型考察污染物长期输运与空间扩散。随后的书章报告了这一建模练习。",
      findings:
        "模型在简化假设下描述了长期空间扩散。这些格局应理解为既定环流与扩散设置的结果，而非业务预报。",
      contribution:
        "王安奇在纽约大学科研实习期间完成建模，并随后以独立作者书章发表。",
      outputProse: "该实习形成已发表书章。",
      outputPoints: [
        "科研实习，纽约大学，2021年5月–7月",
        "Wang, A. (2023). The long-term diffusion of dumped wastewater from Japan in the Pacific Ocean. In Environmental Pollution Governance and Ecological Remediation Technology (pp. 261–269). Springer.",
      ],
      relatedMethods: ["海洋环流模拟", "扩散模拟", "污染物输运"],
    },
  },
};
