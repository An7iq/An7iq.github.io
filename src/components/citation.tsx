import type { Publication, PublicationStatus } from "@/data/publications";
import { statusLabels } from "@/data/publications";
import { cn } from "@/lib/cn";

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
  "under-review": "border border-pine/30 bg-paper-2 text-pine-deep",
  "in-preparation": "border border-sand bg-card text-muted",
};

export function StatusBadge({
  status,
  className,
}: {
  status: PublicationStatus;
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
      {statusLabels[status]}
    </span>
  );
}

function Venue({ item }: { item: Publication }) {
  if (item.status === "published" && item.journal) {
    return (
      <>
        {" "}
        <em>{item.journal}</em>
        {item.volume ? `, ${item.volume}` : null}
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

  if (item.status === "under-review" && item.journal) {
    return (
      <>
        {" "}
        Under review at <em>{item.journal}</em>.
      </>
    );
  }

  if (item.status === "in-preparation") {
    return <> In preparation.</>;
  }

  return null;
}

export function PublicationCitation({ item }: { item: Publication }) {
  return (
    <div className="min-w-0">
      <StatusBadge status={item.status} />
      <p className="mt-2 text-[0.95rem] leading-relaxed break-words text-ink/90 sm:text-base">
        <AuthorList authors={item.authors} />
        {item.year ? ` (${item.year}). ` : ". "}
        {item.title}.
        <Venue item={item} />
      </p>
    </div>
  );
}
