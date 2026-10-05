import type { ReactNode } from 'react'
import Reveal from './Reveal'

export default function Section({ id, title, intro, children, dark = false }: { id: string; title: string; intro?: string; children: ReactNode; dark?: boolean }) {
  return (
    <section id={id} className={`px-5 py-20 ${dark ? 'bg-night text-white' : ''}`}>
      <div className="mx-auto max-w-6xl">
        <Reveal><h2 className="text-3xl font-bold md:text-5xl">{title}</h2>
          {intro && <p className={`mt-4 max-w-2xl text-lg ${dark ? 'text-white/70' : 'text-ink/70'}`}>{intro}</p>}</Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
