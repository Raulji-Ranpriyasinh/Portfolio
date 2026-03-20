import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Video, Users, Bot, Code } from 'lucide-react';

const highlights = [
  {
    icon: Bot,
    title: 'Generative AI & LLM Systems',
    description: 'Design and build RAG pipelines, conversational agents, and LLM-powered automation workflows for clients worldwide',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'End-to-end web application development with React, Flask, FastAPI, and modern frontend/backend architectures',
    color: 'from-slate-600 to-slate-700',
  },
  {
    icon: Sparkles,
    title: 'Data Science & ML',
    description: 'Data analysis, ML model development, and predictive systems using TensorFlow, PyTorch, Scikit-learn, and Pandas',
    color: 'from-cyan-600 to-cyan-700',
  },
  {
    icon: Users,
    title: 'Freelance AI Solutions',
    description: 'Delivering custom AI-driven automation, intelligent chatbots, and scalable ML solutions as an independent consultant',
    color: 'from-blue-700 to-blue-800',
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-slate-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-blue-700" size={28} />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-slate-900 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I'm a freelance AI/ML Engineer, Full-Stack Developer, and Data Scientist specializing in building 
            real-world AI solutions. With expertise in Generative AI, LLM-powered systems, and full-stack web 
            development, I help businesses transform complex challenges into intelligent, scalable applications.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-slate-400/10 to-cyan-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${highlight.color} mb-4`}>
                  <highlight.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/8 via-slate-400/8 to-cyan-600/8 rounded-3xl blur-2xl" />
          <div className="relative bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200">
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-4">
                As a freelance AI/ML Engineer and Full-Stack Developer, I've built a career around solving 
                real-world problems through cutting-edge technology. From designing LLM-powered conversational 
                agents and RAG-based documentation assistants to developing full-stack web applications, I 
                deliver solutions that combine technical excellence with practical business impact.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                I specialize in <span className="font-semibold text-blue-700">Generative AI</span>, 
                <span className="font-semibold text-slate-800">LangChain & CrewAI Agents</span>, and <span className="font-semibold text-cyan-700">Full-Stack Web Development</span>. 
                My expertise spans building RAG pipelines with vector databases, prompt engineering, deploying 
                production-ready ML workflows, and creating end-to-end web applications with React and Python backends.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Whether it's building a text-to-video automation system, developing intelligent proposal generation 
                agents, creating AI-powered note-taking apps, or engineering candidate-job matching engines, I bring 
                a comprehensive full-stack approach. I'm passionate about delivering reliable AI architectures that 
                enable intelligent automation for clients across industries.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
