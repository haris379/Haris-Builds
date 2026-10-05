import { profile, nav } from '../../data'

export default function Footer() {
  return (
    <footer className="bg-night px-5 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:justify-between">
        <div><p className="font-display text-xl font-bold">{profile.name}</p><p className="text-white/70">{profile.title}</p><a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></div>
        <nav aria-label="Footer"><ul className="flex flex-wrap gap-x-5 gap-y-2">{nav.map(([id, l]) => <li key={id}><a href={`/#${id}`} className="hover:underline">{l}</a></li>)}
          <li><a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li></ul></nav>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-sm text-white/60">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  )
}
