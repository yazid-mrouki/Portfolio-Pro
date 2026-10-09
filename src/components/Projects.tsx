import Image from "next/image";
import type { Content } from "@/content";
import { BrainIcon, CloudIcon, CodeIcon, DownloadIcon, LayersIcon, ServerIcon, ShieldIcon } from "./icons";
import { CaseStudy } from "./CaseStudy";
import { Heading, Section, TagList } from "./ui";

const projectIcons = {
  openstack: CloudIcon,
  paas: ServerIcon,
  oncokids: BrainIcon,
  security: ShieldIcon,
  bandwidth: CodeIcon,
} as const;

export function Projects({ t }: { t: Content }) {
  const { projects } = t;

  return (
    <Section id="projects">
      <Heading kicker={projects.kicker} title={projects.title} intro={projects.intro} />

      <CaseStudy c={projects.caseStudy} />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {projects.featured.map((project, i) => {
          const Icon = projectIcons[project.id as keyof typeof projectIcons] ?? LayersIcon;
          // Two cards per row; with an odd count the last card spans the full width.
          const lastOdd = projects.featured.length % 2 === 1 && i === projects.featured.length - 1;
          const span = lastOdd ? "md:col-span-2 lg:col-span-6" : "lg:col-span-3";
          return (
            <article
              key={project.id}
              className={`reveal card group relative flex flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 ${span}`}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 size-48 rounded-full bg-accent/10 blur-3xl transition-opacity group-hover:bg-accent/25"
              />
              <div className="flex items-center justify-between gap-4">
                <span className="grid size-11 place-items-center rounded-xl border border-line bg-surface-2 text-accent-2">
                  <Icon />
                </span>
                <span className="font-mono text-xs text-muted">{project.period}</span>
              </div>
              <p className="mt-5 font-mono text-xs uppercase tracking-wider text-accent">{project.category}</p>
              <h3 className="mt-1.5 text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
              {project.team && <p className="mt-2 font-mono text-xs text-accent-2/80">{project.team}</p>}
              {project.metrics && (
                <dl className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl border border-line bg-ink/40 px-3.5 py-3">
                      <dt className="sr-only">{m.label}</dt>
                      <dd className="text-gradient font-mono text-lg font-semibold">{m.value}</dd>
                      <dd className="mt-0.5 text-xs leading-snug text-muted">{m.label}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {project.gallery && (
                <ul className="-mx-6 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-6 px-6 pb-2 [scrollbar-color:var(--color-line)_transparent] [scrollbar-width:thin]">
                  {project.gallery.map((shot) => (
                    <li key={shot.src} className="w-[88%] shrink-0 snap-start">
                      <figure>
                        <a
                          href={shot.src}
                          target="_blank"
                          rel="noopener"
                          className="block overflow-hidden rounded-xl border border-line bg-white transition-colors hover:border-accent"
                        >
                          <Image
                            src={shot.src}
                            alt={`${project.title} — ${shot.caption}`}
                            width={1280}
                            height={720}
                            sizes="(min-width: 1024px) 480px, (min-width: 768px) 40vw, 80vw"
                            className="aspect-video w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                          />
                        </a>
                        <figcaption className="mt-2 text-xs text-muted">{shot.caption}</figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              )}
              <ul
                className={`mt-4 mb-6 space-y-2 text-sm text-fg/80 ${lastOdd ? "lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-2 lg:space-y-0" : ""}`}
              >
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent-2" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto space-y-4">
                {project.deck && (
                  <a
                    href={project.deck.href}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 rounded-xl border border-line bg-ink/50 px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:border-accent"
                  >
                    <DownloadIcon width={16} height={16} />
                    {project.deck.label}
                  </a>
                )}
                <TagList items={project.stack} label="Stack" />
              </div>
            </article>
          );
        })}
      </div>

      <h3 className="reveal mt-16 mb-6 text-xl font-semibold text-white">{projects.othersTitle}</h3>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projects.others.map((p) => (
          <li key={p.name} className="reveal card flex flex-col gap-1 px-5 py-4 transition-colors hover:border-accent/50">
            <p className="font-medium text-white">{p.name}</p>
            <p className="text-sm text-muted">{p.description}</p>
            <p className="mt-1 font-mono text-[11px] text-accent-2/80">{p.stack}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
