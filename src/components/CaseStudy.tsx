import Image from "next/image";
import type { CaseStudy as CaseStudyContent } from "@/content";
import { ArrowRightIcon, CheckIcon, DownloadIcon } from "./icons";
import { TagList } from "./ui";

const media = "/projects/rawabet";

export function CaseStudy({ c }: { c: CaseStudyContent }) {
  return (
    <article
      id="rawabet"
      aria-labelledby="rawabet-title"
      className="reveal relative mb-16 scroll-mt-24 overflow-hidden rounded-3xl border border-line bg-surface"
    >
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 size-96 rounded-full bg-accent/20 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -right-32 -bottom-40 size-96 rounded-full bg-accent-2/10 blur-[120px]" />

      <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
        {/* Story */}
        <div>
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="rounded-full bg-accent/15 px-2.5 py-1 uppercase tracking-wider text-accent">{c.kicker}</span>
            <span className="text-muted">{c.period} · {c.team}</span>
          </div>
          <h3 id="rawabet-title" className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {c.title}
          </h3>
          <p className="mt-3 text-lg text-gradient font-medium">{c.tagline}</p>
          <p className="mt-5 leading-relaxed text-muted">{c.problem}</p>
          <p className="mt-3 leading-relaxed text-fg/85">{c.solution}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#rawabet-demo"
              className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-accent to-fuchsia-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-transform hover:-translate-y-0.5"
            >
              {c.watch}
              <ArrowRightIcon width={16} height={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`${media}/rawabet-private-cloud.pdf`}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-ink/50 px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent"
            >
              <DownloadIcon width={16} height={16} />
              {c.deck}
            </a>
          </div>
        </div>

        {/* Demo video: nothing is downloaded until the visitor presses play. */}
        <div id="rawabet-demo" className="scroll-mt-24">
          <div className="relative rounded-2xl bg-linear-to-br from-accent/60 via-fuchsia-500/40 to-accent-2/60 p-px shadow-2xl shadow-accent/20">
            <video
              controls
              playsInline
              preload="none"
              poster={`${media}/home.webp`}
              aria-label={c.videoLabel}
              className="aspect-video w-full rounded-2xl bg-ink object-cover"
            >
              <source src={`${media}/rawabet-demo.mp4`} type="video/mp4" />
            </video>
          </div>
          <div className="mt-4">
            <TagList items={c.stack} label="Stack" />
          </div>
        </div>
      </div>

      {/* Modules + architecture */}
      <div className="relative grid gap-10 border-t border-line p-6 sm:p-10 lg:grid-cols-2">
        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">{c.modulesTitle}</h4>
          <ul className="grid gap-3 sm:grid-cols-2">
            {c.modules.map((m) => (
              <li key={m.name} className="flex gap-3 rounded-xl border border-line bg-ink/40 p-3.5">
                <CheckIcon width={18} height={18} className="mt-0.5 shrink-0 text-accent-2" />
                <span>
                  <span className="block text-sm font-medium text-white">{m.name}</span>
                  <span className="block text-xs leading-relaxed text-muted">{m.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">{c.archTitle}</h4>
          <ol className="space-y-2">
            {c.layers.map((layer, i) => (
              <li
                key={layer.name}
                className="rounded-xl border border-line bg-ink/40 p-4"
                style={{ marginInline: `${(c.layers.length - 1 - i) * 0.6}rem` }}
              >
                <p className="mb-2.5 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
                  <span className="grid size-5 place-items-center rounded-md bg-accent/15 text-[10px]">{i + 1}</span>
                  {layer.name}
                </p>
                <TagList items={layer.items} />
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Screens */}
      <Gallery
        title={c.galleryTitle}
        hint={c.galleryHint}
        shots={c.gallery.map((shot) => ({ src: `${media}/${shot.id}.webp`, caption: shot.caption }))}
      />
      <Gallery title={c.infraTitle} hint={c.galleryHint} shots={c.infraGallery} />
    </article>
  );
}

function Gallery({ title, hint, shots }: { title: string; hint: string; shots: { src: string; caption: string }[] }) {
  return (
    <div className="relative border-t border-line py-6 sm:py-10">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2 px-6 sm:px-10">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-white">{title}</h4>
        <p className="font-mono text-xs text-muted">{hint}</p>
      </div>
      <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-3 [scrollbar-color:var(--color-line)_transparent] [scrollbar-width:thin] sm:scroll-px-10 sm:px-10">
        {shots.map((shot) => (
          <li key={shot.src} className="w-[85%] shrink-0 snap-start sm:w-[420px]">
            <figure>
              <a
                href={shot.src}
                target="_blank"
                rel="noopener"
                className="block overflow-hidden rounded-xl border border-line bg-white transition-colors hover:border-accent"
              >
                <Image
                  src={shot.src}
                  alt={`Rawebet — ${shot.caption}`}
                  width={1280}
                  height={720}
                  sizes="(min-width: 640px) 420px, 85vw"
                  className="aspect-video w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                />
              </a>
              <figcaption className="mt-2 text-xs text-muted">{shot.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
