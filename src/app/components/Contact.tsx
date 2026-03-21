import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, Mail, Github, Linkedin, Send } from 'lucide-react';

const terminalLines = [
  { prompt: true, text: 'fetch_contact_info.sh' },
  { prompt: false, text: '✓ Access Granted', color: '#a5d6a7' },
  { prompt: false, text: '' },
  { prompt: false, text: '{' },
  { prompt: false, text: '  "status": "available",' },
  { prompt: false, text: '  "email": "ranpriyasinhraulji@gmail.com",' },
  { prompt: false, text: '  "location": "Gujarat, India",' },
  { prompt: false, text: '  "response_time": "< 24h"' },
  { prompt: false, text: '}' },
];

const links = [
  {
    label: 'Email',
    value: 'ranpriyasinhraulji@gmail.com',
    href: 'mailto:ranpriyasinhraulji@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'Raulji-Ranpriyasinh',
    href: 'https://github.com/Raulji-Ranpriyasinh',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'ranpriyasinh-raulji',
    href: 'https://linkedin.com/in/ranpriyasinh-raulji',
    icon: Linkedin,
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [terminalVisible, setTerminalVisible] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (terminalVisible < terminalLines.length) {
      const timer = setTimeout(() => {
        setTerminalVisible((prev) => prev + 1);
      }, 200 + terminalVisible * 120);
      return () => clearTimeout(timer);
    }
  }, [isInView, terminalVisible]);

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-indigo-500/5 blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
            <Send size={12} className="text-indigo-400" />
            Contact
          </span>
        </motion.div>

        {/* Two-column layout: headline + terminal | contact links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left - headline + terminal */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Have a project in mind?
                <br />
                <span className="gradient-text">Let's build it together.</span>
              </h2>
              <p className="text-white/40 text-base">
                I'm always open to freelance projects, consulting, and collaborations in AI/ML, 
                full-stack development, and data science.
              </p>
            </motion.div>

            {/* Terminal widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-xl border border-white/[0.08] bg-[#1a1a2e]/80 backdrop-blur-xl overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="text-[11px] text-white/25 ml-2 font-mono">~ zsh</span>
              </div>
              <div className="p-4 font-mono text-[12px] leading-[1.9] min-h-[180px]">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={i < terminalVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {line.prompt ? (
                      <span>
                        <span className="text-purple-400">❯</span>
                        <span className="text-white/50"> ~ </span>
                        <span className="text-white/70">{line.text}</span>
                      </span>
                    ) : line.text === '' ? (
                      <span>&nbsp;</span>
                    ) : (
                      <span style={{ color: line.color || '#c3e88d' }}>{line.text}</span>
                    )}
                  </motion.div>
                ))}
                {terminalVisible >= terminalLines.length && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <span className="text-purple-400">❯</span>
                    <span className="text-white/50"> ~ </span>
                    <span className="text-indigo-400 animate-blink">█</span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right - Contact links */}
          <div className="space-y-3 flex flex-col justify-center">
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group flex items-center justify-between p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500"
              >
                <div className="flex items-center gap-4">
                  <link.icon size={20} className="text-white/30 group-hover:text-white/60 transition-colors duration-300" />
                  <div>
                    <span className="text-xs text-white/30 uppercase tracking-wider block">{link.label}</span>
                    <span className="text-white/80 font-medium group-hover:text-white transition-colors duration-300">{link.value}</span>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-white/15 group-hover:text-white/50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
