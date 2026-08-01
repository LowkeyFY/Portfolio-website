import { Github, Instagram, Twitter, Linkedin } from 'lucide-react';

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const socials = [
  { name: "GitHub", url: "https://github.com/LowkeyFY", icon: Github },
  { name: "Instagram", url: "https://www.instagram.com/FY_CREATIVE_STUDIOS", icon: Instagram },
  { name: "X", url: "https://x.com/FY_lowkey", icon: Twitter },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ifeanyi-okorie-59a040313", icon: Linkedin },
  { name: "TikTok", url: "https://www.tiktok.com/@lowkey_fy", icon: TikTokIcon },
];

export default function Footer() {
  return (
    <footer className="px-6 max-w-5xl mx-auto py-12 border-t border-surface">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted text-sm">
          © 2025 OKORIE Ifeanyi · FY Creative Studios · FY Devs
        </p>
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="p-2.5 rounded-full bg-surface border border-surface/50 text-muted hover:text-accent hover:border-accent hover:scale-110 transition-all"
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
