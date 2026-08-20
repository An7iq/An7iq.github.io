import type { Metadata } from "next";
import { localeMetadata } from "@/lib/metadata";
import { ui } from "@/i18n/ui";
import { PublicationsView } from "@/views/publications-view";

export const metadata: Metadata = localeMetadata({
  locale: "en",
  title: ui.publicationsTitle.en,
  description: ui.publicationsDescription.en,
  path: "/publications/",
});

export default function PublicationsPage() {
  return <PublicationsView locale="en" />;
}
