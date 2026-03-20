import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Brain, Sparkles, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming & Full-Stack',
    icon: Code,
    color: 'from-blue-600 to-blue-700',
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'C++', 'HTML', 'CSS', 'React', 'Flask', 'FastAPI'],
  },
  {
    title: 'Generative AI & NLP',
    icon: Sparkles,
    color: 'from-cyan-600 to-cyan-700',
    skills: ['LLMs', 'LangChain', 'CrewAI', 'Hugging Face Transformers', 'RAG Pipelines', 'Prompt Engineering', 'Azure OpenAI', 'Agent Systems'],
  },
  {
    title: 'Data Science & ML',
    icon: Brain,
    color: 'from-slate-600 to-slate-700',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'Jupyter', 'Matplotlib'],
  },
  {
    title: 'AI Systems & Tools',
    icon: Wrench,
    color: 'from-blue-700 to-blue-800',
    skills: ['Vector Databases', 'Semantic Search', 'REST APIs', 'Git', 'GitHub', 'Postman', 'VS Code', 'Docker'],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-100/50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-slate-900 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning AI/ML, full-stack development, and data science
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-slate-400/10 to-cyan-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}>
                    <category.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.1 }}
                      className={`px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-default`}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-slate-400/10 to-cyan-600/10 rounded-2xl blur-xl" />
            <div className="relative bg-white/70 backdrop-blur-md px-8 py-6 rounded-2xl shadow-lg border border-slate-200">
              <p className="text-slate-700 font-medium">
                Continuously learning and adapting to the latest advancements in AI/ML
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
