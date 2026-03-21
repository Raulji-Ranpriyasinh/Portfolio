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

interface Point3D {
  x: number;
  y: number;
  z: number;
}

function rotateX(p: Point3D, angle: number): Point3D {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return { x: p.x, y: p.y * cos - p.z * sin, z: p.y * sin + p.z * cos };
}

function rotateY(p: Point3D, angle: number): Point3D {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return { x: p.x * cos + p.z * sin, y: p.y, z: -p.x * sin + p.z * cos };
}

function rotateZ(p: Point3D, angle: number): Point3D {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return { x: p.x * cos - p.y * sin, y: p.x * sin + p.y * cos, z: p.z };
}

function project(p: Point3D, cx: number, cy: number, fov: number): { x: number; y: number; scale: number } {
  const scale = fov / (fov + p.z);
  return { x: cx + p.x * scale, y: cy + p.y * scale, scale };
}

function RotatingTorus({ isDark }: { isDark: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => {
      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.5;
      const cy = h * 0.48;
      const baseSize = Math.min(w, h) * 0.35;
      const fov = 500;

      const R = baseSize * 0.7;
      const r = baseSize * 0.28;

      const glowRadius = baseSize * 2.0;
      const glow = ctx.createRadialGradient(cx, cy, baseSize * 0.2, cx, cy, glowRadius);
      if (isDark) {
        glow.addColorStop(0, 'rgba(168, 85, 247, 0.12)');
        glow.addColorStop(0.3, 'rgba(99, 102, 241, 0.08)');
        glow.addColorStop(0.6, 'rgba(236, 72, 153, 0.04)');
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        glow.addColorStop(0, 'rgba(168, 85, 247, 0.08)');
        glow.addColorStop(0.3, 'rgba(99, 102, 241, 0.05)');
        glow.addColorStop(0.6, 'rgba(236, 72, 153, 0.025)');
        glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      const uSteps = 48;
      const vSteps = 24;
      const rx = t * 0.3 + 0.5;
      const ry = t * 0.2;
      const rz = t * 0.15 + 0.3;

      const points: Point3D[][] = [];
      const projected2D: { x: number; y: number; scale: number }[][] = [];

      for (let i = 0; i <= uSteps; i++) {
        points[i] = [];
        projected2D[i] = [];
        const u = (i / uSteps) * Math.PI * 2;
        for (let j = 0; j <= vSteps; j++) {
          const v = (j / vSteps) * Math.PI * 2;
          let p: Point3D = {
            x: (R + r * Math.cos(v)) * Math.cos(u),
            y: (R + r * Math.cos(v)) * Math.sin(u),
            z: r * Math.sin(v),
          };
          p = rotateX(p, rx);
          p = rotateY(p, ry);
          p = rotateZ(p, rz);
          points[i][j] = p;
          projected2D[i][j] = project(p, cx, cy, fov);
        }
      }

      const quads: { corners3D: Point3D[]; corners2D: { x: number; y: number; scale: number }[]; avgZ: number; uIdx: number; vIdx: number }[] = [];
      for (let i = 0; i < uSteps; i++) {
        for (let j = 0; j < vSteps; j++) {
          const c3 = [points[i][j], points[i+1][j], points[i+1][j+1], points[i][j+1]];
          const c2 = [projected2D[i][j], projected2D[i+1][j], projected2D[i+1][j+1], projected2D[i][j+1]];
          const avgZ = (c3[0].z + c3[1].z + c3[2].z + c3[3].z) / 4;
          quads.push({ corners3D: c3, corners2D: c2, avgZ, uIdx: i, vIdx: j });
        }
      }
      quads.sort((a, b) => a.avgZ - b.avgZ);
      const maxZ = R + r;

      quads.forEach((quad) => {
        const { corners2D: c2d, corners3D: c3d, avgZ: aZ, uIdx: ui, vIdx: vi } = quad;
        const nx = c3d.reduce((s, c) => s + c.x, 0) / 4;
        const ny = c3d.reduce((s, c) => s + c.y, 0) / 4;
        const nzVal = c3d.reduce((s, c) => s + c.z, 0) / 4;
        const len = Math.sqrt(nx*nx + ny*ny + nzVal*nzVal) || 1;
        const nz = nzVal / len;
        const depthFactor = (aZ + maxZ) / (2 * maxZ);
        const uProgress = ui / uSteps;
        const vProgress = vi / vSteps;
        const colorPhase = (uProgress * 3 + t * 0.1) % 1;

        let rc: number, gc: number, bc: number;
        if (colorPhase < 0.33) {
          const lp = colorPhase / 0.33;
          rc = 99 + (168-99)*lp; gc = 102 + (85-102)*lp; bc = 241 + (247-241)*lp;
        } else if (colorPhase < 0.66) {
          const lp = (colorPhase-0.33) / 0.33;
          rc = 168 + (236-168)*lp; gc = 85 + (72-85)*lp; bc = 247 + (153-247)*lp;
        } else {
          const lp = (colorPhase-0.66) / 0.34;
          rc = 236 + (99-236)*lp; gc = 72 + (102-72)*lp; bc = 153 + (241-153)*lp;
        }

        const highlight = Math.pow(Math.max(0, nz), 2);
        const fresnel = 1.0 - Math.abs(nz);
        const fresnelBoost = fresnel * 0.3;
        const lightAngle = t * 0.4;
        const lx = Math.cos(lightAngle), ly = Math.sin(lightAngle)*0.5, lz = 0.7;
        const ll = Math.sqrt(lx*lx+ly*ly+lz*lz);
        const dotL = nx/len*lx/ll + ny/len*ly/ll + nzVal/len*lz/ll;
        const specular = Math.pow(Math.max(0, dotL), 8) * 0.5;
        const baseBr = 0.35 + depthFactor*0.35 + highlight*0.3 + fresnelBoost;
        const finalBr = Math.min(1, baseBr + specular);
        const gR = Math.min(255, rc*finalBr + specular*200 + vProgress*15);
        const gG = Math.min(255, gc*finalBr + specular*180 + vProgress*10);
        const gB = Math.min(255, bc*finalBr + specular*220 + vProgress*12);
        const alpha = isDark ? 0.6+depthFactor*0.35+highlight*0.05 : 0.5+depthFactor*0.4+highlight*0.1;

        ctx.beginPath();
        ctx.moveTo(c2d[0].x, c2d[0].y);
        ctx.lineTo(c2d[1].x, c2d[1].y);
        ctx.lineTo(c2d[2].x, c2d[2].y);
        ctx.lineTo(c2d[3].x, c2d[3].y);
        ctx.closePath();
        ctx.fillStyle = 'rgba('+Math.round(gR)+','+Math.round(gG)+','+Math.round(gB)+','+alpha.toFixed(3)+')';
        ctx.fill();
        if (specular > 0.1) {
          ctx.fillStyle = 'rgba(255,255,255,'+( specular*(isDark?0.3:0.4) ).toFixed(3)+')';
          ctx.fill();
        }
      });

      for (let i = 0; i < 30; i++) {
        const angle = t*0.15 + i*(Math.PI*2/30);
        const pR = baseSize*(1.3+Math.sin(t*0.4+i*0.9)*0.3);
        const yOff = Math.sin(t*0.25+i*1.5)*baseSize*0.6;
        const px = cx+Math.cos(angle)*pR;
        const py = cy+yOff;
        const ps = 1.0+Math.sin(t*0.7+i)*0.5;
        const pAlpha = 0.12+Math.sin(t+i*0.5)*0.08;
        ctx.beginPath();
        ctx.arc(px, py, ps, 0, Math.PI*2);
        if (i%3===0) ctx.fillStyle = isDark ? 'rgba(99,102,241,'+pAlpha+')' : 'rgba(99,102,241,'+(pAlpha*0.7)+')';
        else if (i%3===1) ctx.fillStyle = isDark ? 'rgba(168,85,247,'+pAlpha+')' : 'rgba(168,85,247,'+(pAlpha*0.7)+')';
        else ctx.fillStyle = isDark ? 'rgba(236,72,153,'+pAlpha+')' : 'rgba(236,72,153,'+(pAlpha*0.7)+')';
        ctx.fill();
      }

      for (let i = 0; i < 4; i++) {
        const sa = t*0.3 + i*(Math.PI/2);
        const sR = baseSize*0.5;
        const sx = cx+Math.cos(sa)*sR, sy = cy+Math.sin(sa)*sR*0.6;
        const ex = cx+Math.cos(sa+0.5)*sR*1.4, ey = cy+Math.sin(sa+0.5)*sR*0.8;
        const sg = ctx.createLinearGradient(sx,sy,ex,ey);
        sg.addColorStop(0, 'rgba(255,255,255,0)');
        sg.addColorStop(0.5, isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.05)');
        sg.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.beginPath(); ctx.moveTo(sx,sy); ctx.lineTo(ex,ey);
        ctx.strokeStyle = sg; ctx.lineWidth = 1.5; ctx.stroke();
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

function AnimatedWaves({ isDark }: { isDark: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => {
      ctx.clearRect(0, 0, w, h);

      const waveConfigs = [
        { amplitude: 30, frequency: 0.008, speed: 0.5, yOffset: h * 0.75, color: isDark ? 'rgba(99, 102, 241, 0.06)' : 'rgba(99, 102, 241, 0.04)' },
        { amplitude: 25, frequency: 0.012, speed: 0.7, yOffset: h * 0.78, color: isDark ? 'rgba(168, 85, 247, 0.05)' : 'rgba(168, 85, 247, 0.03)' },
        { amplitude: 20, frequency: 0.015, speed: 0.9, yOffset: h * 0.82, color: isDark ? 'rgba(236, 72, 153, 0.04)' : 'rgba(236, 72, 153, 0.025)' },
        { amplitude: 35, frequency: 0.006, speed: 0.3, yOffset: h * 0.70, color: isDark ? 'rgba(139, 92, 246, 0.04)' : 'rgba(139, 92, 246, 0.025)' },
        { amplitude: 15, frequency: 0.02,  speed: 1.1, yOffset: h * 0.85, color: isDark ? 'rgba(244, 114, 182, 0.035)' : 'rgba(244, 114, 182, 0.02)' },
      ];

      waveConfigs.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 2) {
          const y = wave.yOffset +
            Math.sin(x * wave.frequency + t * wave.speed) * wave.amplitude +
            Math.sin(x * wave.frequency * 0.5 + t * wave.speed * 1.3) * wave.amplitude * 0.5;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.closePath();
        ctx.fillStyle = wave.color;
        ctx.fill();
      });

      const lineWaves = [
        { amplitude: 20, frequency: 0.01, speed: 0.6, yOffset: h * 0.72, color: isDark ? 'rgba(99, 102, 241, 0.08)' : 'rgba(99, 102, 241, 0.05)' },
        { amplitude: 15, frequency: 0.014, speed: 0.8, yOffset: h * 0.76, color: isDark ? 'rgba(168, 85, 247, 0.06)' : 'rgba(168, 85, 247, 0.04)' },
        { amplitude: 18, frequency: 0.009, speed: 0.4, yOffset: h * 0.68, color: isDark ? 'rgba(236, 72, 153, 0.05)' : 'rgba(236, 72, 153, 0.03)' },
      ];

      lineWaves.forEach((wave) => {
        ctx.beginPath();
        for (let x = 0; x <= w; x += 2) {
          const y = wave.yOffset +
            Math.sin(x * wave.frequency + t * wave.speed) * wave.amplitude +
            Math.cos(x * wave.frequency * 0.7 + t * wave.speed * 0.8) * wave.amplitude * 0.3;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 1;
        ctx.stroke();
      });
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

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
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

      <AnimatedWaves isDark={isDark} />

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
            <RotatingTorus isDark={isDark} />
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
