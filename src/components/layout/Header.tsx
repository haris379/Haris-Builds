import { useState } from "react";
import { nav } from "../../data";
import ThemeToggle from "../ui/ThemeToggle"; // adjust to your actual path

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-mist bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        {/* Keep your existing logo here */}
        <a
          href="/#"
          aria-label="Haris Builds home"
          className="flex items-center"
        >
          <img
            src="/favicon-180.png"
            alt="HB logo"
            className="h-10 w-10 md:h-12 md:w-12"
          />
        </a>

        {/* Desktop links */}
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-8">
            {nav.map(([id, l]) => (
              <li key={id}>
                <a href={`/#${id}`} className="hover:text-sky">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Hamburger, mobile only */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-mist transition hover:border-sky md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-mist bg-paper md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {nav.map(([id, l]) => (
              <li key={id}>
                <a
                  href={`/#${id}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg font-semibold hover:text-sky"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
