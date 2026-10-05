import { useEffect, useState } from 'react'
import Logo from './Logo'

const seen = () => { try { return sessionStorage.getItem('intro') === '1' } catch { return false } }

/** Short logo splash, shown once per browser session and skipped for reduced motion. */
export default function Intro() {
  const [phase, setPhase] = useState<'show' | 'fade' | 'done'>(() =>
    seen() || window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'done' : 'show')
  useEffect(() => {
    if (phase === 'done') return
    try { sessionStorage.setItem('intro', '1') } catch { /* storage unavailable */ }
    const a = setTimeout(() => setPhase('fade'), 1700)
    const b = setTimeout(() => setPhase('done'), 2300)
    return () => { clearTimeout(a); clearTimeout(b) }
  }, [])
  if (phase === 'done') return null
  return (
    <div aria-hidden="true" className={`intro fixed inset-0 z-50 grid place-items-center bg-night ${phase === 'fade' ? 'intro-out' : ''}`}>
      <div className="intro-pop"><Logo size="lg" /></div>
    </div>
  )
}
