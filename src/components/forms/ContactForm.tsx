import { useState, type FormEvent } from 'react'

export default function ContactForm() {
  const empty = { name: '', email: '', subject: '', message: '', website: '' }
  const [v, setV] = useState(empty)
  const [err, setErr] = useState<Record<string, string>>({})
  const [st, setSt] = useState<{ s: 'idle' | 'sending' | 'ok' | 'error'; msg?: string }>({ s: 'idle' })

  const validate = () => {
    const e: Record<string, string> = {}
    if (v.name.trim().length < 2) e.name = 'Enter your full name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Enter a valid email address.'
    if (v.subject.trim().length < 3) e.subject = 'Add a subject (3+ characters).'
    if (v.message.trim().length < 10) e.message = 'Write at least 10 characters.'
    return e
  }
  async function submit(ev: FormEvent) {
    ev.preventDefault()
    if (st.s === 'sending') return
    const e = validate()
    setErr(e)
    if (Object.keys(e).length) return
    setSt({ s: 'sending' })
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(v) })
      const d = (await r.json().catch(() => ({}))) as { error?: string }
      if (!r.ok) throw new Error(d.error || 'Something went wrong. Please try again.')
      setSt({ s: 'ok' })
      setV(empty)
    } catch (x) {
      setSt({ s: 'error', msg: x instanceof Error ? x.message : 'Network error. Please try again.' })
    }
  }
  const fields = [['name', 'Full name', 'text'], ['email', 'Email address', 'email'], ['subject', 'Subject', 'text']] as const
  const cls = 'mt-1 w-full rounded-lg border border-ink/20 bg-card px-3 py-2'
  return (
    <form onSubmit={submit} noValidate className="space-y-4 rounded-2xl bg-card p-6 shadow-md">
      {fields.map(([k, label, type]) => (
        <div key={k}>
          <label htmlFor={k} className="font-semibold">{label}</label>
          <input id={k} type={type} value={v[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} aria-invalid={!!err[k]} aria-describedby={err[k] ? `${k}-e` : undefined} className={cls} />
          {err[k] && <p id={`${k}-e`} className="mt-1 text-sm text-red-400">{err[k]}</p>}
        </div>
      ))}
      <div>
        <label htmlFor="message" className="font-semibold">Message</label>
        <textarea id="message" rows={5} value={v.message} onChange={(e) => setV({ ...v, message: e.target.value })} aria-invalid={!!err.message} className={cls} />
        {err.message && <p className="mt-1 text-sm text-red-400">{err.message}</p>}
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={v.website} onChange={(e) => setV({ ...v, website: e.target.value })} className="absolute -left-[9999px]" />
      <button disabled={st.s === 'sending'} className="rounded-full bg-cobalt px-6 py-3 font-semibold text-white transition hover:brightness-125 disabled:opacity-60">
        {st.s === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      <div role="status" aria-live="polite">
        {st.s === 'ok' && <p className="font-semibold text-green-400">Message sent. I will reply to your email address soon.</p>}
        {st.s === 'error' && <p className="font-semibold text-red-400">{st.msg}</p>}
      </div>
    </form>
  )
}
