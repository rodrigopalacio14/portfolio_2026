import { useState } from 'react'
import { projects } from '../data/projects'

export default function Projects({ t, lang }) {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-slate-900/80 to-slate-950 py-24"
    >
      <div className="section-container">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          {t.projectsTitle}
        </p>

        <h2 className="mt-3 max-w-4xl text-3xl font-bold text-white md:text-4xl">
          {t.projectsSubtitle}
        </h2>

        <div className="mt-14 grid gap-8 xl:grid-cols-2">
          {projects[lang].map(project => (
            <article
              key={project.title}
              className="
                overflow-hidden
                rounded-[28px]
                border border-white/10
                bg-gradient-to-br
                from-white/[0.07]
                to-white/[0.03]
                shadow-2xl
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/20
                hover:shadow-cyan-500/10
              "
            >
              {project.image && (
                <div className="group relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    onClick={() => setSelectedImage(project.image)}
                    className="
                      h-72
                      w-full
                      cursor-pointer
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-[1.02]
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  <button
                    onClick={() => setSelectedImage(project.image)}
                    className="
                      absolute bottom-5 right-5
                      rounded-full
                      border border-white/20
                      bg-black/50
                      px-5 py-2
                      text-sm font-semibold text-white
                      backdrop-blur-md
                      transition
                      hover:bg-cyan-400
                      hover:text-slate-950
                    "
                  >
                    {lang === 'es' ? 'Ampliar' : 'View'}
                  </button>
                </div>
              )}

              <div className="p-7">
                <p className="text-sm font-medium text-cyan-300">
                  {project.role}
                </p>

                <h3 className="mt-2 text-2xl font-bold leading-tight text-white">
                  {project.title}
                </h3>

                <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                  <p>
                    <strong className="text-white">
                      {lang === 'es' ? 'Problema:' : 'Problem:'}
                    </strong>{' '}
                    {project.problem}
                  </p>

                  <p>
                    <strong className="text-white">
                      {lang === 'es' ? 'Solución:' : 'Solution:'}
                    </strong>{' '}
                    {project.solution}
                  </p>

                  <p>
                    <strong className="text-white">
                      {lang === 'es' ? 'Resultado:' : 'Result:'}
                    </strong>{' '}
                    {project.result}
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map(item => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border border-white/10
                        bg-white/[0.06]
                        px-3 py-1.5
                        text-xs font-medium
                        text-slate-200
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/85
            p-5
            backdrop-blur-md
          "
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Preview"
              className="
                max-h-[92vh]
                max-w-[96vw]
                rounded-3xl
                border border-white/10
                shadow-[0_0_80px_rgba(6,182,212,0.15)]
              "
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="
                absolute -top-3 -right-3
                flex h-10 w-10 items-center justify-center
                rounded-full
                bg-white text-black
                shadow-xl
                transition
                hover:scale-105
              "
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  )
}