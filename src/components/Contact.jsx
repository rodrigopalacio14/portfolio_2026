import { Mail } from 'lucide-react'
import ContactForm from './ContactForm'

export default function Contact({ t, lang }) {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-slate-950 to-slate-900/90 py-24"
    >
      <div className="section-container">
        <div
          className="
            relative overflow-hidden
            rounded-[36px]
            border border-white/10
            bg-gradient-to-br
            from-cyan-500/15
            via-slate-900
            to-blue-500/10
            p-8
            shadow-[0_0_80px_rgba(6,182,212,0.08)]
            md:p-12
          "
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#14b8a622,transparent_35%)]" />

          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              {t.contactTitle}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              {t.contactText}
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
             

              <a
                href="https://www.linkedin.com/in/rodrigo-palacio-schunke-07438613a/"
                target="_blank"
                className="
                  rounded-full
                  bg-[#0A66C2]
                  px-6 py-3
                  font-semibold
                  text-white
                  shadow-lg shadow-blue-600/25
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-[#004182]
                "
              >
                <span className="font-bold">in</span>
                {t.contactButtons.linkedin}
              </a>
              <a
                  href="https://wa.me/5493517868252"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    bg-[#25D366]
                    px-6 py-3
                    font-semibold
                    text-white
                    shadow-lg shadow-green-500/25
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-[#1ebe5d]
                  "
                >
                  WhatsApp
                </a>
              
            </div>

            <div className="mt-14">
              <ContactForm t={t} lang={lang} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}