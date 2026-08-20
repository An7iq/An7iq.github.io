import Image from "next/image";
import Link from "next/link";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  OrcidIcon,
} from "@/components/icons";
import { Container } from "@/components/section";
import { site } from "@/data/site";

const actions = [
  {
    href: `mailto:${site.email}`,
    label: "Email",
    icon: MailIcon,
    external: false,
  },
  {
    href: site.social.github,
    label: "GitHub",
    icon: GithubIcon,
    external: true,
  },
  {
    href: site.social.linkedin,
    label: "LinkedIn",
    icon: LinkedinIcon,
    external: true,
  },
  {
    href: site.social.orcid,
    label: "ORCID",
    icon: OrcidIcon,
    external: true,
  },
];

export function Hero() {
  return (
    <section className="bg-hero text-white">
      <Container className="grid items-center gap-10 py-12 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.8fr)] md:gap-12 md:py-16 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
            PhD applicant · Early-career researcher
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.4rem]">
            {site.name}
          </h1>
          <p className="mt-5 text-xl text-white/90 sm:text-2xl">{site.role}</p>
          <p className="mt-1 text-lg text-white/65 sm:text-xl">{site.subtitle}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            {site.intro}
          </p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/60">
            {site.positioning}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {actions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.label}
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noreferrer" : undefined}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-4 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  <Icon className="size-4" />
                  {action.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="relative overflow-hidden rounded-[1.4rem] bg-pine-deep shadow-[0_24px_50px_rgba(0,0,0,0.28)]">
            <div className="relative aspect-[4/5]">
              <Image
                src={site.portrait.src}
                alt={site.portrait.alt}
                fill
                priority
                sizes="(max-width: 768px) 80vw, 360px"
                className="object-cover object-[50%_12%]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
