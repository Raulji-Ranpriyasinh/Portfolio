import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    role: 'Freelance AI/ML Engineer & Full-Stack Developer',
    type: 'Independent',
    period: '2024 — Present',
    scope: 'Remote · Worldwide',
    highlights: [
      'Built a Generative AI text-to-video automation system with LLM pipelines and Azure OpenAI APIs',
      'Designed RAG-based proposal generation assistant using vector databases for contextual retrieval',
      'Created AI automation pipelines with CrewAI agents for data extraction and web research',
      'Engineered AI-based candidate-job matching engine using NLP for recruitment screening',
      'Automated backend workflows with intelligent bots for data transformation and insertion',
    ],
    stack: ['LangChain', 'CrewAI', 'Azure OpenAI', 'React', 'FastAPI', 'Python'],
  },
  {
    role: 'Associate AI/ML Engineer',
    type: 'Contract',
    period: '2023 — 2024',
    scope: 'Vadodara, Gujarat',
    highlights: [
      'Designed LLM-powered conversational agent for healthcare appointment scheduling',
      'Developed RAG-based documentation assistant with vector embeddings and semantic search',
      'Implemented retrieval pipelines and embedding-based search for AI-powered support systems',
      'Contributed to AI-driven healthcare data workflows with ML models and data pipelines',
    ],
    stack: ['LLMs', 'RAG', 'Flask', 'Vector DBs', 'Python', 'TensorFlow'],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="section-divider" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-0">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/30 mb-3 md:mb-4 block">Experience</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Where I've{' '}
            <span className="gradient-text">made impact</span>.
          </h2>
        </motion.div>

        <div className="space-y-4 md:space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              className="group"
            >
              <div className="relative p-5 sm:p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-500 overflow-hidden card-glow">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-4 md:mb-6">
                  <div>
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3 mb-2">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90">{exp.role}</h3>
                      <ArrowUpRight size={18} className="text-white/20 group-hover:text-white/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 mt-1 sm:mt-0" />
                    </div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                      <span className="px-2.5 py-0.5 rounded-full border border-white/10 text-white/40">{exp.type}</span>
                      <span className="text-white/30">{exp.scope}</span>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-white/30 font-mono shrink-0">{exp.period}</span>
                </div>

                {/* Highlights */}
                <div className="space-y-2 md:space-y-2.5 mb-4 md:mb-6">
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className="flex gap-2 sm:gap-3 items-start">
                      <div className="w-1 h-1 rounded-full bg-white/20 mt-2 sm:mt-2.5 shrink-0" />
                      <p className="text-xs sm:text-sm text-white/40 leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 md:px-3 text-[11px] md:text-xs rounded-full border border-white/10 text-white/40 bg-white/[0.02]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 md:mt-6 p-5 sm:p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.15] transition-all duration-500 card-glow"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-2">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white/80">B.Tech in Computer Science</h3>
              <p className="text-xs sm:text-sm text-white/30">Data Science Specialization · ITM Vocational University</p>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-xl sm:text-2xl font-bold gradient-text">9.0 CGPA</span>
              <span className="text-xs sm:text-sm text-white/30 font-mono">2021 — 2025</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
