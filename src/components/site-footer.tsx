import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  OrcidIcon,
} from "@/components/icons";
import { site } from "@/data/site";

const social = [
  { href: `mailto:${site.email}`, label: "Email", icon: MailIcon },
  { href: site.social.github, label: "GitHub", icon: GithubIcon },
  { href: site.social.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: site.social.orcid, label: "ORCID", icon: OrcidIcon },
];

export function SiteFooter() {
  return (
    <footer className="bg-hero text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-serif text-2xl">{site.name}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-white/65">
            {site.positioning}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <ul className="flex items-center gap-2">
            {social.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-hero"
                    aria-label={item.label}
                  >
                    <Icon className="size-4" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="text-xs text-white/50">Academic profile · 2026</p>
        </div>
      </div>
    </footer>
  );
}
