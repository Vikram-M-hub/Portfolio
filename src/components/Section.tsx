import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type SectionProps = {
  id: string
  label: string
  eyebrow?: string
  children: ReactNode
}

export function Section({ id, label, eyebrow, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="space-y-5"
      >
        <div className="space-y-2">
          {eyebrow ? (
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={`${id}-title`}
            className="text-lg font-semibold tracking-tight text-ink"
          >
            {label}
          </h2>
        </div>
        {children}
      </motion.div>
    </section>
  )
}

