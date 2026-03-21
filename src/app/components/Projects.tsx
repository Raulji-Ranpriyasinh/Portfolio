import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight, Github, FolderOpen } from 'lucide-react';

const projects = [
  {
    title: 'MindScribe',
    subtitle: 'AI Note-Taking System',
    description: 'Real-time speech-to-text knowledge capture with T5 transformer-powered summarization.',
    tags: ['Flask', 'Transformers', 'Web Speech API', 'NLP'],
    github: 'https://github.com/Raulji-Ranpriyasinh/MindScribe-Note-Taking-app',
    featured: true,
  },
  {
    title: 'Proposal Agent',
    subtitle: 'RAG-Based Generation',
    description: 'AI-powered proposal drafting assistant using vector databases for contextual retrieval from historical data.',
    tags: ['LangChain', 'RAG', 'Vector DB', 'TypeScript'],
    github: 'https://github.com/Raulji-Ranpriyasinh/Proposal-Agent',
    featured: true,
  },
  {
    title: 'Face Recognition Attendance',
    subtitle: 'Computer Vision System',
    description: 'Contactless attendance tracking using real-time face detection and recognition with OpenCV.',
    tags: ['Python', 'OpenCV', 'Flask', 'Deep Learning'],
    github: 'https://github.com/Raulji-Ranpriyasinh/Face-Recoginition-Attendance-System',
    featured: true,
  },
  {
    title: 'Stock Market Simulation',
    subtitle: 'Trading Platform',
    description: 'Comprehensive stock market simulation with real-time data visualization and portfolio tracking.',
    tags: ['JavaScript', 'Data Viz', 'REST APIs'],
    github: 'https://github.com/Raulji-Ranpriyasinh/Stock-Market-Simulation',
    featured: false,
  },
  {
    title: 'Movie Recommender',
    subtitle: 'ML Recommendation Engine',
    description: 'Collaborative filtering-based movie recommendation system with TMDB API integration.',
    tags: ['Flask', 'ML', 'TMDB API', 'Python'],
    github: 'https://github.com/Raulji-Ranpriyasinh/Movie-Recommendation--System',
    featured: false,
  },
  {
    title: 'Sentiment Analysis',
    subtitle: 'NLP Classification',
    description: 'Text sentiment classification using NLP preprocessing and machine learning techniques.',
    tags: ['Python', 'NLP', 'Scikit-learn', 'Pandas'],
    github: 'https://github.com/Raulji-Ranpriyasinh/sentiment-analysis',
    featured: false,
  },
  {
    title: 'Digit Recognizer',
    subtitle: 'Deep Learning CNN',
    description: 'Handwritten digit recognition system using convolutional neural networks on MNIST.',
    tags: ['Python', 'TensorFlow', 'CNN', 'OpenCV'],
    github: 'https://github.com/Raulji-Ranpriyasinh/Digit-Recoginizer',
    featured: false,
  },
  {
    title: 'E-Commerce Platform',
    subtitle: 'Full-Stack Web App',
    description: 'Full-stack e-commerce with product catalog, shopping cart, and checkout functionality.',
    tags: ['HTML', 'CSS', 'JavaScript', 'REST APIs'],
    github: 'https://github.com/Raulji-Ranpriyasinh/E-Commerce-Website',
    featured: false,
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
            <FolderOpen size={12} className="text-indigo-400" />
            Selected Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Things I've{' '}
            <span className="gradient-text">built</span>.
          </h2>
        </motion.div>

        {/* Featured - bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {featuredProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className={`group relative p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500 cursor-pointer overflow-hidden ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shrink-0" />
                  <span className="text-xs text-white/30 uppercase tracking-wider font-medium">{project.subtitle}</span>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-white/20 group-hover:text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-white/90 mb-3">{project.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-full border border-white/10 text-white/40 bg-white/[0.02]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Other projects - compact grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {otherProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.08 }}
              className="group relative p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-xs text-white/30 uppercase tracking-wider font-medium">{project.subtitle}</span>
                  <h3 className="text-lg font-semibold text-white/80 mt-1">{project.title}</h3>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-white/15 group-hover:text-white/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                />
              </div>
              <p className="text-xs text-white/35 leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-full border border-white/[0.08] text-white/30 bg-white/[0.02]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/Raulji-Ranpriyasinh"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/15 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 text-sm font-medium"
          >
            <Github size={18} />
            View all on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
