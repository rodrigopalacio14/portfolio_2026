import { ExternalLink } from 'lucide-react'
import { featuredProject } from '../data/projects'
import SystemArchitecture from './SystemArchitecture'

export default function FeaturedProject({ t, lang }) {
  const project = featuredProject[lang]

  return (
    <article className="featured-project">
      <div className="featured-project-intro">
        <div>
          <p className="section-kicker text-cyan-700">{project.categoryLabel}</p>
          <h3 className="mt-4 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            {project.title}
          </h3>
          <p className="mt-3 text-xl font-semibold text-slate-700">{project.subtitle}</p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">{project.intro}</p>
        </div>

        <a
          href={project.site}
          target="_blank"
          rel="noreferrer"
          className="featured-project-link"
        >
          <ExternalLink size={16} />
          {t.projectLabels.viewNispero}
        </a>
      </div>

      <div className="featured-built">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-950">
          {t.projectLabels.builtTitle}
        </p>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">{project.built}</p>
        <p className="mt-5 text-sm font-semibold leading-7 text-slate-800">
          {project.stack.join(' · ')}
        </p>
      </div>

      <SystemArchitecture t={t} />

      <div className="featured-implementations">
        <p className="section-kicker text-cyan-700">{t.projectLabels.implementations}</p>

        <div className="featured-implementation-grid">
          {project.implementations.map(item => (
            <div className="featured-implementation" key={item.name}>
              <h4 className="text-lg font-bold uppercase tracking-[0.12em] text-slate-950">
                {item.name}
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              {item.site ? (
                <a
                  href={item.site}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
                >
                  {t.projectLabels.site}
                  <span aria-hidden="true">→</span>
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
