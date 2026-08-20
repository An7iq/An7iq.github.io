import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/data/site";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/lib/i18n";

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
    name: "Zhejiang A&F University, College of Jiyang",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Imperial College London" },
    { "@type": "CollegeOrUniversity", name: "University of Nottingham" },
  ],
  sameAs: [site.social.github, site.social.linkedin, site.social.orcid],
};

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
