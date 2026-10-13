import { useEffect, useState } from 'react'
import { content } from './data/content'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProfileAreas from './components/ProfileAreas'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'es')

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const t = content[lang]

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} lang={lang} />
      <ProfileAreas t={t} lang={lang} />
      <Projects t={t} lang={lang} />
      <Experience t={t} lang={lang} />
      <Skills t={t} lang={lang} />
      <Contact t={t} lang={lang} />
    </main>
  )
}
