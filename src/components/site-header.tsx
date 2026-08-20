"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { site, siteZh } from "@/data/site";
import { navKeys, ui } from "@/i18n/ui";
import { cn } from "@/lib/cn";
import {
  counterpartHref,
  localizeHref,
  normalizePath,
  type Locale,
} from "@/lib/i18n";

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/" || pathname === "/zh" || pathname === "/zh/";
  const textLinks = navKeys.filter((item) => item.key !== "cv");
  const cvItem = navKeys.find((item) => item.key === "cv")!;
  const languageHref = counterpartHref(pathname);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "z-40 text-white",
        isHome
          ? "absolute inset-x-0 top-0 bg-[linear-gradient(180deg,rgba(3,24,22,0.46)_0%,rgba(3,24,22,0.18)_68%,rgba(3,24,22,0)_100%)]"
          : "sticky top-0 bg-hero/88 backdrop-blur-md",
        open && "bg-hero/95 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
        <Link
          href={localizeHref("/", locale)}
          className="font-serif text-lg tracking-tight sm:text-xl"
        >
          {locale === "zh" ? siteZh.name : site.name}
        </Link>
        <nav
          aria-label={ui.primaryNav[locale]}
          className="hidden items-center gap-5 xl:gap-7 lg:flex"
        >
          {textLinks.map((item) => {
            const href = localizeHref(item.href, locale);
            const current = normalizePath(pathname);
            const active = current === href || current.startsWith(href);
            return (
              <Link
                key={item.href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-sm transition-colors hover:text-white",
                  active ? "text-white" : "text-white/70",
                )}
              >
                {ui.nav[item.key][locale]}
              </Link>
            );
          })}
          <Link
            href={localizeHref(cvItem.href, locale)}
            className="inline-flex min-h-9 items-center rounded-full border border-white/55 px-3.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
          >
            {ui.nav.cv[locale]}
          </Link>
          <Link
            href={languageHref}
            hrefLang={locale === "en" ? "zh-CN" : "en"}
            lang={locale === "en" ? "zh-CN" : "en"}
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            aria-label={ui.languageAria[locale]}
          >
            {ui.languageSwitch[locale]}
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/25 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          <span className="sr-only">
            {open ? ui.closeMenu[locale] : ui.openMenu[locale]}
          </span>
        </button>
      </div>
      <div
        id="mobile-menu"
        hidden={!open}
        className={cn(
          "border-t border-white/10 lg:hidden",
          open ? "block bg-hero/95 backdrop-blur-md" : "hidden",
        )}
      >
        <nav
          aria-label={ui.mobileNav[locale]}
          className="mx-auto flex max-w-6xl flex-col px-5 py-4"
        >
          {navKeys.map((item) => (
            <Link
              key={item.href}
              href={localizeHref(item.href, locale)}
              className="flex min-h-12 items-center border-b border-white/10 text-base"
              onClick={() => setOpen(false)}
            >
              {ui.nav[item.key][locale]}
            </Link>
          ))}
          <Link
            href={languageHref}
            hrefLang={locale === "en" ? "zh-CN" : "en"}
            className="flex min-h-12 items-center text-base font-medium"
            aria-label={ui.languageAria[locale]}
            onClick={() => setOpen(false)}
          >
            {ui.languageSwitch[locale]}
          </Link>
        </nav>
      </div>
    </header>
  );
}
