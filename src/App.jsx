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
    <main>
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <ProfileAreas t={t} />
      <Projects t={t} />
      <Experience t={t} />
      <Skills t={t} />
      <Contact t={t} />
    </main>
  )
}
