import { MessageCircle } from 'lucide-react'
import ContactForm from './ContactForm'

export default function Contact({ t, lang }) {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-20 md:py-24"
    >
      <div className="section-container">
        <div
          className="border-t border-white/10 pt-10 md:pt-14"
        >
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="section-kicker text-cyan-300">{t.nav.contact}</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
              {t.contactTitle}
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {t.contactText}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
             

                <a
                href="https://www.linkedin.com/in/rodrigo-sebastian-palacio-schunke-07438613a/"
                target="_blank"
                rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                <span className="font-bold">in</span>
                {t.contactButtons.linkedin}
                </a>
                <a
                  href="https://wa.me/5493517868252"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                >
                  <MessageCircle size={18} />
                  {t.contactButtons.whatsapp}
                </a>
              
              </div>
            </div>

            <div>
              <ContactForm t={t} lang={lang} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
