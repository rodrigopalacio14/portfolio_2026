import { Download, MessageCircle } from 'lucide-react'
import profileImg from '../assets/profile/rodrigo-profile.png'

export default function Hero({ t, lang }) {
  return (
    <section id="home" className="bg-slate-950 pt-28 pb-16 text-white md:pt-32 md:pb-24">
      <div className="section-container grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p className="section-kicker text-cyan-300">{t.hero.eyebrow}</p>

          <p className="mt-8 text-2xl font-semibold text-white md:text-3xl">
            {t.hero.name}
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
            {t.hero.title}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            {t.hero.description}
          </p>

          <p className="mt-5 max-w-2xl border-l border-cyan-300/50 pl-4 text-sm leading-7 text-slate-400">
            {t.hero.evidence}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              {t.hero.primary}
            </a>

            <a
              href={lang === 'es' ? '/cv-rodrigo-palacio.pdf' : '/cv-rodrigo-palacio-en.pdf'}
              download
              className="btn-secondary"
            >
              <Download size={18} />
              {t.hero.secondary}
            </a>

            <a
              href="https://www.linkedin.com/in/rodrigo-sebastian-palacio-schunke-07438613a/"
              target="_blank"
              rel="noreferrer"
              className="btn-link"
              aria-label={t.hero.linkedin}
            >
              {t.hero.linkedin}
            </a>

            <a
              href="https://wa.me/5493517868252"
              target="_blank"
              rel="noreferrer"
              className="btn-link"
              aria-label={t.hero.whatsapp}
            >
              <MessageCircle size={18} />
              {t.hero.whatsapp}
            </a>
          </div>
        </div>

        <figure className="lg:justify-self-end">
          <div className="overflow-hidden border border-white/15 bg-slate-900">
            <img
              src={profileImg}
              alt="Rodrigo Palacio"
              className="aspect-[4/5] w-full max-w-[520px] object-cover"
            />
          </div>

          <figcaption className="mt-4 flex flex-col gap-1 border-t border-white/10 pt-4 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
            <span>{t.hero.location}</span>
            <span className="text-cyan-300">{t.hero.availability}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
