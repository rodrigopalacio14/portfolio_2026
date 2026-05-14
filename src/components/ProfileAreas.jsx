import { areas } from '../data/content'

export default function ProfileAreas({ t }) {
  return (
    <section id="profile" className="py-20">
      <div className="section-container">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">{t.areasTitle}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold text-white md:text-4xl">{t.areasSubtitle}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {areas.map(area => (
            <article key={area.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6">
              <h3 className="text-xl font-semibold text-white">{area.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
