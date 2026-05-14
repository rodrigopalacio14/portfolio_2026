export default function Skills({ t }) {
  const groups = [
    { title: "Data & BI", items: ["Power BI", "SQL", "Looker", "Databricks", "Excel", "ETL", "DAX"] },
    { title: "Development", items: ["C#", ".NET", "WinForms", "React", "JavaScript", "HTML/CSS", "Git"] },
    { title: "Business", items: ["ERP", "Dynamics", "Functional Analysis", "KPIs", "Process Analysis", "Stakeholders"] },
  ]

  return (
    <section id="stack" className="bg-slate-900/60 py-20">
      <div className="section-container">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">{t.stackTitle}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {groups.map(group => (
            <article key={group.title} className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <h3 className="text-xl font-bold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map(item => <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
