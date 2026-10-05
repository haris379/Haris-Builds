export default function Logo({ size = 'md' }: { size?: 'md' | 'lg' }) {
  const lg = size === 'lg'
  return (
    <span className="inline-flex items-center gap-2 font-display">
      <span className={`grid place-items-center rounded-xl bg-gradient-to-br from-cobalt to-cyan-400 font-extrabold text-white ${lg ? 'h-20 w-20 text-4xl' : 'h-8 w-8 text-lg'}`}>H</span>
      <span className={lg ? 'text-4xl' : 'text-lg'}><b className="font-extrabold">Haris</b> <span className="font-medium opacity-80">Builds</span></span>
    </span>
  )
}
