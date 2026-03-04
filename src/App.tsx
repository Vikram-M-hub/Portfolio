import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { AboutSection } from './components/AboutSection'
import { CurrentSection } from './components/CurrentSection'
import { ExperienceSection } from './components/ExperienceSection'
import { CertificationsSection } from './components/CertificationsSection'
import { EducationSection } from './components/EducationSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSection } from './components/ContactSection'

function App() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <CurrentSection />
      <ExperienceSection />
      <CertificationsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  )
}

export default App
