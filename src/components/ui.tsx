import type { ReactNode } from "react";

export function Section({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}

export function Heading({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return (
    <header className="reveal mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent-2">{kicker}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-muted">{intro}</p>}
    </header>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted">
      {children}
    </li>
  );
}

export function TagList({ items, label }: { items: readonly string[]; label?: string }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={label}>
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </ul>
  );
}
