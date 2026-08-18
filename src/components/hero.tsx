import Image from "next/image";
import Link from "next/link";
import {
  DownloadIcon,
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
    <section className="pb-12 pt-10 sm:pb-16 sm:pt-16 lg:pb-24 lg:pt-20">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-10 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
              PhD applicant · Early-career researcher
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              {site.name}
            </h1>
            <p className="mt-5 text-xl text-pine-deep sm:text-2xl">
              {site.role}
            </p>
            <p className="mt-1 text-lg text-muted sm:text-xl">{site.subtitle}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/85 sm:text-xl">
              {site.intro}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              {site.positioning}
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <div>
                <Link
                  href={site.cvPath}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-pine px-5 text-sm font-medium text-white transition-colors hover:bg-pine-deep"
                >
                  <DownloadIcon className="size-4" />
                  Download CV
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {actions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <Link
                      key={action.label}
                      href={action.href}
                      target={action.external ? "_blank" : undefined}
                      rel={action.external ? "noreferrer" : undefined}
                      className="inline-flex min-h-12 items-center gap-2 rounded-full border border-sand bg-card px-4 text-sm font-medium text-pine-deep transition-colors hover:border-pine hover:text-pine"
                    >
                      <Icon className="size-4" />
                      {action.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] border border-sand sm:-inset-4"
            />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-sand/80 bg-paper-2 shadow-[0_20px_50px_rgba(20,56,50,0.12)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src={site.portrait.src}
                  alt={site.portrait.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="object-cover object-[50%_12%]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
