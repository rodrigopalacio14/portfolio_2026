import { experience } from '../data/experience'

export default function Experience({ t }) {
  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">{t.experienceTitle}</p>
        <div className="mt-10 space-y-5">
          {experience.map(item => (
            <article key={item.company} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
              <div className="flex flex-col justify-between gap-2 md:flex-row">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <p className="text-accent">{item.company}</p>
                </div>
                <p className="text-sm text-slate-400">{item.period}</p>
              </div>
              <p className="mt-4 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
