import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navItems.map((item) => item.href.slice(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onClick={() => scrollToSection('#home')}
            className="text-lg font-bold tracking-tight"
          >
            <span className="inline-flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm tracking-tight">RR</span>
              <span className="hidden sm:inline">
                <span className="text-white/90 font-semibold tracking-tight">R. Raulji</span>
                <span className="text-white/20 ml-1.5 text-xs font-normal tracking-wider hidden lg:inline">/ AI Engineer</span>
              </span>
            </span>
          </motion.button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-1.5 text-sm rounded-full transition-all duration-300 relative ${
                  activeSection === item.href.slice(1)
                    ? 'text-white'
                    : 'text-white/40 hover:text-white/70'
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="ml-4 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400/80 font-medium">Available for work</span>
            </motion.div>
          </div>

          <button
            className="md:hidden p-2 text-white/60 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5"
        >
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'bg-white/10 text-white'
                    : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center gap-2 px-4 pt-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400/80 font-medium">Available for work</span>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
