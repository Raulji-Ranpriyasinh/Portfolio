import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Wrench } from 'lucide-react';
import { useTheme } from './ThemeContext';

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
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { isDark } = useTheme();

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
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
            <Wrench size={12} className="text-indigo-400" />
            Skills
          </span>
          <h2 className={`text-3xl md:text-5xl font-bold ${isDark ? '' : 'text-gray-900'}`}>
            Technologies I{' '}
            <span className="gradient-text">work with</span>.
          </h2>
        </motion.div>
      </div>

      <div className="space-y-4 mb-16">
        {[row1, row2, row3].map((row, rowIndex) => (
          <div key={rowIndex} className="overflow-hidden">
            <div className={`flex gap-4 ${rowIndex % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'}`} style={{ width: 'max-content' }}>
              {[...row, ...row].map((skill, i) => (
                <div
                  key={`${skill}-${i}`}
                  className={`px-5 py-2.5 rounded-full border text-sm font-medium whitespace-nowrap transition-all duration-300 cursor-default ${
                    isDark
                      ? 'border-white/10 bg-white/[0.02] text-white/50 hover:border-white/30 hover:text-white/80 hover:bg-white/[0.05]'
                      : 'border-gray-200 bg-white text-gray-500 hover:border-gray-400 hover:text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techStack.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
            >
              <h3 className={`text-xs uppercase tracking-[0.2em] mb-4 ${isDark ? 'text-white/30' : 'text-gray-400'}`}>{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1.5 text-sm rounded-lg border transition-all duration-300 cursor-default ${
                      isDark
                        ? 'border-white/10 bg-white/[0.03] text-white/60 hover:text-white/90 hover:border-white/20'
                        : 'border-gray-200 bg-white text-gray-600 hover:text-gray-900 hover:border-gray-400'
                    }`}
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
