import { ExternalLink, Image as ImageIcon } from 'lucide-react'
import { useMemo, useState } from 'react'
import { projects } from '../data/projects'

export default function Projects({ t, lang }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects[lang]
    return projects[lang].filter(project => project.category === activeFilter)
  }, [activeFilter, lang])

  const ctaLabels = {
    demo: t.projectLabels.demo,
    site: t.projectLabels.site,
    github: t.projectLabels.github
  }

  return (
    <section id="projects" className="bg-slate-50 py-20 text-slate-950 md:py-24">
      <div className="section-container">
        <div>
          <p className="section-kicker text-cyan-700">{t.projectsTitle}</p>

          <h2 className="mt-3 max-w-4xl text-3xl font-bold text-slate-950 md:text-4xl">
            {t.projectsSubtitle}
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {t.projectFilters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 ${
                activeFilter === filter.id
                  ? 'border-cyan-500 bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-cyan-300 hover:text-slate-950'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-7 xl:grid-cols-2">
          {filteredProjects.map(project => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-lg shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10"
            >
              {project.image ? (
                <div className="relative overflow-hidden border-b border-slate-100 bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    onClick={() => setSelectedImage(project)}
                    className="h-64 w-full cursor-pointer object-cover transition duration-500 group-hover:scale-[1.02] md:h-72"
                  />

                  <button
                    onClick={() => setSelectedImage(project)}
                    className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/70 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-cyan-400 hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
                  >
                    <ImageIcon size={16} />
                    {t.projectLabels.viewImage}
                  </button>
                </div>
              ) : (
                <div className="border-b border-slate-100 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 p-7 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                    {project.categoryLabel}
                  </p>
                  <div className="mt-8 h-24 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                    <p className="text-sm font-semibold text-slate-100">
                      Systems, Data & Software
                    </p>
                    <p className="mt-2 text-sm text-slate-300">{project.title}</p>
                  </div>
                </div>
              )}

              <div className="p-6 md:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-cyan-700">
                    {project.categoryLabel}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {project.role}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold leading-tight text-slate-950">
                  {project.title}
                </h3>

                <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                  <p>
                    <strong className="text-slate-950">{t.projectLabels.problem}</strong>{' '}
                    {project.problem}
                  </p>

                  <p>
                    <strong className="text-slate-950">{t.projectLabels.solution}</strong>{' '}
                    {project.solution}
                  </p>

                  <p>
                    <strong className="text-slate-950">{t.projectLabels.result}</strong>{' '}
                    {project.result}
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map(item => (
                    <span key={item} className="pill border-slate-200 bg-slate-50 text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>

                {project.links && (
                  <div className="mt-7 flex flex-wrap gap-3">
                    {Object.entries(project.links).map(([type, href]) => (
                      href ? (
                        <a
                          key={type}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
                        >
                          <ExternalLink size={16} />
                          {ctaLabels[type]}
                        </a>
                      ) : null
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md"
          role="presentation"
        >
          <div className="relative" onClick={event => event.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[86vh] max-w-[94vw] rounded-2xl border border-white/10 shadow-2xl shadow-cyan-950/40"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-950 shadow-xl transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              aria-label="Close"
            >
              x
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
