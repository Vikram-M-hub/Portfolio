import { Section } from './Section'
import { education } from '../data/profile'

export function EducationSection() {
  return (
    <Section
      id="education"
      label="Education"
      eyebrow="Foundations I built on"
    >
      <div className="space-y-3 text-xs">
        {education.map((item) => (
          <article
            key={item.institution}
            className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm"
          >
            <h3 className="text-[13px] font-semibold text-ink">
              {item.institution}
            </h3>
            <p className="text-[11px] text-slate-600">{item.degree}</p>
            <p className="mt-1 text-[10px] text-slate-500">
              {item.location} · {item.period}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}

