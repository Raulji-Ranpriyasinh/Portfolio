import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { NeuralNetworkBg } from './NeuralNetworkBg';

const codeLines = [
  { indent: 0, tokens: [{ text: 'class', color: '#c792ea' }, { text: ' ', color: '' }, { text: 'AIEngineer', color: '#ffcb6b' }, { text: ':', color: '#89ddff' }] },
  { indent: 1, tokens: [{ text: 'skills', color: '#f78c6c' }, { text: ' = ', color: '#89ddff' }, { text: '[', color: '#89ddff' }] },
  { indent: 2, tokens: [{ text: '"LangChain"', color: '#c3e88d' }, { text: ',', color: '#89ddff' }, { text: ' "RAG"', color: '#c3e88d' }, { text: ',', color: '#89ddff' }] },
  { indent: 2, tokens: [{ text: '"CrewAI"', color: '#c3e88d' }, { text: ',', color: '#89ddff' }, { text: ' "PyTorch"', color: '#c3e88d' }] },
  { indent: 1, tokens: [{ text: ']', color: '#89ddff' }] },
  { indent: 0, tokens: [] },
  { indent: 1, tokens: [{ text: 'def', color: '#c792ea' }, { text: ' ', color: '' }, { text: 'build', color: '#82aaff' }, { text: '(', color: '#89ddff' }, { text: 'self', color: '#f78c6c' }, { text: ', ', color: '#89ddff' }, { text: 'vision', color: '#f78c6c' }, { text: '):', color: '#89ddff' }] },
  { indent: 2, tokens: [{ text: 'return', color: '#c792ea' }, { text: ' self.', color: '#eeffff' }, { text: 'deploy', color: '#82aaff' }, { text: '(', color: '#89ddff' }] },
  { indent: 3, tokens: [{ text: 'self.', color: '#eeffff' }, { text: 'train', color: '#82aaff' }, { text: '(vision)', color: '#89ddff' }] },
  { indent: 2, tokens: [{ text: ')', color: '#89ddff' }] },
];

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
  const [visibleLines, setVisibleLines] = useState(0);

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

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, 300 + visibleLines * 150);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <NeuralNetworkBg />

      {/* Ambient gradient orbs - responsive sizes */}
      <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-indigo-500/10 blur-[80px] md:blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-purple-500/8 blur-[60px] md:blur-[100px]" />
      <div className="absolute top-[40%] left-[30%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-pink-500/5 blur-[60px] md:blur-[80px]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-28 md:py-32 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 md:mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm text-white/60">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for freelance projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-4 md:mb-6"
            >
              <span className="text-white">Ranpriyasinh</span>
              <br />
              <span className="gradient-text-animated">Raulji</span>
              <span className="text-white/15">.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-white/40 mb-6 md:mb-8 h-8 sm:h-10 font-light"
            >
              {'> '}
              <span className="text-white/80 font-mono">{displayText}</span>
              <span className="text-indigo-400 animate-blink font-mono">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-white/40 max-w-xl leading-relaxed mb-8 md:mb-10"
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
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 md:mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('#projects')}
                className="px-6 py-3.5 sm:py-3 bg-white text-[#0a0a0a] rounded-xl sm:rounded-lg font-semibold text-sm hover:bg-white/90 transition-all duration-300 min-h-[48px] sm:min-h-0"
              >
                View my work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-3.5 sm:py-3 border border-white/20 text-white/80 rounded-xl sm:rounded-lg font-semibold text-sm hover:bg-white/5 hover:border-white/30 transition-all duration-300 min-h-[48px] sm:min-h-0"
              >
                Let's talk
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center gap-3 sm:gap-4"
            >
              <span className="text-xs text-white/20 uppercase tracking-widest mr-1 sm:mr-2">Find me</span>
              {[
                { href: 'https://github.com/Raulji-Ranpriyasinh', icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com/in/ranpriyasinh-raulji', icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:ranpriyasinhraulji@gmail.com', icon: Mail, label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 sm:w-10 sm:h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right - Code Editor Widget (desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block relative w-[340px]"
          >
            <div className="rounded-xl border border-white/[0.08] bg-[#1a1a2e]/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-indigo-500/5">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="text-[11px] text-white/25 ml-2 font-mono">engineer.py</span>
              </div>
              <div className="p-4 font-mono text-[12px] leading-[1.8] min-h-[260px]">
                {codeLines.map((line, lineIndex) => (
                  <motion.div
                    key={lineIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={lineIndex < visibleLines ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="flex"
                  >
                    <span className="text-white/15 w-6 text-right mr-3 select-none text-[11px]">{lineIndex + 1}</span>
                    <span style={{ paddingLeft: `${line.indent * 16}px` }}>
                      {line.tokens.length === 0 ? (
                        <span>&nbsp;</span>
                      ) : (
                        line.tokens.map((token, tokenIndex) => (
                          <span key={tokenIndex} style={{ color: token.color || '#eeffff' }}>
                            {token.text}
                          </span>
                        ))
                      )}
                    </span>
                  </motion.div>
                ))}
                {visibleLines >= codeLines.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex"
                  >
                    <span className="text-white/15 w-6 text-right mr-3 select-none text-[11px]">{codeLines.length + 1}</span>
                    <span className="text-indigo-400 animate-blink">_</span>
                  </motion.div>
                )}
              </div>
            </div>
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10 blur-xl" />
          </motion.div>

          {/* Mobile code snippet - compact version for small screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:hidden mt-2"
          >
            <div className="rounded-xl border border-white/[0.08] bg-[#1a1a2e]/60 backdrop-blur-lg overflow-hidden">
              <div className="flex items-center gap-2 px-3 py-2 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                </div>
                <span className="text-[10px] text-white/25 ml-1 font-mono">engineer.py</span>
              </div>
              <div className="p-3 font-mono text-[11px] leading-[1.7] overflow-x-auto">
                {codeLines.slice(0, 5).map((line, lineIndex) => (
                  <motion.div
                    key={lineIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={lineIndex < visibleLines ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: lineIndex * 0.1 }}
                    className="flex"
                  >
                    <span className="text-white/15 w-5 text-right mr-2 select-none text-[10px]">{lineIndex + 1}</span>
                    <span style={{ paddingLeft: `${line.indent * 12}px` }}>
                      {line.tokens.length === 0 ? (
                        <span>&nbsp;</span>
                      ) : (
                        line.tokens.map((token, tokenIndex) => (
                          <span key={tokenIndex} style={{ color: token.color || '#eeffff' }}>
                            {token.text}
                          </span>
                        ))
                      )}
                    </span>
                  </motion.div>
                ))}
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
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Scroll to about section"
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
