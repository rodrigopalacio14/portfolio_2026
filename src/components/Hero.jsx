export default function Hero({ t }) {
  const tags = ["SQL", "Power BI", "ERP", "C#", ".NET", "BI", "Data Analytics", "Process Optimization"]

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#14b8a633,transparent_35%),radial-gradient(circle_at_top_left,#3b82f633,transparent_30%)]" />
      <div className="section-container grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">{t.hero.eyebrow}</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">{t.hero.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{t.hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-accent px-6 py-3 font-semibold text-slate-950 hover:bg-teal-300">{t.hero.primary}</a>
            <a href="/cv-rodrigo-palacio.pdf" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:border-accent">{t.hero.secondary}</a>
            <a href="https://www.linkedin.com/in/rodrigo-sebastian-palacio-schunke-07438613a/" target="_blank" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:border-accent">{t.hero.linkedin}</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map(tag => <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">{tag}</span>)}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
          <div className="rounded-2xl bg-slate-950 p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-accent">Profile</p>
            <h2 className="mt-4 text-3xl font-bold text-white">Data + Business + Systems</h2>
            <p className="mt-4 text-slate-300">Un perfil híbrido para resolver problemas reales con datos, procesos y tecnología.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-white/10 p-4">BI Reporting</div>
              <div className="rounded-xl bg-white/10 p-4">ERP Analysis</div>
              <div className="rounded-xl bg-white/10 p-4">SQL Data</div>
              <div className="rounded-xl bg-white/10 p-4">Dev Foundations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
