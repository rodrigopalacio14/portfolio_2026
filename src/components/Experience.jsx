import { experience } from '../data/experience'

export default function Experience({ t, lang }) {
  return (
    <section id="experience" className="bg-slate-900 py-20 text-white md:py-24">
      <div className="section-container">
        <div className="max-w-4xl">
          <p className="section-kicker text-cyan-300">{t.experienceTitle}</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
            {t.experienceSubtitle}
          </h2>
        </div>

        <div className="mt-12 border-l border-slate-700">
          {experience[lang].map(item => (
            <article key={`${item.company}-${item.role}`} className="timeline-item">
              <div className="timeline-dot" aria-hidden="true" />

              <div className="grid gap-4 md:grid-cols-[220px_1fr]">
                <p className="text-sm font-semibold text-cyan-300">{item.period}</p>

                <div>
                  <h3 className="text-xl font-bold text-white md:text-2xl">{item.company}</h3>
                  <p className="mt-1 text-base font-medium text-slate-300">{item.role}</p>
                  <p
                    className={`mt-5 max-w-4xl text-sm leading-7 ${
                      item.featured ? 'text-slate-200' : 'text-slate-400'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
