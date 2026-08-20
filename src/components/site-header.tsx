"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { navItems, site } from "@/data/site";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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

  return (
    <header className="sticky top-0 z-40 bg-hero text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
        <Link href="/" className="font-serif text-lg tracking-tight sm:text-xl">
          {site.name}
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {navItems.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-sm transition-colors hover:text-white",
                  active ? "text-white" : "text-white/70",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/25 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>
      <div
        id="mobile-menu"
        hidden={!open}
        className={cn("border-t border-white/10 bg-hero lg:hidden", open ? "block" : "hidden")}
      >
        <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col px-5 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-12 items-center border-b border-white/10 text-base last:border-b-0"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
