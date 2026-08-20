import Image from "next/image";
import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  OrcidIcon,
} from "@/components/icons";
import { Container } from "@/components/section";
import { site, siteZh } from "@/data/site";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/lib/i18n";

const actionDefs = [
  { href: `mailto:${site.email}`, key: "email" as const, icon: MailIcon, external: false },
  { href: site.social.github, key: "github" as const, icon: GithubIcon, external: true },
  { href: site.social.linkedin, key: "linkedin" as const, icon: LinkedinIcon, external: true },
  { href: site.social.orcid, key: "orcid" as const, icon: OrcidIcon, external: true },
];

export function Hero({ locale }: { locale: Locale }) {
  const copy = locale === "zh" ? siteZh : site;

  return (
    <section className="hero">
      <Image
        src={site.hero.src}
        alt={locale === "zh" ? siteZh.portraitAlt : site.hero.alt}
        fill
        priority
        sizes="100vw"
        className="hero-background"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <Container className="hero-content">
        <div className="max-w-xl md:max-w-[min(34rem,42vw)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
            {ui.kicker[locale]}
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.4rem]">
            {site.name}
          </h1>
          <p className="mt-5 text-xl text-white/90 sm:text-2xl">{copy.role}</p>
          <p className="mt-1 text-lg text-white/65 sm:text-xl">{copy.subtitle}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            {copy.intro}
          </p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/60">
            {copy.positioning}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {actionDefs.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.key}
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noreferrer" : undefined}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-4 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  <Icon className="size-4" />
                  {ui[action.key][locale]}
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
