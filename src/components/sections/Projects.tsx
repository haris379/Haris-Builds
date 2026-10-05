import Reveal from '../ui/Reveal'
import Section from '../ui/Section'
import { projects } from '../../data'

export default function Projects() {
  return (
    <Section id="projects" title="Featured projects" intro="Live projects I built. Each opens in a new tab.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 80}>
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-mist bg-card transition hover:-translate-y-1 hover:shadow-xl">
              {p.image ? <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" className="aspect-video w-full object-cover" />
                : <div className="grid aspect-video place-items-center bg-gradient-to-br from-cobalt to-coral font-display text-3xl font-extrabold text-white">{p.name}</div>}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="mt-1 font-semibold">{p.summary}</p><p className="text-ink/75">{p.purpose}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
                <ul className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full bg-mist px-3 py-1 text-xs font-semibold">{t}</li>)}</ul>
                <div className="mt-auto flex gap-3 pt-5">
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="rounded-full bg-cobalt px-4 py-2 text-sm font-semibold text-white hover:brightness-125">View live project</a>
                  {p.repo && <a href={p.repo} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-ink px-4 py-2 text-sm font-semibold hover:brightness-125 hover:text-paper">Source code</a>}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
