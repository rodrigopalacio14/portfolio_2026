import { workSteps } from '../data/content'

export default function HowIWork({ t, lang }) {
  return (
    <section id="work" className="bg-slate-50 py-20 text-slate-950 md:py-24">
      <div className="section-container">
        <p className="section-kicker text-cyan-700">{t.workTitle}</p>

        <h2 className="mt-3 max-w-3xl text-3xl font-bold text-slate-950 md:text-4xl">
          {t.workSubtitle}
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {workSteps[lang].map((step, index) => (
            <article
              key={step.title}
              className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:border-cyan-200"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-sm font-bold text-cyan-700">
                {index + 1}
              </span>

              <h3 className="mt-5 text-lg font-bold text-slate-950">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
