import Link from "next/link";
import { profile, type Content, type Locale } from "@/content";
import { DownloadIcon } from "./icons";
import { MobileNav } from "./MobileNav";

export function Header({ t, lang }: { t: Content; lang: Locale }) {
  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];
  const other: Locale = lang === "fr" ? "en" : "fr";

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight text-white">
          <span className="grid size-8 place-items-center rounded-lg bg-linear-to-br from-accent to-accent-2 text-xs font-bold text-ink">
            YM
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="rounded-lg px-3 py-2 transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={`/${other}`}
            hrefLang={other}
            aria-label={t.langSwitch}
            className="rounded-lg border border-line px-3 py-2 font-mono text-xs uppercase text-muted transition-colors hover:border-accent hover:text-white"
          >
            {other}
          </Link>
          <a
            href={profile.cv}
            download
            className="hidden items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-sm font-medium text-ink transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <DownloadIcon width={16} height={16} />
            {t.nav.cv}
          </a>
          <MobileNav label={t.nav.menu} links={links} />
        </div>
      </div>
    </header>
  );
}
