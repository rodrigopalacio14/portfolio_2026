import { Globe } from 'lucide-react'

export default function Navbar({ lang, setLang, t }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="section-container flex h-16 items-center justify-between">
        <a href="#home" className="font-bold tracking-tight text-white">Rodrigo Palacio</a>
        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#profile" className="hover:text-white">{t.nav.profile}</a>
          <a href="#projects" className="hover:text-white">{t.nav.projects}</a>
          <a href="#experience" className="hover:text-white">{t.nav.experience}</a>
          <a href="#stack" className="hover:text-white">{t.nav.stack}</a>
          <a href="#contact" className="hover:text-white">{t.nav.contact}</a>
        </div>
        <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white hover:border-accent hover:text-accent">
          <Globe size={16} /> {lang === 'es' ? 'EN' : 'ES'}
        </button>
      </nav>
    </header>
  )
}
