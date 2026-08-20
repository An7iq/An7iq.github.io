import type { MetadataRoute } from "next";
import { researchProjects } from "@/data/research";
import { site } from "@/data/site";

export const dynamic = "force-static";

const pages = [
  "/",
  "/about/",
  "/research/",
  "/publications/",
  "/experience/",
  "/education/",
  "/methods/",
  "/cv/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = researchProjects.flatMap((project) => {
    const en = `${site.url}/research/${project.slug}/`;
    const zh = `${site.url}/zh/research/${project.slug}/`;
    return [
      {
        url: en,
        alternates: { languages: { en, "zh-CN": zh, "x-default": en } },
      },
      {
        url: zh,
        alternates: { languages: { en, "zh-CN": zh, "x-default": en } },
      },
    ];
  });

  const core = pages.flatMap((path) => {
    const en = path === "/" ? `${site.url}/` : `${site.url}${path}`;
    const zh = path === "/" ? `${site.url}/zh/` : `${site.url}/zh${path}`;
    return [
      {
        url: en,
        alternates: { languages: { en, "zh-CN": zh, "x-default": en } },
      },
      {
        url: zh,
        alternates: { languages: { en, "zh-CN": zh, "x-default": en } },
      },
    ];
  });

  return [...core, ...projectPages];
}
