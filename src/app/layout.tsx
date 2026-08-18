import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/data/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

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
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Research Assistant",
  description: site.description,
  url: site.url,
  email: site.email,
  image: `${site.url}${site.portrait.src}`,
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Zhejiang A&F University, Jiyang College",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Imperial College London" },
    { "@type": "CollegeOrUniversity", name: "University of Nottingham" },
  ],
  sameAs: [site.social.github, site.social.linkedin, site.social.orcid],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
