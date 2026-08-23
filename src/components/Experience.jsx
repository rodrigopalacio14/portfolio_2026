import { experience } from '../data/experience'

export default function Experience({ t, lang }) {
  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-slate-50 to-slate-100 py-20 text-slate-950 md:py-24"
    >
      <div className="section-container">
        <p className="section-kicker text-cyan-700">
          {t.experienceTitle}
        </p>

        <div className="mt-12 space-y-6">
          {experience[lang].map(item => (
            <article
              key={`${item.company}-${item.role}`}
              className={`
                relative
                overflow-hidden
                rounded-[24px]
                border
                p-7
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                ${
                  item.featured
                    ? 'border-cyan-200 bg-white shadow-cyan-950/10'
                    : 'border-slate-200 bg-white/80 shadow-slate-200/80'
                }
              `}
            >
              <div className={`absolute left-0 top-0 h-full w-1 ${item.featured ? 'bg-gradient-to-b from-cyan-400 to-blue-500' : 'bg-slate-300'}`} />

              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <h3 className="text-xl font-bold text-slate-950 md:text-2xl">
                    {item.role}
                  </h3>

                  <p className="mt-1 font-medium text-cyan-700">
                    {item.company}
                  </p>
                </div>

                <p className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600">
                  {item.period}
                </p>
              </div>

              <p className="mt-5 max-w-5xl text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
