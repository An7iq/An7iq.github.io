import type { Metadata } from "next";
import { localeMetadata } from "@/lib/metadata";
import { ui } from "@/i18n/ui";
import { AboutView } from "@/views/about-view";

export const metadata: Metadata = localeMetadata({
  locale: "zh",
  title: ui.aboutKicker.zh,
  description: ui.aboutTitle.zh,
  path: "/about/",
});

export default function AboutPage() {
  return <AboutView locale="zh" />;
}
