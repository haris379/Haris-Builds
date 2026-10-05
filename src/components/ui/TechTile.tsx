import type { Tech } from '../../types'

export default function TechTile({ t, i = 0 }: { t: Tech; i?: number }) {
  return (
    <div className="group flex w-24 shrink-0 flex-col items-center gap-2" title={t.name}>
      <div className="float grid h-16 w-16 place-items-center rounded-2xl bg-white p-3 shadow-md transition duration-300 group-hover:-translate-y-1 group-hover:scale-110" style={{ animationDelay: `${(i % 6) * 0.4}s` }}>
        {t.src ? <img src={t.src} alt="" loading="lazy" className="h-full w-full object-contain" /> : <span className="text-xs font-bold text-ink">API</span>}
      </div>
      <span className="text-center text-xs text-white/80">{t.name}</span>
    </div>
  )
}
