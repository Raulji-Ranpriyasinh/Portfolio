import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { FolderGit2, ExternalLink, Github, Brain, MessageSquare, FileText, BarChart3, Camera, Bot, Clapperboard, ShoppingCart } from 'lucide-react';

const projects = [
  {
    title: 'AI-Based Note-Taking System (MindScribe)',
    description: 'A real-time speech-to-text knowledge capture system with AI-powered summarization, enabling voice-based note creation and intelligent content organization.',
    icon: FileText,
    color: 'from-blue-600 to-blue-700',
    tags: ['Flask', 'Web Speech API', 'Transformers', 'T5 Model', 'NLP'],
    features: [
      'Real-time voice-to-text conversion using Web Speech API',
      'AI-powered summarization with T5 transformer model',
      'Smart note organization and categorization',
      'Export notes in multiple formats (PDF, Markdown, TXT)',
    ],
    gradient: 'from-blue-50/80 to-slate-100/80',
    github: 'https://github.com/Raulji-Ranpriyasinh/MindScribe-Note-Taking-app',
  },
  {
    title: 'Proposal Generation Agent',
    description: 'An AI-powered RAG-based proposal generation assistant that leverages historical organizational data for contextual retrieval and automated proposal drafting.',
    icon: Bot,
    color: 'from-cyan-600 to-cyan-700',
    tags: ['LangChain', 'RAG', 'Vector Database', 'TypeScript', 'LLMs'],
    features: [
      'RAG pipeline with vector database for historical data retrieval',
      'Automated proposal drafting with contextual awareness',
      'Semantic search for relevant organizational knowledge',
      'LLM-powered content generation and formatting',
    ],
    gradient: 'from-cyan-50/80 to-blue-100/80',
    github: 'https://github.com/Raulji-Ranpriyasinh/Proposal-Agent',
  },
  {
    title: 'Face Recognition Attendance System',
    description: 'An intelligent attendance management system using computer vision and face recognition technology for automated, contactless attendance tracking.',
    icon: Camera,
    color: 'from-slate-600 to-slate-700',
    tags: ['Python', 'OpenCV', 'Face Recognition', 'Flask', 'HTML'],
    features: [
      'Real-time face detection and recognition',
      'Automated attendance logging with timestamps',
      'Multi-face recognition support',
      'Web-based dashboard for attendance management',
    ],
    gradient: 'from-slate-50/80 to-cyan-100/80',
    github: 'https://github.com/Raulji-Ranpriyasinh/Face-Recoginition-Attendance-System',
  },
  {
    title: 'Stock Market Simulation',
    description: 'A comprehensive stock market simulation platform for learning and practicing trading strategies with real-time data visualization and portfolio tracking.',
    icon: BarChart3,
    color: 'from-blue-700 to-blue-800',
    tags: ['HTML', 'JavaScript', 'Data Visualization', 'REST APIs'],
    features: [
      'Real-time stock data visualization and charting',
      'Virtual portfolio management and tracking',
      'Trading strategy simulation',
      'Performance analytics and reporting',
    ],
    gradient: 'from-blue-50/80 to-slate-100/80',
    github: 'https://github.com/Raulji-Ranpriyasinh/Stock-Market-Simulation',
  },
  {
    title: 'Movie Recommendation System',
    description: 'A Flask-based movie recommendation web app using collaborative filtering and TMDB API for personalized movie suggestions.',
    icon: Clapperboard,
    color: 'from-cyan-600 to-cyan-700',
    tags: ['Flask', 'Collaborative Filtering', 'TMDB API', 'Python', 'ML'],
    features: [
      'Collaborative filtering recommendation engine',
      'TMDB API integration for movie metadata',
      'Personalized top movie suggestions',
      'Interactive browsing and curated movie lists',
    ],
    gradient: 'from-cyan-50/80 to-blue-100/80',
    github: 'https://github.com/Raulji-Ranpriyasinh/Movie-Recommendation--System',
  },
  {
    title: 'Sentiment Analysis',
    description: 'An NLP-based sentiment analysis tool for classifying text into positive, negative, or neutral sentiments using machine learning techniques.',
    icon: MessageSquare,
    color: 'from-slate-600 to-slate-700',
    tags: ['Python', 'NLP', 'Jupyter Notebook', 'Scikit-learn', 'Pandas'],
    features: [
      'Text preprocessing and feature extraction',
      'ML-based sentiment classification',
      'Data visualization of sentiment distributions',
      'Support for batch text analysis',
    ],
    gradient: 'from-slate-50/80 to-cyan-100/80',
    github: 'https://github.com/Raulji-Ranpriyasinh/sentiment-analysis',
  },
  {
    title: 'Digit Recognizer',
    description: 'A deep learning-powered handwritten digit recognition system built with neural networks for accurate digit classification.',
    icon: Brain,
    color: 'from-blue-600 to-blue-700',
    tags: ['Python', 'TensorFlow', 'Deep Learning', 'CNN', 'OpenCV'],
    features: [
      'CNN-based digit classification model',
      'Real-time handwritten digit recognition',
      'Model training and evaluation pipeline',
      'High accuracy on MNIST dataset',
    ],
    gradient: 'from-blue-50/80 to-slate-100/80',
    github: 'https://github.com/Raulji-Ranpriyasinh/Digit-Recoginizer',
  },
  {
    title: 'E-Commerce Website',
    description: 'A full-stack e-commerce web application with product catalog, shopping cart, and checkout functionality built with modern web technologies.',
    icon: ShoppingCart,
    color: 'from-blue-700 to-blue-800',
    tags: ['HTML', 'CSS', 'JavaScript', 'Full-Stack', 'REST APIs'],
    features: [
      'Product catalog with search and filtering',
      'Shopping cart and checkout flow',
      'Responsive design for all devices',
      'RESTful API backend integration',
    ],
    gradient: 'from-blue-50/80 to-slate-100/80',
    github: 'https://github.com/Raulji-Ranpriyasinh/E-Commerce-Website',
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
            AI/ML, full-stack, and data science projects solving real-world problems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
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
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-white/80 rounded-lg hover:bg-white transition-all duration-300 shadow-md"
                    >
                      <Github size={20} className="text-gray-700" />
                    </motion.a>
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
                      transition={{ duration: 0.5, delay: index * 0.1 + i * 0.05 }}
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
          <motion.a
            href="https://github.com/Raulji-Ranpriyasinh"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            <Github size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
