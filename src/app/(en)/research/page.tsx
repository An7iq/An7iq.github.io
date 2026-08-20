import type { Metadata } from "next";
import { localeMetadata } from "@/lib/metadata";
import { ui } from "@/i18n/ui";
import { ResearchIndexView } from "@/views/research-index-view";

export const metadata: Metadata = localeMetadata({
  locale: "en",
  title: ui.researchKicker.en,
  description: ui.researchDescription.en,
  path: "/research/",
});

export default function ResearchPage() {
  return <ResearchIndexView locale="en" />;
}
