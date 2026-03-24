import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const row1 = ['Python', 'TypeScript', 'React', 'LangChain', 'CrewAI', 'TensorFlow', 'PyTorch', 'Flask', 'FastAPI', 'OpenCV'];
const row2 = ['LLMs', 'RAG Pipelines', 'Prompt Engineering', 'Azure OpenAI', 'Vector Databases', 'Semantic Search', 'Agent Systems', 'Hugging Face', 'Scikit-learn', 'Pandas'];
const row3 = ['JavaScript', 'SQL', 'C++', 'NumPy', 'Jupyter', 'REST APIs', 'Git', 'Docker', 'Postman', 'HTML/CSS'];

const techStack = [
  {
    category: 'AI & Generative AI',
    items: ['LLMs', 'LangChain', 'CrewAI', 'RAG Pipelines', 'Prompt Engineering', 'Azure OpenAI', 'Hugging Face Transformers', 'Agent Systems', 'Vector Databases', 'Semantic Search'],
  },
  {
    category: 'Data Science & ML',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'Jupyter', 'Matplotlib'],
  },
  {
    category: 'Full-Stack',
    items: ['Python', 'TypeScript', 'JavaScript', 'React', 'Flask', 'FastAPI', 'REST APIs', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code'],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      <div className="section-divider" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-0">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/30 mb-3 md:mb-4 block">Skills</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Technologies I{' '}
            <span className="gradient-text">work with</span>.
          </h2>
        </motion.div>
      </div>

      {/* Marquee rows - pause on hover */}
      <div className="space-y-3 md:space-y-4 mb-10 md:mb-16">
        {[row1, row2, row3].map((row, rowIndex) => (
          <div key={rowIndex} className="overflow-hidden marquee-container">
            <div className={`flex gap-3 md:gap-4 ${rowIndex % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'}`} style={{ width: 'max-content' }}>
              {[...row, ...row].map((skill, i) => (
                <div
                  key={`${skill}-${i}`}
                  className="px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-white/10 bg-white/[0.02] text-white/50 text-xs md:text-sm font-medium whitespace-nowrap hover:border-white/30 hover:text-white/80 hover:bg-white/[0.05] transition-all duration-300 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Detailed stack */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {techStack.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
              className="p-4 sm:p-5 rounded-2xl border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 card-glow"
            >
              <h3 className="text-xs uppercase tracking-[0.2em] text-white/30 mb-3 md:mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 md:px-3 md:py-1.5 text-xs md:text-sm rounded-lg border border-white/10 bg-white/[0.03] text-white/60 hover:text-white/90 hover:border-white/20 transition-all duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
