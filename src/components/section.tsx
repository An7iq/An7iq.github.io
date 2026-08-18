import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-16 sm:py-24", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  kicker,
  title,
  description,
  as: Tag = "h2",
}: {
  kicker?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className="max-w-2xl">
      {kicker ? (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
          {kicker}
        </p>
      ) : null}
      <Tag className="mt-3 font-serif text-3xl tracking-tight text-ink sm:text-4xl">
        {title}
      </Tag>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
