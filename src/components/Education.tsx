import type { Content } from "@/content";
import { CheckIcon } from "./icons";
import { Heading, Section } from "./ui";

export function Education({ t }: { t: Content }) {
  const { education: e } = t;

  return (
    <Section id="education">
      <Heading kicker={e.kicker} title={e.title} />

      <div className="grid gap-5 lg:grid-cols-3">
        <ol className="reveal card divide-y divide-line lg:col-span-2">
          {e.items.map((item) => (
            <li key={item.degree} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 p-6">
              <div>
                <h3 className="font-medium text-white">{item.degree}</h3>
                <p className="mt-1 text-sm text-muted">
                  {item.school} · {item.place}
                </p>
              </div>
              <p className="font-mono text-sm text-accent-2">{item.period}</p>
            </li>
          ))}
        </ol>

        <div className="reveal card p-6">
          <h3 className="mb-4 font-semibold text-white">{e.certTitle}</h3>
          <ul className="space-y-3">
            {e.certs.map((c) => (
              <li key={c.name} className="flex gap-3">
                <span
                  className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
                    c.pending ? "border border-dashed border-muted/60" : "bg-accent/20 text-accent"
                  }`}
                >
                  {!c.pending && <CheckIcon width={12} height={12} />}
                </span>
                <div>
                  <p className="text-sm font-medium text-fg">{c.name}</p>
                  <p className="text-xs text-muted">{c.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal card p-6 lg:col-span-2">
          <h3 className="mb-5 font-semibold text-white">{e.langTitle}</h3>
          <ul className="grid gap-5 sm:grid-cols-2">
            {e.langs.map((l) => (
              <li key={l.name}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-fg">{l.name}</span>
                  <span className="font-mono text-xs text-muted">{l.level}</span>
                </div>
                <div
                  role="meter"
                  aria-label={l.name}
                  aria-valuenow={l.value}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className="h-1.5 overflow-hidden rounded-full bg-surface-2"
                >
                  <div className="h-full rounded-full bg-linear-to-r from-accent to-accent-2" style={{ width: `${l.value}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal card p-6">
          <h3 className="mb-4 font-semibold text-white">{e.interestsTitle}</h3>
          <ul className="space-y-3">
            {e.interests.map((i) => (
              <li key={i.name}>
                <p className="text-sm font-medium text-fg">{i.name}</p>
                <p className="text-xs text-muted">{i.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
