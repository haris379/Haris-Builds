import Reveal from '../ui/Reveal'
import Section from '../ui/Section'
import { services } from '../../data'

export default function Services() {
  return (
    <Section id="services" title="How I can help your business" intro="A good website builds trust, helps people find and understand your services, and supports your growth. It cannot guarantee sales or rankings, but it gives your business a solid base to work from.">
      <div className="grid gap-5 md:grid-cols-3">
        {services.map((s, i) => <Reveal key={s.t} delay={i * 60}><div className="h-full rounded-2xl border border-mist bg-card p-6"><h3 className="text-xl font-bold">{s.t}</h3><p className="mt-2 text-ink/75">{s.d}</p></div></Reveal>)}
      </div>
    </Section>
  )
}
