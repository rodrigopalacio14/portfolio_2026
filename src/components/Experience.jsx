import { experience } from '../data/experience'

export default function Experience({ t, lang }) {
  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-slate-950 to-slate-900/80 py-24"
    >
      <div className="section-container">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          {t.experienceTitle}
        </p>

        <div className="mt-12 space-y-6">
          {experience[lang].map(item => (
            <article
              key={`${item.company}-${item.role}`}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-gradient-to-br from-white/[0.08] to-white/[0.03]
                p-7
                shadow-xl
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/25
                hover:shadow-cyan-500/10
              "
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-500" />

              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {item.role}
                  </h3>

                  <p className="mt-1 font-medium text-cyan-300">
                    {item.company}
                  </p>
                </div>

                <p className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-300">
                  {item.period}
                </p>
              </div>

              <p className="mt-5 max-w-5xl text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}