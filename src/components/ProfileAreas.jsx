import { areas } from '../data/content'

export default function ProfileAreas({ t, lang }) {
  return (
    <section id="profile" className="bg-white py-20 text-slate-950 md:py-24">
      <div className="section-container">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="section-kicker text-cyan-700">{t.areasTitle}</p>
            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight md:text-4xl">
              {t.areasSubtitle}
            </h2>
          </div>

          <div className="grid border-t border-slate-200 md:grid-cols-2">
            {areas[lang].map((area, index) => (
              <article
                key={area.title}
                className={`border-b border-slate-200 py-7 md:p-7 ${
                  index % 2 === 0 ? 'md:border-r' : ''
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-700">
                  {area.title}
                </p>
                <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
