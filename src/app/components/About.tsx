import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Brain, Code2, BarChart3, Lightbulb } from 'lucide-react';

const stats = [
  { number: 20, suffix: '+', label: 'Projects Delivered' },
  { number: 3, suffix: '+', label: 'Years Experience' },
  { number: 8, suffix: '+', label: 'AI/ML Models Built' },
  { number: 9.0, suffix: '', label: 'CGPA - B.Tech CS', decimal: true },
];

const services = [
  {
    title: 'Generative AI & LLMs',
    description: 'RAG pipelines, conversational agents, LLM-powered automation workflows, and AI-driven content generation systems.',
    accent: 'from-indigo-500 to-purple-500',
    icon: Brain,
  },
  {
    title: 'Full-Stack Development',
    description: 'End-to-end web applications with React, Flask, FastAPI, and modern architectures that scale.',
    accent: 'from-purple-500 to-pink-500',
    icon: Code2,
  },
  {
    title: 'Data Science & ML',
    description: 'Predictive models, sentiment analysis, recommendation engines, and deep learning solutions.',
    accent: 'from-pink-500 to-rose-500',
    icon: BarChart3,
  },
  {
    title: 'AI Consulting',
    description: 'Strategic guidance on AI integration, architecture design, and intelligent automation for businesses.',
    accent: 'from-rose-500 to-orange-500',
    icon: Lightbulb,
  },
];

function AnimatedCounter({ value, suffix, decimal, isInView }: { value: number; suffix: string; decimal?: boolean; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 40;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * value);
      if (current >= steps) {
        setCount(value);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span>
      {decimal ? count.toFixed(1) : Math.round(count)}
      {suffix}
    </span>
  );
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="section-divider" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-0">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/30 mb-3 md:mb-4 block">About</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
            Building at the{' '}
            <span className="gradient-text">intersection of AI & product</span>.
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-16">
          {/* Bio card - spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-2 p-5 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 card-glow"
          >
            <p className="text-sm sm:text-base text-white/50 leading-relaxed mb-4">
              As an independent AI/ML Engineer and Full-Stack Developer, I've spent the last 3+ years 
              turning complex challenges into production-ready products. From designing{' '}
              <span className="text-white/80">LLM-powered agents</span> and{' '}
              <span className="text-white/80">RAG documentation assistants</span> to building{' '}
              <span className="text-white/80">full-stack web applications</span>, I bring both technical depth 
              and product thinking to every engagement.
            </p>
            <p className="text-sm sm:text-base text-white/50 leading-relaxed">
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
              className="p-4 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 flex flex-col justify-center card-glow"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1">
                <AnimatedCounter value={stat.number} suffix={stat.suffix} decimal={stat.decimal} isInView={isInView} />
              </div>
              <div className="text-[10px] sm:text-xs text-white/30 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-4 md:mb-6"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/30 mb-4 md:mb-6 block">What I do</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 + index * 0.08 }}
              className="group p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 card-glow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-500`}>
                  <service.icon size={18} className="text-white sm:hidden" />
                  <service.icon size={20} className="text-white hidden sm:block" />
                </div>
                <div className={`w-6 sm:w-8 h-1 rounded-full bg-gradient-to-r ${service.accent} group-hover:w-10 sm:group-hover:w-12 transition-all duration-500`} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white/90 mb-2">{service.title}</h3>
              <p className="text-xs sm:text-sm text-white/40 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
