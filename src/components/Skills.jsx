import { skillGroups } from '../data/content'

export default function Skills({ t, lang }) {
  return (
    <section id="stack" className="bg-slate-900 py-20 md:py-24">
      <div className="section-container">
        <p className="section-kicker text-cyan-300">{t.stackTitle}</p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups[lang].map(group => (
            <article
              key={group.title}
              className="rounded-[24px] border border-white/10 bg-white/[0.07] p-6 shadow-xl shadow-slate-950/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25"
            >
              <h3 className="text-xl font-bold text-white">{group.title}</h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span key={item} className="pill border-white/10 bg-white/[0.08] text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
