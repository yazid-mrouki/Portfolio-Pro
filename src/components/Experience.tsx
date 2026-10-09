import Image from "next/image";
import type { Content } from "@/content";
import { CheckIcon, PinIcon } from "./icons";
import { Heading, Section, TagList } from "./ui";

export function Experience({ t }: { t: Content }) {
  const { experience } = t;

  return (
    <Section id="experience">
      <Heading kicker={experience.kicker} title={experience.title} intro={experience.intro} />

      <ol className="relative space-y-10 border-l border-line pl-6 sm:pl-10">
        {experience.items.map((job) => (
          <li key={job.id} className="reveal relative">
            <span
              aria-hidden
              className="absolute top-7 -left-[31px] size-3.5 rounded-full border-2 border-ink bg-linear-to-br from-accent to-accent-2 ring-4 ring-accent/15 sm:-left-[47px]"
            />
            <article className="card p-6 sm:p-8">
              <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent-2">{job.type}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">{job.role}</h3>
                  <p className="mt-1 font-medium text-fg/90">{job.company}</p>
                </div>
                <div className="text-sm text-muted sm:text-right">
                  <p className="font-mono text-fg">{job.period}</p>
                  <p className="mt-1 inline-flex items-center gap-1">
                    <PinIcon width={14} height={14} />
                    {job.location}
                  </p>
                </div>
              </header>

              <p className="mt-5 leading-relaxed text-muted">{job.summary}</p>

              <ul className="mt-5 grid gap-2.5 md:grid-cols-2 md:gap-x-8">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-fg/85">
                    <CheckIcon width={16} height={16} className="mt-0.5 shrink-0 text-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {job.outcome && (
                <p className="mt-6 rounded-xl border border-accent/25 bg-accent/5 px-4 py-3 text-sm text-fg/90">
                  <span className="mr-2 font-mono text-xs uppercase tracking-wider text-accent">
                    {experience.outcomeLabel}
                  </span>
                  {job.outcome}
                </p>
              )}

              {job.gallery && (
                <div className="-mx-6 mt-6 sm:-mx-8">
                  <p className="mb-3 px-6 font-mono text-xs uppercase tracking-wider text-muted sm:px-8">
                    {experience.galleryLabel}
                  </p>
                  <ul className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-6 px-6 pb-3 [scrollbar-color:var(--color-line)_transparent] [scrollbar-width:thin] sm:scroll-px-8 sm:px-8">
                    {job.gallery.map((shot) => (
                      <li key={shot.src} className="w-[78%] shrink-0 snap-start sm:w-[300px]">
                        <figure>
                          <a
                            href={shot.src}
                            target="_blank"
                            rel="noopener"
                            className="block overflow-hidden rounded-lg border border-line bg-ink transition-colors hover:border-accent"
                          >
                            <Image
                              src={shot.src}
                              alt={`${job.company} — ${shot.caption}`}
                              width={1280}
                              height={720}
                              sizes="(min-width: 640px) 300px, 78vw"
                              className="aspect-video w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                            />
                          </a>
                          <figcaption className="mt-1.5 text-xs text-muted">{shot.caption}</figcaption>
                        </figure>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6">
                <TagList items={job.stack} label="Stack" />
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
