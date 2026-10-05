import Reveal from '../ui/Reveal'
import Section from '../ui/Section'
import TechTile from '../ui/TechTile'
import { stack } from '../../data'

export default function TechStack() {
  const all = stack.flatMap((c) => c.items).filter((t) => t.src)
  return (
    <Section id="stack" title="Technology stack" intro="The tools I use to build and ship full-stack projects." dark>
      <div className="marquee-wrap overflow-hidden" aria-hidden="true">
        <div className="marquee flex gap-6">{[...all, ...all].map((t, i) => <TechTile key={i} t={t} i={i} />)}</div>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {stack.map((c, ci) => (
          <Reveal key={c.title} delay={ci * 80}>
            <h3 className="mb-4 text-xl font-bold">{c.title}</h3>
            <ul className="flex flex-wrap gap-4">{c.items.map((t, i) => <li key={t.name}><TechTile t={t} i={i} /></li>)}</ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
