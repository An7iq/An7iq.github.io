import type { Metadata } from "next";
import { localeMetadata } from "@/lib/metadata";
import { ui } from "@/i18n/ui";
import { ResearchIndexView } from "@/views/research-index-view";

export const metadata: Metadata = localeMetadata({
  locale: "zh",
  title: ui.researchKicker.zh,
  description: ui.researchDescription.zh,
  path: "/research/",
});

export default function ResearchPage() {
  return <ResearchIndexView locale="zh" />;
}
