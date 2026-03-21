import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const roles = [
  'AI/ML Engineer',
  'Full-Stack Developer',
  'Data Scientist',
  'Freelancer',
];

/* Scattered particles for the background – mimics the AICM sparkle dots */
function Particles() {
  const particles = [
    { x: '10%', y: '15%', size: 2, delay: 0, opacity: 0.3 },
    { x: '20%', y: '80%', size: 3, delay: 0.5, opacity: 0.2 },
    { x: '35%', y: '25%', size: 2, delay: 1.2, opacity: 0.25 },
    { x: '45%', y: '70%', size: 2, delay: 0.8, opacity: 0.15 },
    { x: '55%', y: '10%', size: 3, delay: 1.5, opacity: 0.3 },
    { x: '60%', y: '50%', size: 2, delay: 0.3, opacity: 0.2 },
    { x: '70%', y: '85%', size: 2, delay: 1.0, opacity: 0.25 },
    { x: '75%', y: '30%', size: 3, delay: 0.7, opacity: 0.2 },
    { x: '80%', y: '60%', size: 2, delay: 1.8, opacity: 0.3 },
    { x: '85%', y: '15%', size: 2, delay: 0.4, opacity: 0.15 },
    { x: '90%', y: '75%', size: 3, delay: 1.3, opacity: 0.25 },
    { x: '15%', y: '55%', size: 2, delay: 2.0, opacity: 0.2 },
    { x: '25%', y: '45%', size: 2, delay: 0.6, opacity: 0.3 },
    { x: '50%', y: '90%', size: 2, delay: 1.6, opacity: 0.15 },
    { x: '65%', y: '40%', size: 3, delay: 0.9, opacity: 0.2 },
    { x: '40%', y: '5%', size: 2, delay: 1.1, opacity: 0.25 },
    { x: '92%', y: '45%', size: 2, delay: 0.2, opacity: 0.2 },
    { x: '5%', y: '35%', size: 3, delay: 1.4, opacity: 0.3 },
    { x: '78%', y: '8%', size: 2, delay: 1.7, opacity: 0.15 },
    { x: '30%', y: '65%', size: 2, delay: 0.1, opacity: 0.2 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: i % 3 === 0 ? '#6366f1' : i % 3 === 1 ? '#a855f7' : '#ec4899',
            opacity: p.opacity,
          }}
          animate={{
            opacity: [p.opacity * 0.3, p.opacity, p.opacity * 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

/* Abstract 3D-style shapes – CSS recreation of the AICM geometric art */
function AbstractShapes() {
  return (
    <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px]">
      {/* Large circular arc – top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        className="absolute top-[5%] right-[5%] w-[320px] h-[320px] lg:w-[400px] lg:h-[400px]"
      >
        {/* Outer ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: '30px solid transparent',
            borderTopColor: 'rgba(99, 102, 241, 0.25)',
            borderRightColor: 'rgba(168, 85, 247, 0.15)',
            filter: 'blur(1px)',
          }}
        />
        {/* Inner glow ring */}
        <div
          className="absolute inset-[15px] rounded-full"
          style={{
            border: '15px solid transparent',
            borderTopColor: 'rgba(99, 102, 241, 0.12)',
            borderRightColor: 'rgba(168, 85, 247, 0.08)',
          }}
        />
        {/* Glow effect behind the arc */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at 60% 30%, rgba(99, 102, 241, 0.08), transparent 70%)',
          }}
        />
      </motion.div>

      {/* Second circular arc – bottom center */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
        className="absolute bottom-[10%] right-[15%] w-[260px] h-[260px] lg:w-[340px] lg:h-[340px]"
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: '25px solid transparent',
            borderBottomColor: 'rgba(168, 85, 247, 0.2)',
            borderLeftColor: 'rgba(236, 72, 153, 0.12)',
            filter: 'blur(1px)',
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at 40% 70%, rgba(168, 85, 247, 0.06), transparent 70%)',
          }}
        />
      </motion.div>

      {/* Glowing beam line – diagonal, like AICM's magenta bar */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
        className="absolute top-[35%] left-[5%] w-[90%] h-[3px] origin-left"
        style={{
          transform: 'rotate(-12deg)',
          background: 'linear-gradient(90deg, transparent, #a855f7, #ec4899, #a855f7, transparent)',
          boxShadow: '0 0 20px rgba(168, 85, 247, 0.4), 0 0 60px rgba(236, 72, 153, 0.2)',
        }}
      />

      {/* Secondary beam */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 0.4, scaleX: 1 }}
        transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
        className="absolute top-[55%] left-[10%] w-[70%] h-[2px] origin-left"
        style={{
          transform: 'rotate(8deg)',
          background: 'linear-gradient(90deg, transparent, #6366f1, #a855f7, transparent)',
          boxShadow: '0 0 15px rgba(99, 102, 241, 0.3)',
        }}
      />

      {/* Glass block – top left of the shapes area */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        className="absolute top-[15%] left-[10%] w-[140px] h-[140px] lg:w-[180px] lg:h-[180px]"
        style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(168, 85, 247, 0.04))',
          border: '1px solid rgba(99, 102, 241, 0.12)',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          transform: 'perspective(500px) rotateY(-15deg) rotateX(10deg)',
        }}
      />

      {/* Floating glass panel – center */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
        className="absolute top-[40%] left-[30%] w-[200px] h-[120px] lg:w-[260px] lg:h-[150px]"
        style={{
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.06), rgba(236, 72, 153, 0.03))',
          border: '1px solid rgba(168, 85, 247, 0.1)',
          borderRadius: '16px',
          backdropFilter: 'blur(8px)',
          transform: 'perspective(500px) rotateY(10deg) rotateX(-5deg)',
        }}
      />

      {/* Small golden ring accent – like AICM */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.0, ease: 'easeOut' }}
        className="absolute bottom-[25%] right-[10%] w-[24px] h-[24px] rounded-full"
        style={{
          border: '3px solid rgba(236, 72, 153, 0.5)',
          boxShadow: '0 0 12px rgba(236, 72, 153, 0.3)',
        }}
      />

      {/* Large ambient glow – indigo */}
      <div
        className="absolute top-[10%] right-[0%] w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Ambient glow – purple */}
      <div
        className="absolute bottom-[5%] left-[20%] w-[350px] h-[350px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08), transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Ambient glow – pink */}
      <div
        className="absolute top-[50%] right-[20%] w-[250px] h-[250px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.06), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Subtle grid lines for depth */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          transform: 'perspective(800px) rotateX(40deg) rotateZ(-5deg)',
          transformOrigin: 'center center',
        }}
      />
    </div>
  );
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(99, 102, 241, 0.06), transparent), radial-gradient(ellipse 60% 50% at 30% 60%, rgba(168, 85, 247, 0.04), transparent)',
        }}
      />

      {/* Particle dots */}
      <Particles />

      {/* Main content – AICM-style split layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          {/* Left – Text content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/60">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for freelance projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1] tracking-tight mb-8"
            >
              <span className="text-white/90">Crafting</span>
              <br />
              <span className="gradient-text">AI Powered</span>
              <br />
              <span className="text-white/90">Digital</span>
              <br />
              <span className="text-white/90">Solutions</span>
              <span className="text-white/15">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base md:text-lg text-white/40 max-w-md leading-relaxed mb-4"
            >
              Transforming complex challenges into elegant,
              production-ready products with AI & full-stack expertise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/40 mb-10 h-8 font-light"
            >
              {'> '}
              <span className="text-white/80 font-mono">{displayText}</span>
              <span className="text-indigo-400 animate-blink font-mono">|</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('#projects')}
                className="px-7 py-3.5 bg-white text-[#0a0a0a] rounded-lg font-semibold text-sm hover:bg-white/90 transition-all duration-300"
              >
                View my work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('#contact')}
                className="px-7 py-3.5 border border-white/20 text-white/80 rounded-lg font-semibold text-sm hover:bg-white/5 hover:border-white/30 transition-all duration-300"
              >
                Let's talk
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <span className="text-xs text-white/20 uppercase tracking-widest mr-2">Find me</span>
              <motion.a
                href="https://github.com/Raulji-Ranpriyasinh"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/ranpriyasinh-raulji"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href="mailto:ranpriyasinhraulji@gmail.com"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              >
                <Mail size={18} />
              </motion.a>
            </motion.div>
          </div>

          {/* Right – Abstract 3D-style shapes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <AbstractShapes />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-white/20" />
        </motion.div>
      </motion.button>
    </section>
  );
}
