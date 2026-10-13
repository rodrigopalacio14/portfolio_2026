import { ArrowUpRight, Plus } from 'lucide-react'
import { featuredProject } from '../data/projects'
import SystemArchitecture from './SystemArchitecture'

export default function FeaturedProject({ t, lang, onOpenImage }) {
  const project = featuredProject[lang]
  const es = lang === 'es'
  return (
    <article className="palaya-showcase" aria-labelledby="palaya-title">
      <div className="palaya-heading">
        <div>
          <p className="section-kicker">{es ? 'Producto propio · Desarrollo full stack' : 'Own product · Full stack development'}</p>
          <h3 id="palaya-title">Palaya<span> app</span></h3>
          <p className="palaya-statement">{es ? 'Una plataforma. Tres identidades.' : 'One platform. Three identities.'}</p>
          <p className="palaya-description">{project.intro}</p>
        </div>
        <a href={project.site} target="_blank" rel="noreferrer" className="palaya-site">{es ? 'Explorar Palaya' : 'Explore Palaya'} <ArrowUpRight size={18} /></a>
      </div>
      <div className="palaya-cases">
        {project.implementations.map((item, index) => (
          <article className={`palaya-case palaya-case-${item.slug}`} key={item.name}>
            <div className="palaya-browser"><span aria-hidden="true">● ● ●</span><span>palaya.app/{item.slug}</span></div>
            <button className="palaya-preview" onClick={() => onOpenImage({ image: item.image, title: item.name })} aria-label={`${t.projectLabels.viewImage}: ${item.name}`}>
              <img src={item.image} alt={es ? `Captura real del sitio de ${item.name}` : `Actual ${item.name} website screenshot`} loading="lazy" width="700" height="1000" />
              <span className="palaya-enlarge"><Plus size={16} /> {t.projectLabels.viewImage}</span>
            </button>
            <div className="palaya-case-copy">
              <p className="palaya-case-sector"><span>0{index + 1}</span> {item.sector}</p>
              <h4>{item.name}</h4><p>{item.description}</p>
              <a href={item.site} target="_blank" rel="noreferrer">{t.projectLabels.site}<ArrowUpRight size={18} /></a>
            </div>
          </article>
        ))}
      </div>
      <div className="palaya-foundation">
        <div><p className="section-kicker">{t.projectLabels.builtTitle}</p><p>{project.built}</p></div>
        <div className="palaya-stack" aria-label={t.projectLabels.technologies}>{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div>
      </div>
      <details className="palaya-technical"><summary>{es ? 'Ver arquitectura y detalles técnicos' : 'View architecture and technical details'}</summary><SystemArchitecture t={t} /></details>
    </article>
  )
}
