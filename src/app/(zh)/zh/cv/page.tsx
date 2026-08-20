import type { Metadata } from "next";
import { localeMetadata } from "@/lib/metadata";
import { ui } from "@/i18n/ui";
import { CvView } from "@/views/cv-view";

export const metadata: Metadata = localeMetadata({
  locale: "zh",
  title: ui.cvTitle.zh,
  description: ui.cvPageDescription.zh,
  path: "/cv/",
});

export default function CvPage() {
  return <CvView locale="zh" />;
}
