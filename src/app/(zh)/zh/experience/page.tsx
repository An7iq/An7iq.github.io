import type { Metadata } from "next";
import { localeMetadata } from "@/lib/metadata";
import { ui } from "@/i18n/ui";
import { ExperienceView } from "@/views/experience-view";

export const metadata: Metadata = localeMetadata({
  locale: "zh",
  title: ui.experienceKicker.zh,
  description: ui.experienceDescription.zh,
  path: "/experience/",
});

export default function ExperiencePage() {
  return <ExperienceView locale="zh" />;
}
