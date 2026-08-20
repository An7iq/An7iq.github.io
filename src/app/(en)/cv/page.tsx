import type { Metadata } from "next";
import { localeMetadata } from "@/lib/metadata";
import { ui } from "@/i18n/ui";
import { CvView } from "@/views/cv-view";

export const metadata: Metadata = localeMetadata({
  locale: "en",
  title: ui.cvTitle.en,
  description: ui.cvPageDescription.en,
  path: "/cv/",
});

export default function CvPage() {
  return <CvView locale="en" />;
}
