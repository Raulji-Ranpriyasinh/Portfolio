import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight, Briefcase } from 'lucide-react';
import { useTheme } from './ThemeContext';

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
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { isDark } = useTheme();

  return (
    <section id="experience" className="py-24 relative">
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${isDark ? 'via-white/10' : 'via-black/10'} to-transparent`} />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs uppercase tracking-[0.2em] mb-4 ${
            isDark ? 'border-white/10 bg-white/[0.03] text-white/40' : 'border-black/10 bg-black/[0.03] text-gray-500'
          }`}>
            <Briefcase size={12} className="text-indigo-400" />
            Experience
          </span>
          <h2 className={`text-3xl md:text-5xl font-bold ${isDark ? '' : 'text-gray-900'}`}>
            Where I've{' '}
            <span className="gradient-text">made impact</span>.
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              className="group"
            >
              <div className={`relative p-8 rounded-2xl border transition-all duration-500 overflow-hidden ${
                isDark
                  ? 'border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.15]'
                  : 'border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300'
              }`}>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className={`text-xl md:text-2xl font-semibold ${isDark ? 'text-white/90' : 'text-gray-800'}`}>{exp.role}</h3>
                      <ArrowUpRight size={18} className={`${isDark ? 'text-white/20 group-hover:text-white/50' : 'text-gray-300 group-hover:text-gray-500'} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300`} />
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <span className={`px-2.5 py-0.5 rounded-full border ${isDark ? 'border-white/10 text-white/40' : 'border-gray-200 text-gray-500'}`}>{exp.type}</span>
                      <span className={isDark ? 'text-white/30' : 'text-gray-400'}>{exp.scope}</span>
                    </div>
                  </div>
                  <span className={`text-sm font-mono shrink-0 ${isDark ? 'text-white/30' : 'text-gray-400'}`}>{exp.period}</span>
                </div>

                <div className="space-y-2.5 mb-6">
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className={`w-1 h-1 rounded-full mt-2.5 shrink-0 ${isDark ? 'bg-white/20' : 'bg-gray-300'}`} />
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-white/40' : 'text-gray-500'}`}>{highlight}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full border ${
                        isDark ? 'border-white/10 text-white/40 bg-white/[0.02]' : 'border-gray-200 text-gray-500 bg-gray-50'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`mt-6 p-6 rounded-2xl border transition-all duration-500 ${
            isDark
              ? 'border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.15]'
              : 'border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white/80' : 'text-gray-800'}`}>B.Tech in Computer Science</h3>
              <p className={`text-sm ${isDark ? 'text-white/30' : 'text-gray-400'}`}>Data Science Specialization · ITM Vocational University</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold gradient-text">9.0 CGPA</span>
              <span className={`text-sm font-mono ${isDark ? 'text-white/30' : 'text-gray-400'}`}>2021 — 2025</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
