import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Home, User, Wrench, Briefcase, FolderOpen, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Wrench },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: FolderOpen },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

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
          ? isDark
            ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-sm'
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
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm tracking-tight">AI</span>
              <span className={`text-sm font-semibold tracking-wide ${isDark ? 'text-white' : 'text-gray-900'}`}>
                AI ML Engineer
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
                    ? isDark ? 'text-white' : 'text-gray-900'
                    : isDark ? 'text-white/40 hover:text-white/70' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <span className="relative z-10 inline-flex items-center gap-1.5">
                  <item.icon size={14} className="opacity-60" />
                  {item.name}
                </span>
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className={`absolute inset-0 rounded-full border ${
                      isDark ? 'bg-white/10 border-white/10' : 'bg-black/5 border-black/10'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              onClick={toggleTheme}
              className={`ml-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                isDark
                  ? 'bg-white/10 text-white/60 hover:text-white hover:bg-white/20 border border-white/10'
                  : 'bg-black/5 text-gray-500 hover:text-gray-800 hover:bg-black/10 border border-black/10'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="ml-3 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className={`text-xs font-medium ${isDark ? 'text-emerald-400/80' : 'text-emerald-600'}`}>Available for work</span>
            </motion.div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 ${
                isDark ? 'text-white/60 hover:text-white' : 'text-gray-500 hover:text-gray-800'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className={`p-2 ${isDark ? 'text-white/60 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`md:hidden backdrop-blur-xl border-b ${
            isDark ? 'bg-[#0a0a0a]/95 border-white/5' : 'bg-white/95 border-black/5'
          }`}
        >
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`flex items-center gap-2 w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? isDark ? 'bg-white/10 text-white' : 'bg-black/5 text-gray-900'
                    : isDark ? 'text-white/40 hover:text-white/70 hover:bg-white/5' : 'text-gray-500 hover:text-gray-800 hover:bg-black/5'
                }`}
              >
                <item.icon size={14} className="opacity-60" />
                {item.name}
              </button>
            ))}
            <div className="flex items-center gap-2 px-4 pt-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className={`text-xs font-medium ${isDark ? 'text-emerald-400/80' : 'text-emerald-600'}`}>Available for work</span>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
