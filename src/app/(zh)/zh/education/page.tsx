import type { Metadata } from "next";
import { localeMetadata } from "@/lib/metadata";
import { ui } from "@/i18n/ui";
import { EducationView } from "@/views/education-view";

export const metadata: Metadata = localeMetadata({
  locale: "zh",
  title: ui.educationKicker.zh,
  description: ui.educationDescription.zh,
  path: "/education/",
});

export default function EducationPage() {
  return <EducationView locale="zh" />;
}
