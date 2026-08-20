import Link from "next/link";
import { DownloadIcon } from "@/components/icons";
import { site } from "@/data/site";
import { ui } from "@/i18n/ui";
import type { Locale } from "@/lib/i18n";

export function CvDownloadActions({
  locale,
  variant = "light",
}: {
  locale: Locale;
  variant?: "light" | "dark";
}) {
  const englishClass =
    variant === "dark"
      ? "inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-hero transition-colors hover:bg-paper"
      : "inline-flex min-h-12 items-center gap-2 rounded-full bg-pine px-5 text-sm font-medium text-white transition-colors hover:bg-pine-deep";
  const soonClass =
    variant === "dark"
      ? "inline-flex min-h-12 cursor-not-allowed items-center rounded-full border border-white/25 px-5 text-sm text-white/55"
      : "inline-flex min-h-12 cursor-not-allowed items-center rounded-full border border-sand bg-paper px-5 text-sm text-muted";
  const chineseReadyClass =
    variant === "dark"
      ? "inline-flex min-h-12 items-center gap-2 rounded-full border border-white/45 px-5 text-sm font-medium text-white hover:bg-white/10"
      : "inline-flex min-h-12 items-center gap-2 rounded-full border border-sand bg-card px-5 text-sm font-medium text-pine-deep hover:border-pine";

  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={site.cvPath}
        target="_blank"
        rel="noreferrer"
        className={englishClass}
      >
        <DownloadIcon className="size-4" />
        {ui.downloadEnglishCv[locale]}
      </Link>
      {site.chineseCvAvailable ? (
        <Link
          href={site.chineseCvPath}
          target="_blank"
          rel="noreferrer"
          className={chineseReadyClass}
        >
          <DownloadIcon className="size-4" />
          {ui.downloadChineseCv[locale]}
        </Link>
      ) : (
        <span className={soonClass} aria-disabled="true">
          {ui.chineseCvSoon[locale]}
        </span>
      )}
    </div>
  );
}
