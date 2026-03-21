import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from './ThemeContext';

const roles = [
  'AI/ML Engineer',
  'Full-Stack Developer',
  'Data Scientist',
  'Freelancer',
];

function AnimatedFigure({ isDark }: { isDark: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => {
      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.5;
      const cy = h * 0.52;
      const glowRadius = Math.min(w, h) * 0.42;
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowRadius);
      if (isDark) {
        glow.addColorStop(0, 'rgba(168, 85, 247, 0.18)');
        glow.addColorStop(0.4, 'rgba(236, 72, 153, 0.10)');
        glow.addColorStop(1, 'rgba(0,0,0,0)');
      } else {
        glow.addColorStop(0, 'rgba(168, 85, 247, 0.12)');
        glow.addColorStop(0.4, 'rgba(236, 72, 153, 0.06)');
        glow.addColorStop(1, 'rgba(255,255,255,0)');
      }
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      const figScale = Math.min(w, h) * 0.0028;
      const figX = cx;
      const figY = cy + 20 + Math.sin(t * 0.8) * 6;

      ctx.save();
      ctx.translate(figX, figY);
      ctx.scale(figScale, figScale);

      ctx.beginPath();
      ctx.arc(0, -75, 18, 0, Math.PI * 2);
      const headGrad = ctx.createRadialGradient(0, -75, 0, 0, -75, 18);
      if (isDark) {
        headGrad.addColorStop(0, 'rgba(200, 180, 220, 0.9)');
        headGrad.addColorStop(1, 'rgba(139, 92, 246, 0.7)');
      } else {
        headGrad.addColorStop(0, 'rgba(120, 80, 180, 0.85)');
        headGrad.addColorStop(1, 'rgba(99, 60, 160, 0.65)');
      }
      ctx.fillStyle = headGrad;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(-22, -55);
      ctx.quadraticCurveTo(-28, 0, -20, 60);
      ctx.lineTo(20, 60);
      ctx.quadraticCurveTo(28, 0, 22, -55);
      ctx.closePath();
      const bodyGrad = ctx.createLinearGradient(0, -55, 0, 60);
      if (isDark) {
        bodyGrad.addColorStop(0, 'rgba(139, 92, 246, 0.75)');
        bodyGrad.addColorStop(1, 'rgba(236, 72, 153, 0.55)');
      } else {
        bodyGrad.addColorStop(0, 'rgba(109, 62, 216, 0.7)');
        bodyGrad.addColorStop(1, 'rgba(206, 52, 133, 0.5)');
      }
      ctx.fillStyle = bodyGrad;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(-22, -45);
      ctx.quadraticCurveTo(-55, -10 + Math.sin(t * 1.2) * 8, -40, 20 + Math.sin(t * 1.2) * 5);
      ctx.lineWidth = 6;
      ctx.strokeStyle = isDark ? 'rgba(139, 92, 246, 0.6)' : 'rgba(109, 62, 216, 0.55)';
      ctx.lineCap = 'round';
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(22, -45);
      ctx.quadraticCurveTo(55, -15 + Math.sin(t * 1.2 + 1) * 8, 42, 15 + Math.sin(t * 1.2 + 1) * 5);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-8, 60);
      ctx.lineTo(-15, 110);
      ctx.lineWidth = 7;
      ctx.strokeStyle = isDark ? 'rgba(99, 102, 241, 0.5)' : 'rgba(79, 72, 211, 0.45)';
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(8, 60);
      ctx.lineTo(15, 110);
      ctx.stroke();

      ctx.restore();

      const orbitElements = [
        { angle: t * 0.5, radius: glowRadius * 0.65, size: 14, color: isDark ? 'rgba(99, 102, 241, 0.8)' : 'rgba(79, 72, 211, 0.7)', label: 'AI' },
        { angle: t * 0.4 + 2, radius: glowRadius * 0.75, size: 10, color: isDark ? 'rgba(236, 72, 153, 0.7)' : 'rgba(206, 52, 133, 0.6)', label: 'ML' },
        { angle: t * 0.35 + 4, radius: glowRadius * 0.55, size: 12, color: isDark ? 'rgba(168, 85, 247, 0.75)' : 'rgba(138, 55, 217, 0.65)', label: 'DL' },
        { angle: t * 0.45 + 1, radius: glowRadius * 0.85, size: 8, color: isDark ? 'rgba(139, 92, 246, 0.6)' : 'rgba(109, 62, 216, 0.5)', label: '' },
        { angle: t * 0.3 + 5, radius: glowRadius * 0.7, size: 9, color: isDark ? 'rgba(244, 114, 182, 0.6)' : 'rgba(214, 84, 152, 0.5)', label: '' },
      ];

      orbitElements.forEach((el) => {
        const ex = cx + Math.cos(el.angle) * el.radius;
        const ey = cy + Math.sin(el.angle) * el.radius * 0.6;

        const orbGlow = ctx.createRadialGradient(ex, ey, 0, ex, ey, el.size * 3);
        orbGlow.addColorStop(0, el.color.replace(/[\d.]+\)$/, '0.15)'));
        orbGlow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = orbGlow;
        ctx.beginPath();
        ctx.arc(ex, ey, el.size * 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(ex, ey, el.size, 0, Math.PI * 2);
        ctx.fillStyle = el.color;
        ctx.fill();

        if (el.label) {
          ctx.font = `bold ${el.size * 0.8}px Inter, sans-serif`;
          ctx.fillStyle = 'rgba(255,255,255,0.9)';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(el.label, ex, ey);
        }
      });

      orbitElements.forEach((el) => {
        const ex = cx + Math.cos(el.angle) * el.radius;
        const ey = cy + Math.sin(el.angle) * el.radius * 0.6;
        ctx.beginPath();
        ctx.moveTo(figX, figY - 30);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = isDark ? 'rgba(139, 92, 246, 0.08)' : 'rgba(109, 62, 216, 0.06)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      for (let i = 0; i < 20; i++) {
        const px = cx + Math.sin(t * 0.3 + i * 1.7) * glowRadius * 0.9;
        const py = cy + Math.cos(t * 0.25 + i * 2.1) * glowRadius * 0.7;
        const ps = 1 + Math.sin(t + i) * 0.5;
        ctx.beginPath();
        ctx.arc(px, py, ps, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? `rgba(168, 85, 247, ${0.15 + Math.sin(t + i) * 0.1})` : `rgba(138, 55, 217, ${0.1 + Math.sin(t + i) * 0.08})`;
        ctx.fill();
      }
    },
    [isDark]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      timeRef.current += 0.016;
      const rect = canvas.getBoundingClientRect();
      draw(ctx, rect.width, rect.height, timeRef.current);
      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
    };
  }, [draw]);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { isDark } = useTheme();

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
      <div className={`absolute inset-0 ${isDark ? 'bg-[#0a0a0a]' : 'bg-[#fafafa]'}`} />

      <div className={`absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] ${isDark ? 'bg-indigo-500/10' : 'bg-indigo-500/5'}`} />
      <div className={`absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] ${isDark ? 'bg-purple-500/8' : 'bg-purple-500/4'}`} />
      <div className={`absolute top-[30%] right-[20%] w-[400px] h-[400px] rounded-full blur-[100px] ${isDark ? 'bg-pink-500/8' : 'bg-pink-500/4'}`} />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)'} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm ${
                isDark ? 'border-white/10 bg-white/5 text-white/60' : 'border-black/10 bg-black/5 text-gray-500'
              }`}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for freelance projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
            >
              <span className={isDark ? 'text-white' : 'text-gray-900'}>Ranpriyasinh</span>
              <br />
              <span className="gradient-text">Raulji</span>
              <span className={isDark ? 'text-white/15' : 'text-gray-200'}>.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`text-xl md:text-2xl mb-8 h-10 font-light ${isDark ? 'text-white/40' : 'text-gray-400'}`}
            >
              {'> '}
              <span className={`font-mono ${isDark ? 'text-white/80' : 'text-gray-700'}`}>{displayText}</span>
              <span className="text-indigo-400 animate-blink font-mono">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-base md:text-lg max-w-xl leading-relaxed mb-10 ${isDark ? 'text-white/40' : 'text-gray-500'}`}
            >
              I craft{' '}
              <span className={isDark ? 'text-white/70' : 'text-gray-700'}>intelligent AI systems</span>,{' '}
              <span className={isDark ? 'text-white/70' : 'text-gray-700'}>full-stack applications</span>, and{' '}
              <span className={isDark ? 'text-white/70' : 'text-gray-700'}>data-driven solutions</span>{' '}
              that turn complex problems into elegant, production-ready products.
            </motion.p>

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
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  isDark
                    ? 'bg-white text-[#0a0a0a] hover:bg-white/90'
                    : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:opacity-90'
                }`}
              >
                View my work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('#about')}
                className={`px-6 py-3 border rounded-lg font-semibold text-sm transition-all duration-300 ${
                  isDark
                    ? 'border-white/20 text-white/80 hover:bg-white/5 hover:border-white/30'
                    : 'border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400'
                }`}
              >
                Learn more
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <span className={`text-xs uppercase tracking-widest mr-2 ${isDark ? 'text-white/20' : 'text-gray-400'}`}>Find me</span>
              {[
                { href: 'https://github.com/Raulji-Ranpriyasinh', icon: Github },
                { href: 'https://linkedin.com/in/ranpriyasinh-raulji', icon: Linkedin },
                { href: 'mailto:ranpriyasinhraulji@gmail.com', icon: Mail },
              ].map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  whileHover={{ y: -3 }}
                  className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300 ${
                    isDark
                      ? 'border-white/10 text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5'
                      : 'border-gray-200 text-gray-400 hover:text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                  }`}
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full aspect-square max-w-[480px] mx-auto lg:mx-0"
          >
            <AnimatedFigure isDark={isDark} />
          </motion.div>
        </div>
      </div>

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
          <ArrowDown size={20} className={isDark ? 'text-white/20' : 'text-gray-300'} />
        </motion.div>
      </motion.button>
    </section>
  );
}
