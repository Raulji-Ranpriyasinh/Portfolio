import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const stats = [
  { number: '20+', label: 'Projects Delivered' },
  { number: '3+', label: 'Years Experience' },
  { number: '8+', label: 'AI/ML Models Built' },
  { number: '9.0', label: 'CGPA - B.Tech CS' },
];

const services = [
  {
    title: 'Generative AI & LLMs',
    description: 'RAG pipelines, conversational agents, LLM-powered automation workflows, and AI-driven content generation systems.',
    accent: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Full-Stack Development',
    description: 'End-to-end web applications with React, Flask, FastAPI, and modern architectures that scale.',
    accent: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Data Science & ML',
    description: 'Predictive models, sentiment analysis, recommendation engines, and deep learning solutions.',
    accent: 'from-pink-500 to-rose-500',
  },
  {
    title: 'AI Consulting',
    description: 'Strategic guidance on AI integration, architecture design, and intelligent automation for businesses.',
    accent: 'from-rose-500 to-orange-500',
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4 block">About</span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
            I build things that live at the{' '}
            <span className="gradient-text">intersection of AI and product</span>.
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {/* Bio card - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 lg:col-span-2 p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500"
          >
            <p className="text-white/50 leading-relaxed mb-4">
              As an independent AI/ML Engineer and Full-Stack Developer, I've spent the last 3+ years 
              turning complex challenges into production-ready products. From designing{' '}
              <span className="text-white/80">LLM-powered agents</span> and{' '}
              <span className="text-white/80">RAG documentation assistants</span> to building{' '}
              <span className="text-white/80">full-stack web applications</span>, I bring both technical depth 
              and product thinking to every engagement.
            </p>
            <p className="text-white/50 leading-relaxed">
              I specialize in <span className="text-white/80">LangChain</span>,{' '}
              <span className="text-white/80">CrewAI agents</span>,{' '}
              <span className="text-white/80">vector databases</span>, and{' '}
              <span className="text-white/80">Python/React stacks</span> — 
              building systems that are not just smart, but reliable and maintainable.
            </p>
          </motion.div>

          {/* Stats cards */}
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 flex flex-col justify-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.number}</div>
              <div className="text-xs text-white/30 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/30 mb-6 block">What I do</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 + index * 0.08 }}
              className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${service.accent} mb-4 group-hover:w-12 transition-all duration-500`} />
              <h3 className="text-lg font-semibold text-white/90 mb-2">{service.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
