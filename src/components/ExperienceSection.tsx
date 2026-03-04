import { Section } from './Section'
import { experience } from '../data/profile'

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      label="Experience"
      eyebrow="Where I’ve been recently"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {experience.map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className="group rounded-2xl border border-slate-200 bg-white/80 p-4 text-xs shadow-sm transition hover:-translate-y-1 hover:border-brand hover:shadow-soft"
          >
            <header className="mb-2 flex items-start justify-between gap-2">
              <div>
                <h3 className="text-[13px] font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-600">{item.company}</p>
              </div>
              <p className="text-[10px] text-right text-slate-500">
                <span className="block">{item.location}</span>
                <span className="block">{item.period}</span>
              </p>
            </header>
            <ul className="space-y-1.5 text-[11px] leading-relaxed text-slate-600">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-slate-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}

