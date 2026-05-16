import { useEffect, useState } from 'react'
import { Globe, Menu, X } from 'lucide-react'

export default function Navbar({ lang, setLang, t }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'profile', label: t.nav.profile },
    { id: 'projects', label: t.nav.projects },
    { id: 'experience', label: t.nav.experience },
    { id: 'stack', label: t.nav.stack },
    { id: 'contact', label: t.nav.contact }
  ]

  useEffect(() => {
    const sections = ['home', ...navItems.map(item => item.id)]

    const handleScroll = () => {
      const current = sections.findLast(sectionId => {
        const element = document.getElementById(sectionId)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top <= 120
      })

      if (current) {
        setActiveSection(current)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lang])

  const handleNavigate = () => {
    setIsOpen(false)
  }

  const linkClass = id =>
    `
      rounded-full px-3 py-2 transition
      ${
        activeSection === id
          ? 'bg-cyan-400/15 text-cyan-300'
          : 'text-slate-300 hover:bg-white/5 hover:text-white'
      }
    `

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <nav className="section-container flex h-16 items-center justify-between">
        <a
          href="#home"
          onClick={handleNavigate}
          className={`font-bold tracking-tight transition ${
            activeSection === 'home' ? 'text-cyan-300' : 'text-white'
          }`}
        >
          Rodrigo Palacio
        </a>

        <div className="hidden items-center gap-2 text-sm md:flex">
          {navItems.map(item => (
            <a key={item.id} href={`#${item.id}`} className={linkClass(item.id)}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="
                flex items-center gap-2
                rounded-full
                bg-gradient-to-r from-cyan-400 to-blue-500
                px-4 py-2
                text-sm font-semibold
                text-white
                shadow-lg shadow-cyan-500/25
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-cyan-400/40
              "
            >
              <Globe size={16} />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-accent hover:text-accent md:hidden"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-md flex-col gap-2">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavigate}
                className={`
                  rounded-2xl px-4 py-3 text-sm font-medium transition
                  ${
                    activeSection === item.id
                      ? 'bg-cyan-400/15 text-cyan-300'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}