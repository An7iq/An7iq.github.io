import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  OrcidIcon,
} from "@/components/icons";
import { site, siteZh } from "@/data/site";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/lib/i18n";

const social = [
  { href: `mailto:${site.email}`, key: "email" as const, icon: MailIcon },
  { href: site.social.github, key: "github" as const, icon: GithubIcon },
  { href: site.social.linkedin, key: "linkedin" as const, icon: LinkedinIcon },
  { href: site.social.orcid, key: "orcid" as const, icon: OrcidIcon },
];

export function SiteFooter({ locale }: { locale: Locale }) {
  const positioning = locale === "zh" ? siteZh.positioning : site.positioning;
  const name = locale === "zh" ? siteZh.name : site.name;

  return (
    <footer className="bg-hero text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-serif text-2xl">{name}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-white/65">
            {positioning}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <ul className="flex items-center gap-2">
            {social.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-hero"
                    aria-label={ui[item.key][locale]}
                  >
                    <Icon className="size-4" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="text-xs text-white/50">{ui.footerNote[locale]}</p>
        </div>
      </div>
    </footer>
  );
}
