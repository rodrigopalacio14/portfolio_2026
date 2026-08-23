import { workSteps } from '../data/content'

export default function HowIWork({ t, lang }) {
  return (
    <section id="work" className="bg-slate-50 py-20 text-slate-950 md:py-24">
      <div className="section-container">
        <p className="section-kicker text-cyan-700">{t.workTitle}</p>

        <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
          {t.workSubtitle}
        </h2>

        <div className="mt-12 process-line">
          {workSteps[lang].map((step, index) => (
            <div key={step.title} className="process-step">
              <div>
                <p className="text-sm font-bold text-cyan-700">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </div>

              {index < workSteps[lang].length - 1 ? (
                <span className="process-arrow" aria-hidden="true">
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
