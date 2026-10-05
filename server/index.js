import express from 'express'
import path from 'node:path'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import contactRoutes from './routes/contact.js'

const app = express()
app.set('trust proxy', 1)
app.use(express.json({ limit: '10kb' }))
app.use('/api/contact', contactRoutes)

const dist = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist')
if (existsSync(dist)) {
  app.use(express.static(dist))
  app.get('*', (_req, res) => res.sendFile(path.join(dist, 'index.html')))
}
app.listen(process.env.PORT || 3001, () => console.log('Server running'))
