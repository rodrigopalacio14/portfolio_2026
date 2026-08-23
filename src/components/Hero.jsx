import { Download, MessageCircle } from 'lucide-react'
import profileImg from '../assets/profile/rodrigo-profile.png'

export default function Hero({ t, lang }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 pt-28 pb-20 md:pt-32 md:pb-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#020617_0%,#0f2746_42%,#0f172a_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(45,212,191,0.22),transparent_28%),radial-gradient(circle_at_82%_10%,rgba(96,165,250,0.24),transparent_30%),linear-gradient(180deg,transparent_0%,rgba(15,23,42,0.92)_100%)]" />

      <div className="section-container relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200 md:text-sm">
            {t.hero.eyebrow}
          </p>

          <h1 className="max-w-5xl text-4xl font-bold leading-tight text-white md:text-6xl">
            {t.hero.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
            {t.hero.description}
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
              className="icon-button bg-[#0A66C2] hover:bg-[#004182]"
              aria-label={t.hero.linkedin}
              title={t.hero.linkedin}
            >
              <span className="text-lg font-bold">in</span>
            </a>

            <a
              href="https://wa.me/5493517868252"
              target="_blank"
              rel="noreferrer"
              className="icon-button bg-[#25D366] hover:bg-[#1ebe5d]"
              aria-label={t.hero.whatsapp}
              title={t.hero.whatsapp}
            >
              <MessageCircle size={20} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {t.hero.tags.map(tag => (
              <span key={tag} className="pill border-cyan-200/15 bg-white/10 text-slate-100">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <aside className="rounded-[28px] border border-white/15 bg-white/[0.12] p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
          <div className="rounded-[22px] border border-white/10 bg-slate-50/95 p-6 text-slate-950 shadow-inner md:p-7">
            <div className="grid gap-6 sm:grid-cols-[auto_1fr] lg:grid-cols-1">
              <img
                src={profileImg}
                alt="Rodrigo Palacio"
                className="h-40 w-40 rounded-2xl border border-slate-200 object-cover shadow-xl shadow-cyan-900/10 sm:h-44 sm:w-44 lg:mx-auto"
              />

              <div className="lg:text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">
                  {t.hero.sideEyebrow}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-950">
                  {t.hero.sideTitle}
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {t.hero.sideText}
                </p>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {t.hero.sideCards.map(item => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
