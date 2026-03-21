import { Github, Linkedin, Mail } from 'lucide-react';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/5 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand column */}
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-bold mb-3">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-[10px] tracking-tight">RR</span>
              <span className="text-white/80 font-semibold">Ranpriyasinh Raulji</span>
            </span>
            <p className="text-xs text-white/30 leading-relaxed mt-2">
              AI/ML Engineer & Full-Stack Developer crafting intelligent systems with modern technologies.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-white/30 mb-3 block">Menu</span>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-white/40 hover:text-white/70 transition-colors duration-300 text-left w-fit"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-white/30 mb-3 block">Connect</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Raulji-Ranpriyasinh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/30 hover:text-white/70 hover:border-white/20 transition-all duration-300"
              >
                <Github size={14} />
              </a>
              <a
                href="https://linkedin.com/in/ranpriyasinh-raulji"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/30 hover:text-white/70 hover:border-white/20 transition-all duration-300"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="mailto:ranpriyasinhraulji@gmail.com"
                className="w-8 h-8 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center text-white/30 hover:text-white/70 hover:border-white/20 transition-all duration-300"
              >
                <Mail size={14} />
              </a>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400/70">Available for freelance & full-time</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-xs text-white/20">© {currentYear} Ranpriyasinh Raulji</span>
          <span className="text-xs text-white/15 font-mono">Built with React + TypeScript</span>
        </div>
      </div>
    </footer>
  );
}
