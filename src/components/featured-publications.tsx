import Link from "next/link";
import { AuthorList, StatusBadge } from "@/components/citation";
import { Container } from "@/components/section";
import { featuredPublications, doiHref } from "@/data/publications";
import { ui } from "@/i18n/ui";
import { localizeHref, type Locale } from "@/lib/i18n";

export function FeaturedPublications({ locale }: { locale: Locale }) {
  return (
    <section className="pb-20 sm:pb-24">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
              {ui.publicationsKicker[locale]}
            </p>
            <h2 className="mt-2 font-serif text-3xl tracking-tight text-ink sm:text-4xl">
              {ui.publicationsTitle[locale]}
            </h2>
          </div>
          <Link
            href={localizeHref("/publications/", locale)}
            className="text-sm font-medium text-pine hover:text-pine-deep"
          >
            {ui.allProjects[locale]}
          </Link>
        </div>
        <ol className="mt-8 overflow-hidden rounded-2xl border border-sand bg-white shadow-[0_10px_28px_rgba(27,36,32,0.07)]">
          {featuredPublications.map((item) => (
            <li key={item.title} className="border-b border-sand px-5 py-5 last:border-b-0 sm:px-6">
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge status={item.status} locale={locale} />
                {item.year ? (
                  <span className="text-xs text-muted">{item.year}</span>
                ) : null}
                {(item.status === "published" || item.status === "preprint") &&
                item.journal ? (
                  <span className="text-xs text-muted">
                    <em>{item.journal}</em>
                  </span>
                ) : null}
                {item.openAccess === "gold" ? (
                  <span className="text-xs text-muted">{ui.goldOA[locale]}</span>
                ) : null}
              </div>
              <p className="mt-2 font-serif text-lg leading-snug text-ink">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed break-words text-muted">
                <AuthorList authors={item.authors} />
              </p>
              {item.doi ? (
                <p className="mt-2 text-sm">
                  <a
                    href={doiHref(item.doi)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pine hover:text-pine-deep"
                  >
                    https://doi.org/{item.doi}
                  </a>
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
