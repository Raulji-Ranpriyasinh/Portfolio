import { Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from './ThemeContext';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`border-t py-16 ${isDark ? 'border-white/5' : 'border-gray-200'}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-bold mb-3">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-[10px] tracking-tight">AI</span>
              <span className={`font-semibold ${isDark ? 'text-white/80' : 'text-gray-800'}`}>AI ML Engineer</span>
            </span>
            <p className={`text-xs leading-relaxed mt-2 ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
              AI/ML Engineer & Full-Stack Developer crafting intelligent systems with modern technologies.
            </p>
          </div>

          <div>
            <span className={`text-xs uppercase tracking-[0.2em] mb-3 block ${isDark ? 'text-white/30' : 'text-gray-400'}`}>Menu</span>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm transition-colors duration-300 text-left w-fit ${
                    isDark ? 'text-white/40 hover:text-white/70' : 'text-gray-400 hover:text-gray-700'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className={`text-xs uppercase tracking-[0.2em] mb-3 block ${isDark ? 'text-white/30' : 'text-gray-400'}`}>Connect</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Raulji-Ranpriyasinh"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-300 ${
                  isDark
                    ? 'border-white/10 bg-white/[0.02] text-white/30 hover:text-white/70 hover:border-white/20'
                    : 'border-gray-200 bg-white text-gray-400 hover:text-gray-700 hover:border-gray-400'
                }`}
              >
                <Github size={14} />
              </a>
              <a
                href="https://linkedin.com/in/ranpriyasinh-raulji"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-300 ${
                  isDark
                    ? 'border-white/10 bg-white/[0.02] text-white/30 hover:text-white/70 hover:border-white/20'
                    : 'border-gray-200 bg-white text-gray-400 hover:text-gray-700 hover:border-gray-400'
                }`}
              >
                <Linkedin size={14} />
              </a>
              <a
                href="mailto:ranpriyasinhraulji@gmail.com"
                className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-300 ${
                  isDark
                    ? 'border-white/10 bg-white/[0.02] text-white/30 hover:text-white/70 hover:border-white/20'
                    : 'border-gray-200 bg-white text-gray-400 hover:text-gray-700 hover:border-gray-400'
                }`}
              >
                <Mail size={14} />
              </a>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className={`text-xs ${isDark ? 'text-emerald-400/70' : 'text-emerald-600'}`}>Available for freelance & full-time</span>
            </div>
          </div>
        </div>

        <div className={`pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-3 ${isDark ? 'border-white/5' : 'border-gray-200'}`}>
          <span className={`text-xs ${isDark ? 'text-white/20' : 'text-gray-400'}`}>© {currentYear} Ranpriyasinh Raulji</span>
          <span className={`text-xs font-mono ${isDark ? 'text-white/15' : 'text-gray-300'}`}>Built with React + TypeScript</span>
        </div>
      </div>
    </footer>
  );
}
