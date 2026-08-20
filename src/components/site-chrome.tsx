import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site, siteZh } from "@/data/site";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/lib/i18n";

function personJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: locale === "zh" ? siteZh.name : site.name,
    jobTitle: locale === "zh" ? "科研助理" : "Research Assistant",
    description: locale === "zh" ? siteZh.description : site.description,
    url: site.url,
    email: site.email,
    image: `${site.url}${site.hero.src}`,
    affiliation: {
      "@type": "CollegeOrUniversity",
      name:
        locale === "zh"
          ? "浙江农林大学暨阳学院"
          : "Zhejiang A&F University, College of Jiyang",
    },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Imperial College London" },
      { "@type": "CollegeOrUniversity", name: "University of Nottingham" },
    ],
    sameAs: [site.social.github, site.social.linkedin, site.social.orcid],
  };
}

export function SiteChrome({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(locale)) }}
      />
      <a href="#main" className="skip-link">
        {ui.skip[locale]}
      </a>
      <SiteHeader locale={locale} />
      {children}
      <SiteFooter locale={locale} />
    </>
  );
}
