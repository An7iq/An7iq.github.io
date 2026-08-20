import type { Metadata } from "next";
import { site } from "@/data/site";
import { type Locale, localizeHref } from "@/lib/i18n";

export function localeMetadata({
  locale,
  title,
  description,
  path,
}: {
  locale: Locale;
  title: string;
  description: string;
  path: string;
}): Metadata {
  const enPath = path === "/" ? "/" : localizeHref(path, "en");
  const zhPath = localizeHref(path, "zh");
  const canonicalPath = locale === "zh" ? zhPath : enPath;
  const enUrl = `${site.url}${enPath === "/" ? "/" : enPath}`;
  const zhUrl = `${site.url}${zhPath}`;
  const canonical = `${site.url}${canonicalPath === "/" ? "/" : canonicalPath}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: enUrl,
        "zh-CN": zhUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: locale === "zh" ? "zh_CN" : "en_GB",
      alternateLocale: locale === "zh" ? ["en_GB"] : ["zh_CN"],
    },
  };
}
