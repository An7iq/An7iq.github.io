import type { Metadata } from "next";
import { localeMetadata } from "@/lib/metadata";
import { ui } from "@/i18n/ui";
import { MethodsView } from "@/views/methods-view";

export const metadata: Metadata = localeMetadata({
  locale: "en",
  title: ui.methodsKicker.en,
  description: ui.methodsDescription.en,
  path: "/methods/",
});

export default function MethodsPage() {
  return <MethodsView locale="en" />;
}
