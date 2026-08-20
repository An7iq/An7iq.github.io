import type { Metadata } from "next";
import { localeMetadata } from "@/lib/metadata";
import { ui } from "@/i18n/ui";
import { AboutView } from "@/views/about-view";

export const metadata: Metadata = localeMetadata({
  locale: "en",
  title: ui.aboutKicker.en,
  description: ui.aboutTitle.en,
  path: "/about/",
});

export default function AboutPage() {
  return <AboutView locale="en" />;
}
