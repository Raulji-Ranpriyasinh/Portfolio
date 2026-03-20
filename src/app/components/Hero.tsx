import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const roles = [
  'AI/ML Engineer',
  'Full-Stack Developer',
  'Data Scientist',
  'Freelancer',
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient gradient orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/8 blur-[100px]" />
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-pink-500/5 blur-[80px]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/60">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for freelance projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
            >
              <span className="text-white">Ranpriya</span>
              <br />
              <span className="gradient-text">sinh Raulji</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/40 mb-8 h-10 font-light"
            >
              {'> '}
              <span className="text-white/80 font-mono">{displayText}</span>
              <span className="text-indigo-400 animate-blink font-mono">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg text-white/40 max-w-xl leading-relaxed mb-10"
            >
              I craft{' '}
              <span className="text-white/70">intelligent AI systems</span>,{' '}
              <span className="text-white/70">full-stack applications</span>, and{' '}
              <span className="text-white/70">data-driven solutions</span>{' '}
              that turn complex problems into elegant, production-ready products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('#projects')}
                className="px-6 py-3 bg-white text-[#0a0a0a] rounded-lg font-semibold text-sm hover:bg-white/90 transition-all duration-300"
              >
                View my work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-3 border border-white/20 text-white/80 rounded-lg font-semibold text-sm hover:bg-white/5 hover:border-white/30 transition-all duration-300"
              >
                Let's talk
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <span className="text-xs text-white/20 uppercase tracking-widest mr-2">Find me</span>
              <motion.a
                href="https://github.com/Raulji-Ranpriyasinh"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/ranpriyasinh-raulji"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href="mailto:ranpriyasinhraulji@gmail.com"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              >
                <Mail size={18} />
              </motion.a>
            </motion.div>
          </div>

          {/* Right - floating decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block relative w-80 h-80"
          >
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent rotate-6 animate-float" />
            <div className="absolute inset-4 rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/5 to-transparent -rotate-3 animate-float-delayed" />
            <div className="absolute inset-8 rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent rotate-2 animate-float-slow" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold gradient-text mb-2">3+</div>
                <div className="text-white/30 text-sm">Years of</div>
                <div className="text-white/50 text-sm font-medium">Building AI</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-white/20" />
        </motion.div>
      </motion.button>
    </section>
  );
}
