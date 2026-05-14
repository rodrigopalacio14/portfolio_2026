import { useState } from "react"
import { Mail } from "lucide-react"

export default function ContactForm() {
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const email = "rodripalacio14@gmail.com"
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`

    window.location.href = mailtoLink
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/10 bg-slate-950 p-6 text-left">
      <label className="block text-sm font-medium text-slate-200">
        Asunto
      </label>
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Consulta laboral / oportunidad"
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none focus:border-accent"
      />

      <label className="mt-5 block text-sm font-medium text-slate-200">
        Mensaje
      </label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escribime tu mensaje..."
        rows="5"
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none focus:border-accent"
      />

      <button
        type="submit"
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-slate-950 hover:bg-teal-300"
      >
        <Mail size={18} />
        Enviar mensaje
      </button>
    </form>
  )
}