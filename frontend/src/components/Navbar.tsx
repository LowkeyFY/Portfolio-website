export default function Navbar() {
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
        <a href="#contact" className="text-sm font-medium bg-accent text-bg px-4 py-2 rounded-full hover:opacity-90 transition-opacity">
          Let's Talk
        </a>
      </nav>
    </header>
  );
}
