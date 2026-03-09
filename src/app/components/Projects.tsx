import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { FolderGit2, ExternalLink, Github, Brain, MessageSquare, Mic, FileText } from 'lucide-react';

const projects = [
  {
    title: 'MindScribe AI Note-Taking App',
    description: 'An intelligent note-taking application leveraging Web Speech API for voice-to-text conversion and T5 transformer model for automatic summarization.',
    icon: FileText,
    color: 'from-blue-600 to-blue-700',
    tags: ['Web Speech API', 'T5 Model', 'NLP', 'React', 'Python'],
    features: [
      'Real-time voice-to-text conversion using Web Speech API',
      'AI-powered summarization with T5 transformer model',
      'Smart note organization and categorization',
      'Export notes in multiple formats (PDF, Markdown, TXT)',
    ],
    gradient: 'from-blue-50/80 to-slate-100/80',
  },
  {
    title: 'AI Chatbot with NLP Intent Classification',
    description: 'A sophisticated conversational AI chatbot with advanced NLP capabilities for accurate intent recognition and contextual responses.',
    icon: MessageSquare,
    color: 'from-slate-600 to-slate-700',
    tags: ['NLP', 'Intent Classification', 'Flask', 'Machine Learning', 'REST API'],
    features: [
      'Advanced NLP-based intent classification',
      'Contextual conversation flow management',
      'Multi-turn dialogue support',
      'RESTful API for easy integration',
    ],
    gradient: 'from-slate-50/80 to-cyan-100/80',
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-100/50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FolderGit2 className="text-blue-700" size={28} />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-slate-900 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Showcasing innovative AI/ML solutions that solve real-world problems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-slate-400/10 to-cyan-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className={`relative bg-gradient-to-br ${project.gradient} backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${project.color} shadow-lg`}>
                    <project.icon className="text-white" size={32} />
                  </div>
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-white/80 rounded-lg hover:bg-white transition-all duration-300 shadow-md"
                    >
                      <Github size={20} className="text-gray-700" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-white/80 rounded-lg hover:bg-white transition-all duration-300 shadow-md"
                    >
                      <ExternalLink size={20} className="text-gray-700" />
                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  {project.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                      className="flex gap-3"
                    >
                      <div className={`flex-shrink-0 w-2 h-2 mt-2 bg-gradient-to-r ${project.color} rounded-full`} />
                      <p className="text-gray-700">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            <Github size={20} />
            View More on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}