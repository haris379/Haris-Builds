# Muhammad Haris - Portfolio

React + TypeScript + Tailwind v4 (Vite) frontend, Express + Nodemailer backend.

```
src/
  components/{ui,layout,sections,forms}   reusable UI, header/footer, page sections, contact form
  pages/                                   Home, NotFound (React Router)
  data/                                    all content: profile, services, stack, process, projects, capabilities
  hooks/  types/
server/   index.js, routes/contact.js, services/mailer.js
```

Add a project: edit `src/data/projects.ts` (screenshots go in `public/shots/`).

## Run
1. `npm install`
2. `cp .env.example .env` and fill in the SMTP values (Gmail needs an App Password)
3. `npm run server` and, in another terminal, `npm run dev`

## Deploy (Render, one web service)
Build: `npm install && npm run build` - Start: `npm start` - add the `.env` variables in the dashboard.
