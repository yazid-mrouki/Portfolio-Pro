import type { Content } from "@/content";
import { BrainIcon, CloudIcon, CodeIcon, ServerIcon } from "./icons";
import { Heading, Section } from "./ui";

const focusIcons = [CloudIcon, ServerIcon, CodeIcon, BrainIcon];

export function About({ t }: { t: Content }) {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Heading kicker={t.about.kicker} title={t.about.title} />
          <div className="reveal space-y-5 text-lg leading-relaxed text-muted">
            {t.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className="lg:pt-20">
          <h3 className="sr-only">{t.about.focusTitle}</h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {t.about.focus.map((item, i) => {
              const Icon = focusIcons[i % focusIcons.length];
              return (
                <li key={item.title} className="reveal card group p-5 transition-colors hover:border-accent/60">
                  <span className="mb-4 grid size-10 place-items-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon />
                  </span>
                  <p className="font-medium text-white">{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
