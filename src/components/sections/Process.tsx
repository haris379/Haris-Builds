import Reveal from '../ui/Reveal'
import Section from '../ui/Section'
import { steps } from '../../data'

export default function Process() {
  return (
    <Section id="process" title="How I work" intro="A clear process from first conversation to launch.">
      <ol className="relative ml-4 border-l-2 border-cobalt/30">
        {steps.map(([t, d], i) => (
          <Reveal key={t} delay={i * 50} className="relative pb-8 pl-8 last:pb-0">
            <li className="list-none">
              <span className="absolute -left-[17px] top-0 grid h-8 w-8 place-items-center rounded-full bg-cobalt text-sm font-bold text-white">{i + 1}</span>
              <h3 className="text-xl font-bold">{t}</h3><p className="mt-1 max-w-2xl text-ink/75">{d}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
