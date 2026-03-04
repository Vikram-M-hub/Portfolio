import { Section } from './Section'
import { profile } from '../data/profile'

export function CurrentSection() {
  return (
    <Section
      id="current"
      label="What I’m doing right now"
      eyebrow="Current focus"
    >
      <div className="grid gap-4 text-xs md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <p className="max-w-xl leading-relaxed text-slate-600">
          {profile.currently}
        </p>
        <div className="space-y-2 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
          <h3 className="text-[12px] font-semibold text-ink">
            Day-to-day highlights
          </h3>
          <ul className="space-y-1.5 text-[11px] leading-relaxed text-slate-600">
            <li>Administering and tuning Siebel CRM for enterprise environments.</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}

