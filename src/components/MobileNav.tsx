"use client";

import { useRef } from "react";
import { MenuIcon } from "./icons";

type Props = { label: string; links: { href: string; label: string }[] };

// Native popover: light-dismiss and Esc handling come for free; JS only closes it after a link click.
export function MobileNav({ label, links }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <button
        type="button"
        popoverTarget="mobile-nav"
        aria-label={label}
        className="grid size-10 place-items-center rounded-lg border border-line text-fg md:hidden"
      >
        <MenuIcon />
      </button>
      <div
        ref={ref}
        id="mobile-nav"
        popover="auto"
        className="inset-x-4 top-18 m-0 w-auto rounded-2xl border border-line bg-surface p-2 text-fg shadow-2xl backdrop:bg-black/50"
      >
        <nav aria-label={label}>
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => ref.current?.hidePopover()}
                  className="block rounded-xl px-4 py-3 text-sm hover:bg-surface-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
