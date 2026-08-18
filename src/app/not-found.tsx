import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/section";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main id="main" className="py-28">
      <Container className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
          404
        </p>
        <h1 className="mt-4 font-serif text-4xl text-ink">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          That address is not part of this academic profile.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center rounded-full bg-pine px-5 text-sm font-medium text-white hover:bg-pine-deep"
        >
          Back to home
        </Link>
      </Container>
    </main>
  );
}
