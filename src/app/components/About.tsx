import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Video, Users, Bot, Code } from 'lucide-react';

const highlights = [
  {
    icon: Video,
    title: 'Text-to-Video Generation',
    description: 'Developed cutting-edge text-to-video solutions using Azure Foundry Sora API',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: Users,
    title: 'AI-Powered Job Matching',
    description: 'Built intelligent candidate-job matching engine using Azure OpenAI and NLP',
    color: 'from-slate-600 to-slate-700',
  },
  {
    icon: Bot,
    title: 'Backend Automation',
    description: 'Created intelligent automation bots using Flask APIs and CrewAI framework',
    color: 'from-cyan-600 to-cyan-700',
  },
  {
    icon: Code,
    title: 'RAG Systems',
    description: 'Implemented role-based RAG systems and proposal generation agents',
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
            I'm an AI/ML Engineer specializing in building real-world AI solutions that make a difference. 
            With expertise in Generative AI, NLP, and LLMs, I transform complex challenges into intelligent, 
            scalable applications that drive business value.
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
                My journey in AI/ML has been driven by a passion for solving real-world problems through 
                cutting-edge technology. From developing healthcare chatbots to building intelligent automation 
                systems, I've consistently delivered solutions that combine technical excellence with practical impact.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                I specialize in leveraging the latest advancements in <span className="font-semibold text-blue-700">Generative AI</span>, 
                <span className="font-semibold text-slate-800"> Transformers</span>, and <span className="font-semibold text-cyan-700">Large Language Models</span> to 
                create innovative applications. My expertise spans from building RAG-based systems and prompt engineering 
                to deploying production-ready ML workflows and REST APIs.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Whether it's creating a text-to-video generation plugin, optimizing ML pipelines, or developing 
                intelligent chatbots, I bring a comprehensive approach that balances innovation with reliability. 
                I'm always excited to tackle new challenges and push the boundaries of what's possible with AI.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}