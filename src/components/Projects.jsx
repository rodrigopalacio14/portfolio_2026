import { ExternalLink, Image as ImageIcon } from 'lucide-react'
import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import FeaturedProject from './FeaturedProject'

function ProjectVisual({ project, t, onOpen }) {
  if (!project.image) {
    return null
  }

  return (
    <figure className="project-visual">
      <img src={project.image} alt={project.title} className="w-full object-contain" />
      <button
        onClick={() => onOpen(project)}
        className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
      >
        <ImageIcon size={16} />
        {t.projectLabels.viewImage}
      </button>
    </figure>
  )
}

function ProjectLinks({ links, labels }) {
  if (!links) return null

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {Object.entries(links).map(([type, href]) =>
        href ? (
          <a
            key={type}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-cyan-500 hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
          >
            <ExternalLink size={16} />
            {labels[type]}
          </a>
        ) : null
      )}
    </div>
  )
}

export default function Projects({ t, lang }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')
  const [showMore, setShowMore] = useState(false)

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects[lang]
    return projects[lang].filter(project => project.category === activeFilter)
  }, [activeFilter, lang])

  const visibleProjects =
    activeFilter === 'all' && !showMore ? filteredProjects.slice(0, 4) : filteredProjects

  const hasMore = activeFilter === 'all' && filteredProjects.length > 4

  const ctaLabels = {
    demo: t.projectLabels.demo,
    site: t.projectLabels.site,
    github: t.projectLabels.github
  }

  return (
    <section id="projects" className="bg-slate-50 py-20 text-slate-950 md:py-24">
      <div className="section-container">
        <div className="max-w-4xl">
          <p className="section-kicker text-cyan-700">{t.projectsTitle}</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
            {t.projectsSubtitle}
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-y border-slate-200 py-4">
          {t.projectFilters.map(filter => (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id)
                setShowMore(false)
              }}
              className={`text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 ${
                activeFilter === filter.id
                  ? 'text-cyan-700'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {activeFilter === 'all' || activeFilter === 'development' ? (
          <FeaturedProject t={t} lang={lang} />
        ) : null}

        <div className="mt-14 space-y-14">
          {visibleProjects.map((project, index) => {
            const imageFirst = index % 2 === 0

            return (
              <article
                key={project.title}
                className={`project-case ${imageFirst ? '' : 'project-case-reverse'}`}
              >
                <ProjectVisual project={project} t={t} onOpen={setSelectedImage} />

                <div className="project-copy">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                    <span className="font-bold uppercase tracking-[0.14em] text-cyan-700">
                      {project.categoryLabel}
                    </span>
                    <span className="text-slate-500">{project.role}</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold leading-tight text-slate-950 md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                    {project.context}
                  </p>

                  <div className="project-detail-grid">
                    <div>
                      <p className="text-sm font-bold text-slate-950">{t.projectLabels.contribution}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{project.contribution}</p>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-950">{t.projectLabels.impact}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{project.impact}</p>
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-slate-700">
                    <strong className="text-slate-950">{t.projectLabels.technologies}:</strong>{' '}
                    {project.stack.join(' · ')}
                  </p>

                  <ProjectLinks links={project.links} labels={ctaLabels} />
                </div>
              </article>
            )
          })}
        </div>

        {hasMore ? (
          <div className="mt-14 border-t border-slate-200 pt-8 text-center">
            <button
              onClick={() => setShowMore(value => !value)}
              className="border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-cyan-500 hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
            >
              {showMore ? t.projectLabels.viewLess : t.projectLabels.viewMore}
            </button>
          </div>
        ) : null}
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4"
          role="presentation"
        >
          <div className="relative" onClick={event => event.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[86vh] max-w-[94vw] border border-white/10 bg-white"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center bg-white text-slate-950 shadow-xl transition hover:bg-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              aria-label={t.common.close}
            >
              x
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
