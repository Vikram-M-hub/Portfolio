import { Section } from './Section'
import { profile } from '../data/profile'

export function ContactSection() {
  return (
    <Section
      id="contact"
      label="Let’s connect"
      eyebrow="Say hello or share an opportunity"
    >
      <div className="flex flex-col gap-4 text-xs text-slate-600 md:flex-row md:items-center md:justify-between">
        <p className="max-w-md leading-relaxed">
          If you&apos;re hiring for Salesforce roles, collaborating on CRM
          projects, or just want to talk about building thoughtful systems,
          I&apos;d love to hear from you.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-xs font-medium text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            Email me
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-brand hover:text-brand"
          >
            LinkedIn
          </a>
          <a
            href={profile.linktree}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-brand hover:text-brand"
          >
            Linktree
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-brand hover:text-brand"
          >
            GitHub
          </a>
          <a
            href={profile.trailhead}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-brand hover:text-brand"
          >
            Trailhead
          </a>
          <a
            href={profile.medium}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-brand hover:text-brand"
          >
            Medium
          </a>
          <a
            href={profile.hackerrank}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-brand hover:text-brand"
          >
            HackerRank
          </a>
        </div>
      </div>
    </Section>
  )
}

