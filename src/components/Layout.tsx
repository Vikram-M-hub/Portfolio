import type { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-soft/60 via-shell to-white text-ink">
      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <a
            href="#top"
            className="text-sm font-semibold tracking-tight text-ink"
          >
            Vikram<span className="text-brand">.</span>
          </a>
          <div className="flex gap-4 text-xs font-medium text-slate-600">
            <a href="#about" className="hover:text-brand transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-brand transition-colors">
              Experience
            </a>
            <a
              href="#certifications"
              className="hover:text-brand transition-colors"
            >
              Certifications
            </a>
            <a href="#projects" className="hover:text-brand transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-brand transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </header>
      <main
        id="top"
        className="mx-auto flex max-w-5xl px-4 py-10 pb-24"
      >
        <div className="w-full rounded-3xl border border-white/70 bg-white/90 p-6 shadow-soft backdrop-blur md:p-10">
          <div className="flex flex-col gap-20">{children}</div>
        </div>
      </main>
      <footer className="border-t border-slate-200 bg-white/60">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Vikram M</span>
          <span>Salesforce Developer · Open to global opportunities</span>
        </div>
      </footer>
    </div>
  )
}

