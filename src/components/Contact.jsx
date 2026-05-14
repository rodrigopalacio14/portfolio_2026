import { Mail } from 'lucide-react'
import ContactForm from "./ContactForm"

export default function Contact({ t }) {
  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-teal-500/20 to-blue-500/20 p-8 text-center md:p-12">
          
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {t.contactTitle}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            {t.contactText}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            
            <a
              href="mailto:rodripalacio14@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-slate-950"
            >
              <Mail size={18} />
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/rodrigo-sebastian-palacio-schunke-07438613a/"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white"
            >
              <span className="font-bold">in</span>
              LinkedIn
            </a>

          </div>

          {/* FORMULARIO */}
          <ContactForm />

        </div>

      </div>
    </section>
  )
}