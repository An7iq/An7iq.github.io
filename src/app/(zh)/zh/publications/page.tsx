import type { Metadata } from "next";
import { localeMetadata } from "@/lib/metadata";
import { ui } from "@/i18n/ui";
import { PublicationsView } from "@/views/publications-view";

export const metadata: Metadata = localeMetadata({
  locale: "zh",
  title: ui.publicationsTitle.zh,
  description: ui.publicationsDescription.zh,
  path: "/publications/",
});

export default function PublicationsPage() {
  return <PublicationsView locale="zh" />;
}
