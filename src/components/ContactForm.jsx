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
      className="border border-white/10 bg-white/[0.04] p-6 text-left md:p-7"
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
          className="mt-3 w-full border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
        />
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-slate-200">
          {t.form.email}
        </label>

        <input
          name="email"
          type="email"
          placeholder={t.form.emailPlaceholder}
          required
          className="mt-3 w-full border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
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
          className="mt-3 w-full resize-none border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
        />
      </div>

      <div className="mt-7 flex justify-end">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-2 bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 disabled:opacity-60"
        >
          <Mail size={16} />
          {status === 'sending' ? t.form.sending : t.form.send}
        </button>
      </div>

      {status === 'success' && (
        <p className="mt-5 border border-green-400/20 bg-green-400/10 p-4 text-sm text-green-300">
          {t.form.success}
        </p>
      )}

      {status === 'error' && (
        <p className="mt-5 border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300">
          {t.form.error}
        </p>
      )}
    </form>
  )
}
