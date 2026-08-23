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
    { id: 'work', label: t.nav.work },
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
      border-b px-2 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300
      ${
        activeSection === id
          ? 'border-cyan-300 text-cyan-300'
          : 'border-transparent text-slate-300 hover:border-white/30 hover:text-white'
      }
    `

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
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

        <div className="hidden items-center gap-1 text-sm lg:flex">
          {navItems.map(item => (
            <a key={item.id} href={`#${item.id}`} className={linkClass(item.id)}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="flex items-center gap-2 border border-cyan-300/40 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              <Globe size={16} />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center border border-white/15 text-white transition hover:border-cyan-300 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 lg:hidden"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-md flex-col gap-2">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavigate}
                className={`
                  border-l px-4 py-3 text-sm font-medium transition
                  ${
                    activeSection === item.id
                      ? 'border-cyan-300 text-cyan-300'
                      : 'border-white/10 text-slate-300 hover:border-white/30 hover:text-white'
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
