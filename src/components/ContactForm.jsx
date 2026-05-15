import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function ContactForm({ t }) {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.target)

    try {
      const response = await fetch('https://formspree.io/f/xgodglbe', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      })

      if (response.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl rounded-[30px] border border-white/10 bg-white/[0.05] p-7 text-left shadow-2xl backdrop-blur-sm"
    >
      <div>
        <label className="block text-sm font-medium text-slate-200">
          {t.form.subject}
        </label>

        <input
          name="subject"
          type="text"
          placeholder={t.form.subjectPlaceholder}
          required
          className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/40"
        />
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-slate-200">
          Email
        </label>

        <input
          name="email"
          type="email"
          placeholder="email@empresa.com"
          required
          className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/40"
        />
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-slate-200">
          {t.form.message}
        </label>

        <textarea
          name="message"
          placeholder={t.form.messagePlaceholder}
          rows="6"
          required
          className="mt-3 w-full resize-none rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/40"
        />
      </div>

      <div className="mt-7 flex justify-end">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1 disabled:opacity-60"
        >
          <Mail size={16} />
          {status === 'sending' ? 'Enviando...' : t.form.send}
        </button>
      </div>

      {status === 'success' && (
        <p className="mt-5 rounded-2xl border border-green-400/20 bg-green-400/10 p-4 text-sm text-green-300">
          Mensaje enviado correctamente.
        </p>
      )}

      {status === 'error' && (
        <p className="mt-5 rounded-2xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300">
          No se pudo enviar el mensaje. Podés contactarme por WhatsApp o LinkedIn.
        </p>
      )}
    </form>
  )
}