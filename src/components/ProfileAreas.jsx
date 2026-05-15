import { areas } from '../data/content'

export default function ProfileAreas({ t, lang }) {
  return (
    <section
      id="profile"
      className="bg-gradient-to-b from-slate-950 to-slate-900/80 py-24"
    >
      <div className="section-container">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          {t.areasTitle}
        </p>

        <h2 className="mt-3 max-w-4xl text-3xl font-bold text-white md:text-4xl">
          {t.areasSubtitle}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {areas[lang].map(area => (
            <article
              key={area.title}
              className="
                group
                rounded-3xl
                border border-white/10
                bg-gradient-to-br from-white/[0.08] to-white/[0.03]
                p-7
                shadow-xl
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:bg-white/[0.09]
                hover:shadow-cyan-500/10
              "
            >
              <div
                className="
                  mb-5
                  h-1.5
                  w-14
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                "
              />

              <h3 className="text-xl font-semibold text-white">
                {area.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}