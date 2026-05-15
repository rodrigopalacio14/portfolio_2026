import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function ContactForm({ t }) {
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
  e.preventDefault()

  const email = 'rodripalacio14@gmail.com'

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(message)}`

  window.open(gmailUrl, '_blank')
}

  return (
    <form
      onSubmit={handleSubmit}
      className="
        mx-auto
        max-w-2xl
        rounded-[30px]
        border border-white/10
        bg-white/[0.05]
        p-7
        text-left
        shadow-2xl
        backdrop-blur-sm
      "
    >
      <div>
        <label className="block text-sm font-medium text-slate-200">
          {t.form.subject}
        </label>

        <input
          type="text"
          value={subject}
          onChange={e => setSubject(e.target.value)}
          placeholder={t.form.subjectPlaceholder}
          className="
            mt-3
            w-full
            rounded-2xl
            border border-white/10
            bg-slate-900/70
            px-5 py-4
            text-white
            outline-none
            transition-all
            duration-300
            placeholder:text-slate-500
            focus:border-cyan-400/40
            focus:bg-slate-900
            focus:shadow-[0_0_20px_rgba(6,182,212,0.12)]
          "
        />
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-slate-200">
          {t.form.message}
        </label>

        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder={t.form.messagePlaceholder}
          rows="6"
          className="
            mt-3
            w-full
            resize-none
            rounded-2xl
            border border-white/10
            bg-slate-900/70
            px-5 py-4
            text-white
            outline-none
            transition-all
            duration-300
            placeholder:text-slate-500
            focus:border-cyan-400/40
            focus:bg-slate-900
            focus:shadow-[0_0_20px_rgba(6,182,212,0.12)]
          "
        />
      </div>

      <div className="mt-7 flex justify-end">
        <button
          type="submit"
          className="
            inline-flex items-center gap-2
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            px-6 py-3
            font-semibold
            text-white
            shadow-lg shadow-cyan-500/25
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-cyan-400/40
          "
        >
          <Mail size={16} />
          {t.form.send}
        </button>
      </div>
    </form>
  )
}