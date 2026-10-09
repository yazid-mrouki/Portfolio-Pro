import { profile, type Content } from "@/content";
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, PinIcon } from "./icons";
import { Section } from "./ui";

export function Contact({ t }: { t: Content }) {
  const channels = [
    { label: t.contact.email, value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon },
    { label: t.contact.phone, value: profile.phone, href: profile.phoneHref, Icon: PhoneIcon },
    { label: "LinkedIn", value: "yazid-mrouki", href: profile.linkedin, Icon: LinkedinIcon },
    { label: "GitHub", value: "yazid-mrouki", href: profile.github, Icon: GithubIcon },
  ];

  return (
    <Section id="contact">
      <div className="reveal relative overflow-hidden rounded-3xl border border-line bg-surface p-8 sm:p-12">
        <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-accent/25 blur-[100px]" />

        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent-2">{t.contact.kicker}</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              {t.contact.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-gradient">{t.contact.title.split(" ").at(-1)}</span>
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">{t.contact.text}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={profile.cv}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
              >
                <DownloadIcon width={16} height={16} />
                {t.contact.download}
              </a>
              <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                <PinIcon width={16} height={16} />
                {t.hero.location}
              </span>
            </div>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {channels.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-ink/60 p-4 transition-colors hover:border-accent"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted">{label}</span>
                    <span className="block truncate text-sm font-medium text-fg">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
