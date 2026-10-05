import Reveal from '../ui/Reveal'
import Section from '../ui/Section'
import { capabilities } from '../../data'

export default function Capabilities() {
  return (
    <Section id="capabilities" title="Technical capabilities" intro="What I can do, and where I have already done it.">
      <div className="grid gap-4 md:grid-cols-3">
        {capabilities.map(([t, d], i) => <Reveal key={t} delay={(i % 3) * 60}><div className="h-full border-l-4 border-cobalt bg-card p-5"><h3 className="font-bold">{t}</h3><p className="text-sm text-ink/75">{d}</p></div></Reveal>)}
      </div>
    </Section>
  )
}
