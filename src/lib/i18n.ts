export type Locale = "en" | "zh";

export const locales: Locale[] = ["en", "zh"];
export const defaultLocale: Locale = "en";

export type Localized<T = string> = Record<Locale, T>;

export function pick<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

export function isZhPath(pathname: string) {
  return pathname === "/zh" || pathname === "/zh/" || pathname.startsWith("/zh/");
}

export function localeFromPath(pathname: string): Locale {
  return isZhPath(pathname) ? "zh" : "en";
}

export function normalizePath(pathname: string) {
  if (!pathname || pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function withTrailingSlash(path: string) {
  if (
    path.startsWith("mailto:") ||
    path.startsWith("http") ||
    path.startsWith("#")
  ) {
    return path;
  }
  return normalizePath(path);
}

export function localizeHref(href: string, locale: Locale) {
  if (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("#")
  ) {
    return href;
  }
  const path = withTrailingSlash(href.startsWith("/") ? href : `/${href}`);
  if (locale === "en") return path;
  if (path === "/") return "/zh/";
  return `/zh${path}`;
}

export function counterpartHref(pathname: string) {
  const normalized = normalizePath(pathname || "/");
  if (isZhPath(normalized)) {
    const stripped = normalized.replace(/^\/zh/, "") || "/";
    return withTrailingSlash(stripped);
  }
  if (normalized === "/") return "/zh/";
  return `/zh${withTrailingSlash(normalized)}`;
}

export function pagePath(pathname: string) {
  if (pathname === "/zh" || pathname === "/zh/") return "/";
  if (pathname.startsWith("/zh/")) {
    const stripped = pathname.slice(3);
    return withTrailingSlash(stripped.startsWith("/") ? stripped : `/${stripped}`);
  }
  return withTrailingSlash(pathname);
}
