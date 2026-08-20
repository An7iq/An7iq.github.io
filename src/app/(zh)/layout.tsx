import type { Metadata } from "next";
import { SiteChrome } from "@/components/site-chrome";
import { site, siteZh } from "@/data/site";
import { fontClassName } from "@/lib/fonts";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: siteZh.title,
    template: "%s | 王安琪",
  },
  description: siteZh.description,
  applicationName: "王安琪",
  authors: [{ name: site.name, url: site.social.orcid }],
  creator: site.name,
  keywords: [
    "王安琪",
    "环境数据科学",
    "地球系统科学",
    "水文学",
    "生态模拟",
    "环境机器学习",
  ],
  openGraph: {
    title: siteZh.title,
    description: siteZh.description,
    url: `${site.url}/zh/`,
    siteName: site.name,
    locale: "zh_CN",
    alternateLocale: ["en_GB"],
    type: "website",
    images: [
      {
        url: site.hero.src,
        width: site.hero.width,
        height: site.hero.height,
        alt: siteZh.portraitAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteZh.title,
    description: siteZh.description,
    images: [site.hero.src],
  },
  alternates: {
    canonical: `${site.url}/zh/`,
    languages: {
      en: site.url,
      "zh-CN": `${site.url}/zh/`,
      "x-default": site.url,
    },
  },
};

export default function ChineseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={fontClassName}>
      <body className="min-h-full bg-paper font-sans text-ink">
        <SiteChrome locale="zh">{children}</SiteChrome>
      </body>
    </html>
  );
}
