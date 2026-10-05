import { nav } from "../../data";
import Logo from "../ui/Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-mist bg-paper/90 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3"
      >
        <a href="/" aria-label="Haris Builds, home">
          <Logo />
        </a>
        <ul className="hidden gap-6 md:flex">
          {nav.map(([id, l]) => (
            <li key={id}>
              <a href={`/#${id}`} className="hover:text-sky">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-cobalt px-4 py-2 text-sm font-semibold text-white md:hidden"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
