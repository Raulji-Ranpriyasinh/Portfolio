import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { href: 'https://github.com/Raulji-Ranpriyasinh', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/ranpriyasinh-raulji', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:ranpriyasinhraulji@gmail.com', icon: Mail, label: 'Email' },
  ];

  return (
    <footer className="border-t border-white/5 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-2 text-sm font-bold">
              <span className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-[10px] tracking-tight">RR</span>
              <span className="text-white/70">Ranpriyasinh Raulji</span>
            </span>
            <span className="text-xs text-white/20">&copy; {currentYear}</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                whileHover={{ y: -2 }}
                className="w-9 h-9 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-white/25 hover:text-white/60 hover:bg-white/5 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
