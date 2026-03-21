import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2 text-sm font-bold">
              <span className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-[10px] tracking-tight">RR</span>
              <span className="text-white/70">Ranpriyasinh Raulji</span>
            </span>
            <span className="text-xs text-white/20">© {currentYear}</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Raulji-Ranpriyasinh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/25 hover:text-white/60 transition-colors duration-300"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/ranpriyasinh-raulji"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/25 hover:text-white/60 transition-colors duration-300"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:ranpriyasinhraulji@gmail.com"
              className="text-white/25 hover:text-white/60 transition-colors duration-300"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
