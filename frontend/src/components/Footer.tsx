const socials = [
  { name: "GitHub", url: "https://github.com/LowkeyFY" },
  { name: "Instagram", url: "https://www.instagram.com/FY_CREATIVE_STUDIOS" },
  { name: "X", url: "https://x.com/FY_lowkey" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ifeanyi-okorie-59a040313" },
  { name: "TikTok", url: "https://www.tiktok.com/@lowkey_fy" },
];

export default function Footer() {
  return (
    <footer className="px-6 max-w-5xl mx-auto py-12 border-t border-surface flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-muted text-sm">© {new Date().getFullYear()} Ifeanyi Okorie</p>
      <div className="flex gap-6 flex-wrap justify-center">
        {socials.map((social) => (
          <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-accent transition-colors">
            {social.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
