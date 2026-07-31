import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Skills", "Projects", "Design", "Contact"];

  return (
    <header className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur border-b border-surface">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display font-bold text-lg text-fg">
          Ifeanyi<span className="text-accent">.</span>
        </a>
        <ul className="hidden md:flex gap-8 text-sm text-muted">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-fg transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-block text-sm font-medium bg-accent text-bg px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
          Let's Talk
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-fg text-2xl" aria-label="Toggle menu">
          {open ? "✕" : "☰"}
        </button>
      </nav>
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 text-muted">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="hover:text-fg transition-colors">
                {link}
              </a>
            </li>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="text-fg bg-accent text-bg px-4 py-2 rounded-full text-center font-medium">
            Let's Talk
          </a>
        </ul>
      )}
    </header>
  );
}
