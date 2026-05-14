import { projects } from '../data/projects'

export default function Projects({ t }) {
  return (
    <section id="projects" className="bg-slate-900/60 py-20">
      <div className="section-container">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">{t.projectsTitle}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold text-white md:text-4xl">{t.projectsSubtitle}</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map(project => (
            <article key={project.title} className="rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-xl">
              <p className="text-sm text-accent">{project.role}</p>
              <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
              <div className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                <p><strong className="text-white">Problema:</strong> {project.problem}</p>
                <p><strong className="text-white">Solución:</strong> {project.solution}</p>
                <p><strong className="text-white">Resultado:</strong> {project.result}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map(item => <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
