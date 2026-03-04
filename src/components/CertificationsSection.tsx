import { Section } from './Section'
import { certifications } from '../data/profile'

export function CertificationsSection() {
  return (
    <Section
      id="certifications"
      label="Certifications"
      eyebrow="Credentials that back my work"
    >
      <div className="flex flex-wrap gap-2">
        {certifications.map((cert) => (
          <span
            key={cert}
            className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[11px] text-slate-700 shadow-sm"
          >
            {cert}
          </span>
        ))}
      </div>
    </Section>
  )
}

