import { Section } from './Section'
import { profile } from '../data/profile'

export function AboutSection() {
  return (
    <Section
      id="about"
      label="Who I am & what I do"
      eyebrow="A quick snapshot"
    >
      <div className="max-w-xl space-y-3 text-xs leading-relaxed text-slate-600">
        <p>{profile.heroIntro}</p>
        <p>
          My journey at Cognizant started as a Certified Skill Development
          (CSD) Intern in the Salesforce domain, where I completed training
          with a green result and moved into a Programmer Analyst Trainee role.
          Working alongside senior associates on a live customer project, I
          learned Oracle Siebel in depth while continuing to grow my Salesforce
          skills.
        </p>
        <p>
          Today, as an Oracle Siebel Admin, I help maintain and configure
          application servers, tools, and components across environments, handle
          code and configuration migrations, monitor performance, and support
          patches and upgrades—while staying hands-on with Salesforce through
          certifications and practice projects.
        </p>
      </div>
    </Section>
  )
}

