import { Router } from 'express'
import rateLimit from 'express-rate-limit'
import { isMailConfigured, sendContactMail } from '../services/mailer.js'

const router = Router()
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 5, message: { error: 'Too many messages. Please try again in a few minutes.' } })
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const clean = (s, max) => String(s ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max)

router.post('/', limiter, async (req, res) => {
  const { name, email, subject, message, website } = req.body ?? {}
  if (website) return res.json({ ok: true }) // honeypot: bots fill this hidden field
  const data = { name: clean(name, 100), email: clean(email, 150), subject: clean(subject, 150), message: String(message ?? '').trim().slice(0, 5000) }
  if (data.name.length < 2 || !emailRe.test(data.email) || data.subject.length < 3 || data.message.length < 10)
    return res.status(400).json({ error: 'Please fill in all fields correctly.' })
  if (!isMailConfigured()) return res.status(503).json({ error: 'Contact form is not configured yet. Please email me directly.' })
  try {
    await sendContactMail(data)
    res.json({ ok: true })
  } catch (err) {
    console.error('Mail error:', err.message)
    res.status(502).json({ error: 'Your message could not be sent. Please try again or email me directly.' })
  }
})

export default router
