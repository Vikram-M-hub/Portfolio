import { Section } from './Section'
import { projectsAndResearch } from '../data/profile'

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      label="Projects & Research"
      eyebrow="Work I’m proud of"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projectsAndResearch.map((project) => (
          <article
            key={project.title}
            className="group rounded-2xl border border-slate-200 bg-white/80 p-4 text-xs shadow-sm transition hover:-translate-y-1 hover:border-brand hover:shadow-soft"
          >
            <h3 className="mb-1 text-[13px] font-semibold text-ink">
              {project.title}
            </h3>
            <p className="mb-2 text-[11px] leading-relaxed text-slate-600">
              {project.description}
            </p>
            <ul className="space-y-1.5 text-[11px] leading-relaxed text-slate-600">
              {project.highlights?.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-slate-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}

