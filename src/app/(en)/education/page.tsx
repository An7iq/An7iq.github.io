import type { Metadata } from "next";
import { localeMetadata } from "@/lib/metadata";
import { ui } from "@/i18n/ui";
import { EducationView } from "@/views/education-view";

export const metadata: Metadata = localeMetadata({
  locale: "en",
  title: ui.educationKicker.en,
  description: ui.educationDescription.en,
  path: "/education/",
});

export default function EducationPage() {
  return <EducationView locale="en" />;
}
