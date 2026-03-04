import { motion } from 'framer-motion'
import { profile } from '../data/profile'

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="space-y-6"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-dark/80">
          Salesforce Developer
        </p>
        <h1
          id="hero-title"
          className="text-balance text-4xl font-semibold tracking-tight text-ink sm:text-[2.9rem]"
        >
          Hi, I&apos;m {profile.name}.
          <br />
          I build calm, powerful CRM experiences.
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-slate-600">
          {profile.heroIntro}
        </p>
        <p className="max-w-xl text-sm leading-relaxed text-slate-600">
          {profile.heroTagline}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs font-medium text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-shell"
          >
            View experience
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-brand hover:text-brand"
          >
            Let&apos;s connect
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        className="relative mx-auto w-full max-w-xs md:max-w-sm"
      >
        <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-brand-soft via-white to-emerald-50 opacity-80 blur-2xl" />
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-soft">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-ink">{profile.name}</p>
              <p className="text-[11px] text-slate-500">{profile.role}</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Open to roles
            </span>
          </div>
          <div className="mb-4 rounded-2xl bg-slate-900 px-4 py-6 text-xs text-slate-100">
            <p className="mb-2 text-[11px] font-medium text-emerald-300">
              Currently
            </p>
            <p className="text-[11px] leading-relaxed text-slate-100/90">
              {profile.currently}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-[10px]">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
              3x Salesforce Certified
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
              Google Cloud Digital Leader
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
              1+ years experience
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

