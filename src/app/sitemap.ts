import type { MetadataRoute } from "next";
import { researchProjects } from "@/data/research";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = researchProjects.map((project) => ({
    url: `${site.url}/research/${project.slug}/`,
  }));

  return [
    { url: site.url },
    { url: `${site.url}/about/` },
    { url: `${site.url}/research/` },
    { url: `${site.url}/publications/` },
    { url: `${site.url}/experience/` },
    { url: `${site.url}/education/` },
    { url: `${site.url}/methods/` },
    { url: `${site.url}/cv/` },
    ...projectPages,
  ];
}
