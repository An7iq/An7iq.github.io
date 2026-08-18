export const site = {
  name: "Anqi Wang",
  title: "Anqi Wang | Environmental & Earth-System Data Science",
  description:
    "Quantitative environmental researcher working across hydrology, ecology, marine and Earth-system science, and environmental machine learning.",
  url: "https://an7iq.github.io",
  role: "Environmental Data Scientist",
  subtitle: "AI for Environmental & Earth Sciences",
  intro:
    "I work at the intersection of environmental science, Earth-system data, and computational methods.",
  positioning:
    "Using data, models, and computation to understand environmental systems across scales.",
  email: "an7i.www@gmail.com",
  cvPath: "/Anqi_Wang_CV.pdf",
  portrait: {
    src: "/images/anqi-wang-portrait.jpg",
    alt: "Anqi Wang standing outside an Imperial College London building, holding bound academic documents.",
    width: 768,
    height: 1024,
  },
  domains: [
    "environmental and Earth-system science",
    "hydrology and hydroclimate",
    "ecological modelling",
    "marine and aquatic systems",
    "agroecosystems",
    "palaeoclimate",
    "environmental machine learning",
  ],
  social: {
    github: "https://github.com/An7iq",
    linkedin: "https://www.linkedin.com/in/anqi-wang-0000a4267/",
    orcid: "https://orcid.org/0009-0008-4142-5861",
  },
} as const;

export const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#research", label: "Research" },
  { href: "/#publications", label: "Publications" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/cv/", label: "CV" },
] as const;
