import type { Metadata } from "next";
import { SiteChrome } from "@/components/site-chrome";
import { site } from "@/data/site";
import { fontClassName } from "@/lib/fonts";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s | Anqi Wang",
  },
  description: site.description,
  applicationName: "Anqi Wang",
  authors: [{ name: site.name, url: site.social.orcid }],
  creator: site.name,
  keywords: [
    "Anqi Wang",
    "environmental data science",
    "Earth-system science",
    "hydrology",
    "ecological modelling",
    "environmental machine learning",
  ],
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_GB",
    alternateLocale: ["zh_CN"],
    type: "website",
    images: [
      {
        url: site.portrait.src,
        width: site.portrait.width,
        height: site.portrait.height,
        alt: site.portrait.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.portrait.src],
  },
  alternates: {
    canonical: site.url,
    languages: {
      en: site.url,
      "zh-CN": `${site.url}/zh/`,
      "x-default": site.url,
    },
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontClassName}>
      <body className="min-h-full bg-paper font-sans text-ink">
        <SiteChrome locale="en">{children}</SiteChrome>
      </body>
    </html>
  );
}
