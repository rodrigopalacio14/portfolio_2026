import profileImg from '../assets/profile/rodrigo-profile.png'
import { Download, MessageCircle } from 'lucide-react'
export default function Hero({ t, lang }) {
  const tags = [
    'SQL',
    'Power BI',
    'ERP',
    'C#',
    '.NET',
    'BI',
    'Data Analytics',
    'Process Optimization'
  ]

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-32 pb-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#14b8a633,transparent_35%),radial-gradient(circle_at_top_left,#3b82f633,transparent_30%)]" />

      <div className="section-container grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            {t.hero.eyebrow}
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            {t.hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {t.hero.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
                  href="#projects"
                  className="
                    rounded-full
                    border border-cyan-300/30
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500
                    px-6 py-3
                    font-semibold
                    text-white
                    shadow-lg shadow-cyan-500/25
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-cyan-400/40
                  "
                >
                  {t.hero.primary}
                </a>

            <a
              href={
                lang === 'es'
                  ? '/cv-rodrigo-palacio.pdf'
                  : '/cv-rodrigo-palacio-en.pdf'
              }
              download
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-cyan-300/30
                bg-gradient-to-r from-cyan-400 to-blue-500
                px-6 py-3
                font-semibold
                text-white
                shadow-lg shadow-cyan-500/25
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-cyan-400/40
              "
            >
              <Download size={18} />
              {t.hero.secondary}
            </a>

              <a
                href="https://www.linkedin.com/in/rodrigo-sebastian-palacio-schunke-07438613a/"
                target="_blank"
                rel="noreferrer"
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-full
                  bg-[#0A66C2]
                  text-white
                  shadow-lg shadow-blue-600/25
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:scale-105
                  hover:bg-[#004182]
                "
              >
                <span className="text-lg font-bold">in</span>
              </a>

              <a
                href="https://wa.me/5493517868252"
                target="_blank"
                rel="noreferrer"
                className="
                  flex h-12 w-12 items-center justify-center
                  rounded-full
                  bg-[#25D366]
                  text-white
                  shadow-lg shadow-green-500/25
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:scale-105
                  hover:bg-[#1ebe5d]
                "
              >
                <MessageCircle size={20} />
              </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map(tag => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-sm text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <aside className="rounded-[32px] border border-white/10 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-md">
          <div className="rounded-[26px] border border-white/10 bg-slate-900/90 p-7">
            <div className="flex flex-col items-center text-center">
              <img
                src={profileImg}
                alt="Rodrigo Palacio"
                className="h-44 w-44 rounded-3xl border border-white/10 object-cover shadow-[0_0_60px_rgba(20,184,166,0.18)]"
              />

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                {t.hero.sideEyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white">
                {t.hero.sideTitle}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {t.hero.sideText}
              </p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 text-sm">
              {t.hero.sideCards.map(item => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 text-center text-slate-200"
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