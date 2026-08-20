import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, researchProjects } from "@/data/research";
import { localeMetadata } from "@/lib/metadata";
import { localizeProject } from "@/lib/localize-research";
import { ProjectView } from "@/views/project-view";

export const dynamicParams = false;

export async function generateStaticParams() {
  return researchProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return localeMetadata({
    locale: "en",
    title: project.title,
    description: project.shortSummary,
    path: `/research/${project.slug}/`,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <ProjectView project={localizeProject(project, "en")} locale="en" />;
}
