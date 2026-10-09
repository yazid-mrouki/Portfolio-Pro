import type { Content } from "@/content";
import { Heading, Section } from "./ui";

export function Skills({ t }: { t: Content }) {
  return (
    <Section id="skills">
      <Heading kicker={t.skills.kicker} title={t.skills.title} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.skills.groups.map((group) => (
          <div key={group.name} className="reveal card p-5">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
              <span aria-hidden className="h-4 w-1 rounded-full bg-linear-to-b from-accent to-accent-2" />
              {group.name}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-line bg-surface-2 px-2.5 py-1.5 text-xs text-fg/85 transition-colors hover:border-accent/60 hover:text-white"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
