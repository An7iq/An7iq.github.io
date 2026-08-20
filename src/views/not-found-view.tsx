import Link from "next/link";
import { Container } from "@/components/section";
import { ui } from "@/i18n/ui";
import { localizeHref, type Locale } from "@/lib/i18n";

export function NotFoundView({ locale }: { locale: Locale }) {
  return (
    <main id="main" className="py-28">
      <Container className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
          404
        </p>
        <h1 className="mt-4 font-serif text-4xl text-ink">
          {ui.notFoundTitle[locale]}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">{ui.notFoundBody[locale]}</p>
        <Link
          href={localizeHref("/", locale)}
          className="mt-8 inline-flex min-h-12 items-center rounded-full bg-pine px-5 text-sm font-medium text-white hover:bg-pine-deep"
        >
          {ui.backHome[locale]}
        </Link>
      </Container>
    </main>
  );
}
