import Image from "next/image";
import { profile, type Content } from "@/content";
import { ArrowRightIcon, DownloadIcon, GithubIcon, LinkedinIcon, MailIcon, PinIcon } from "./icons";

const chips = [
  // Left edge
  { label: "OpenStack", className: "left-[-8%] top-[10%]" },
  { label: "Docker", className: "left-[-12%] top-[30%] [animation-delay:2.2s]" },
  { label: "MongoDB", className: "left-[-6%] top-[50%] [animation-delay:0.8s]" },
  { label: "Next.js", className: "left-[-10%] top-[70%] [animation-delay:3s]" },
  { label: "AI / Machine Learning", className: "left-[4%] bottom-[-3%] [animation-delay:1.2s]" },
  // Right edge
  { label: "Ansible", className: "right-[-8%] top-[4%] [animation-delay:2.6s]" },
  { label: "Kubernetes", className: "right-[-12%] top-[24%] [animation-delay:1.5s]" },
  { label: "SQL", className: "right-[-6%] top-[44%] [animation-delay:0.4s]" },
  { label: "Full-stack dev", className: "right-[-10%] top-[64%] [animation-delay:1.9s]" },
];

export function Hero({ t }: { t: Content }) {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Decorative background */}
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute top-40 -right-40 h-80 w-80 rounded-full bg-accent-2/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:pt-24 lg:pb-28">
        <div className="fade-up">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5 text-xs text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {t.hero.available}
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Yazid <span className="text-gradient">Mrouki</span>
          </h1>
          <p className="mt-4 font-mono text-sm text-accent-2 sm:text-base">{t.hero.role}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.hero.pitch}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-accent to-fuchsia-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-transform hover:-translate-y-0.5"
            >
              {t.hero.ctaProjects}
              <ArrowRightIcon width={16} height={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface/60 px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent"
            >
              {t.hero.ctaContact}
            </a>
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-accent-2/50 bg-accent-2/10 px-5 py-3 text-sm font-medium text-accent-2 transition-colors hover:border-accent-2 hover:bg-accent-2/20"
            >
              <DownloadIcon width={16} height={16} />
              {t.contact.download}
            </a>
            <div className="ml-1 flex items-center gap-1">
              {[
                { href: profile.github, label: "GitHub", Icon: GithubIcon },
                { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
                { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="grid size-11 place-items-center rounded-xl text-muted transition-colors hover:bg-surface-2 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted">
            <PinIcon width={16} height={16} /> {t.hero.location}
          </p>
        </div>

        <div className="fade-up relative mx-auto w-full max-w-sm [animation-delay:150ms]">
          <div aria-hidden className="absolute -inset-3 rounded-[2rem] bg-linear-to-br from-accent via-fuchsia-500 to-accent-2 opacity-60 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface p-1.5">
            <Image
              src={profile.photo}
              alt={`${profile.name}`}
              width={800}
              height={894}
              priority
              sizes="(min-width: 1024px) 384px, 90vw"
              className="aspect-[4/4.5] w-full rounded-[1.4rem] object-cover"
            />
          </div>
          {chips.map((chip) => (
            <span
              key={chip.label}
              className={`float absolute hidden rounded-xl border border-line bg-surface/90 px-3 py-2 font-mono text-xs text-fg shadow-xl backdrop-blur sm:block ${chip.className}`}
            >
              <span className="mr-1.5 inline-block size-1.5 rounded-full bg-accent-2 align-middle" />
              {chip.label}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
          {t.hero.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col bg-surface/90 px-6 py-5">
              <dt className="text-xs text-muted">{stat.label}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
