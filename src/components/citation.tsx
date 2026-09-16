import type { Publication, PublicationStatus } from "@/data/publications";
import { doiHref } from "@/data/publications";
import { ui } from "@/i18n/ui";
import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/i18n";

export function AuthorList({ authors }: { authors: string }) {
  const parts = authors.split(/(Wang, A\.)/g);
  return (
    <>
      {parts.map((part, index) =>
        part === "Wang, A." ? (
          <strong key={index} className="font-semibold text-ink">
            Wang, A.
          </strong>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}

const badgeClass: Record<PublicationStatus, string> = {
  published: "bg-pine text-white",
  preprint: "border border-pine/30 bg-paper-2 text-pine-deep",
  "under-review": "border border-pine/30 bg-paper-2 text-pine-deep",
  "in-preparation": "border border-sand bg-card text-muted",
};

const statusKey = {
  published: "statusPublished",
  preprint: "statusPreprint",
  "under-review": "statusUnderReview",
  "in-preparation": "statusInPreparation",
} as const;

export function StatusBadge({
  status,
  locale,
  className,
}: {
  status: PublicationStatus;
  locale: Locale;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 rounded-full px-2.5 py-0.5 text-[0.7rem] font-medium tracking-wide",
        badgeClass[status],
        className,
      )}
    >
      {ui[statusKey[status]][locale]}
    </span>
  );
}

function Venue({ item, locale }: { item: Publication; locale: Locale }) {
  if (item.status === "published" && item.journal) {
    return (
      <>
        {" "}
        <em>{item.journal}</em>
        {item.volume ? `, ${item.volume}` : null}
        {item.pages ? `, ${item.pages}` : null}
        {item.article ? `, ${item.article}` : null}.
      </>
    );
  }

  if (item.status === "published" && item.book) {
    return (
      <>
        {" "}
        In <em>{item.book}</em>
        {item.pages ? ` (${item.pages})` : null}.
        {item.publisher ? ` ${item.publisher}.` : null}
      </>
    );
  }

  if (item.status === "preprint") {
    return (
      <>
        {" "}
        {ui.preprintPhrase[locale]}
        {item.journal ? (
          <>
            {" "}
            <em>{item.journal}</em>.
          </>
        ) : null}
      </>
    );
  }

  if (item.status === "under-review" && item.journal) {
    return (
      <>
        {" "}
        {ui.underReviewAt[locale]} <em>{item.journal}</em>.
      </>
    );
  }

  if (item.status === "in-preparation") {
    return <> {ui.inPreparationPhrase[locale]}</>;
  }

  return null;
}

function PublicationLink({ item }: { item: Publication }) {
  const href = item.doi ? doiHref(item.doi) : item.url;
  if (!href) return null;
  const label = item.doi ? `https://doi.org/${item.doi}` : href;
  return (
    <>
      {" "}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-pine hover:text-pine-deep"
      >
        {label}
      </a>
      .
    </>
  );
}

function PublicationNote({
  item,
  locale,
}: {
  item: Publication;
  locale: Locale;
}) {
  const parts: string[] = [];
  if (item.openAccess === "gold") parts.push(ui.goldOA[locale]);
  if (item.note === "journalUnconfirmed") {
    parts.push(ui.journalStatusUnconfirmed[locale]);
  } else if (item.note) {
    parts.push(item.note);
  }
  if (!parts.length) return null;
  return <p className="mt-2 text-sm text-muted">{parts.join(" ")}</p>;
}

export function PublicationCitation({
  item,
  locale,
}: {
  item: Publication;
  locale: Locale;
}) {
  return (
    <div className="min-w-0">
      <StatusBadge status={item.status} locale={locale} />
      <p className="mt-2 text-[0.95rem] leading-relaxed break-words text-ink/90 sm:text-base">
        <AuthorList authors={item.authors} />
        {item.year ? ` (${item.year}). ` : " "}
        {item.title}.
        <Venue item={item} locale={locale} />
        <PublicationLink item={item} />
      </p>
      <PublicationNote item={item} locale={locale} />
    </div>
  );
}
