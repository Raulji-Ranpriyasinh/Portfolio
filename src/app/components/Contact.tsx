import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight, Mail, Github, Linkedin } from 'lucide-react';

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
          <span className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4 block">Contact</span>
        </motion.div>

        {/* Big headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Have a project in mind?
            <br />
            <span className="gradient-text">Let's build it together.</span>
          </h2>
          <p className="text-white/40 text-lg mt-6 max-w-xl">
            I'm always open to freelance projects, consulting, and collaborations in AI/ML, 
            full-stack development, and data science.
          </p>
        </motion.div>

        {/* Contact links */}
        <div className="space-y-3">
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
    </section>
  );
}
