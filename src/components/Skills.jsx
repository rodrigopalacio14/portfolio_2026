import { skillGroups } from '../data/content'

export default function Skills({ t, lang }) {
  return (
    <section id="stack" className="bg-white py-20 text-slate-950 md:py-24">
      <div className="section-container">
        <div className="max-w-4xl">
          <p className="section-kicker text-cyan-700">{t.stackTitle}</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
            {t.stackSubtitle}
          </h2>
        </div>

        <div className="mt-12 grid border-t border-slate-200 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups[lang].map((group, index) => (
            <article
              key={group.title}
              className={`border-b border-slate-200 py-7 sm:p-7 ${
                index % 2 === 0 ? 'sm:border-r' : ''
              } ${index < 3 ? 'xl:border-r' : ''}`}
            >
              <h3 className="text-sm font-bold tracking-[0.16em] text-cyan-700">
                {group.title}
              </h3>

              <ul className="mt-5 space-y-2 text-base leading-7 text-slate-700">
                {group.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
