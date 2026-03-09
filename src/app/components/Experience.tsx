import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'AI Engineer',
    company: 'vTech Solution Inc',
    location: 'Remote',
    period: '2024 - Present',
    description: 'Leading AI initiatives and developing cutting-edge generative AI solutions',
    achievements: [
      'Developed text-to-video generation plugin using Azure Foundry Sora API',
      'Built proposal generation RAG agent for automated document creation',
      'Implemented CrewAI automation bot for workflow optimization',
      'Created AI-powered job matching engine using Azure OpenAI',
    ],
    color: 'from-blue-600 to-blue-700',
  },
  {
    role: 'Associate AI/ML Engineer',
    company: 'Reyna Solutions',
    location: 'Remote',
    period: '2023 - 2024',
    description: 'Focused on healthcare AI solutions and ML pipeline optimization',
    achievements: [
      'Developed healthcare chatbot for patient engagement and support',
      'Implemented role-based RAG system for secure document retrieval',
      'Optimized ML workflow reducing processing time by 40%',
      'Built Flask-based REST APIs for ML model deployment',
    ],
    color: 'from-slate-600 to-slate-700',
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-slate-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Briefcase className="text-blue-700" size={28} />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-slate-900 bg-clip-text text-transparent">
              Work Experience
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Building innovative AI solutions across diverse industries
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 via-slate-500 to-cyan-600 rounded-full" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-purple-500 rounded-full z-10 shadow-lg" />

                {/* Spacer */}
                <div className="hidden md:block w-1/2" />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="w-full md:w-1/2 group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-teal-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100">
                    {/* Header */}
                    <div className="mb-6">
                      <div className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} text-white font-semibold mb-4 shadow-md`}>
                        {exp.period}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-gray-600 mb-3">
                        <div className="flex items-center gap-2">
                          <Briefcase size={18} className="text-purple-600" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={18} className="text-teal-600" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 italic">
                        {exp.description}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                          className="flex gap-3"
                        >
                          <div className="flex-shrink-0 w-2 h-2 mt-2 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full" />
                          <p className="text-gray-700">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}