import type { Metadata } from "next";
import { localeMetadata } from "@/lib/metadata";
import { ui } from "@/i18n/ui";
import { ExperienceView } from "@/views/experience-view";

export const metadata: Metadata = localeMetadata({
  locale: "en",
  title: ui.experienceKicker.en,
  description: ui.experienceDescription.en,
  path: "/experience/",
});

export default function ExperiencePage() {
  return <ExperienceView locale="en" />;
}
