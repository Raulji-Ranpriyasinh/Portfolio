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

interface Edge {
  from: number;
  to: number;
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

const cubeVertices: Point3D[] = [
  { x: -1, y: -1, z: -1 },
  { x:  1, y: -1, z: -1 },
  { x:  1, y:  1, z: -1 },
  { x: -1, y:  1, z: -1 },
  { x: -1, y: -1, z:  1 },
  { x:  1, y: -1, z:  1 },
  { x:  1, y:  1, z:  1 },
  { x: -1, y:  1, z:  1 },
];

const cubeEdges: Edge[] = [
  { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
  { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 }, { from: 7, to: 4 },
  { from: 0, to: 4 }, { from: 1, to: 5 }, { from: 2, to: 6 }, { from: 3, to: 7 },
];

const cubeFaces = [
  { verts: [0, 1, 2, 3], color: 'indigo' as const },
  { verts: [4, 5, 6, 7], color: 'pink' as const },
  { verts: [0, 1, 5, 4], color: 'purple' as const },
  { verts: [2, 3, 7, 6], color: 'indigo' as const },
  { verts: [0, 3, 7, 4], color: 'pink' as const },
  { verts: [1, 2, 6, 5], color: 'purple' as const },
];

const innerVertices: Point3D[] = [
  { x:  0,   y: -0.7, z:  0   },
  { x:  0.5, y:  0,   z:  0.3 },
  { x: -0.3, y:  0.2, z:  0.5 },
  { x:  0.2, y:  0.6, z: -0.2 },
  { x: -0.5, y: -0.1, z: -0.4 },
  { x:  0.1, y:  0.1, z: -0.6 },
];

const innerFaces = [
  [0, 1, 2], [0, 1, 5], [0, 2, 4], [0, 4, 5],
  [3, 1, 2], [3, 1, 5], [3, 2, 4], [3, 4, 5],
];

function RotatingCube({ isDark }: { isDark: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => {
      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.5;
      const cy = h * 0.48;
      const cubeSize = Math.min(w, h) * 0.28;
      const fov = 400;

      const glowRadius = cubeSize * 2.2;
      const glow = ctx.createRadialGradient(cx, cy, cubeSize * 0.3, cx, cy, glowRadius);
      if (isDark) {
        glow.addColorStop(0, 'rgba(99, 102, 241, 0.15)');
        glow.addColorStop(0.3, 'rgba(168, 85, 247, 0.10)');
        glow.addColorStop(0.6, 'rgba(236, 72, 153, 0.05)');
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        glow.addColorStop(0, 'rgba(99, 102, 241, 0.10)');
        glow.addColorStop(0.3, 'rgba(168, 85, 247, 0.06)');
        glow.addColorStop(0.6, 'rgba(236, 72, 153, 0.03)');
        glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      const rx = t * 0.3;
      const ry = t * 0.5;
      const rz = t * 0.15;

      const transformed = cubeVertices.map((v) => {
        let p: Point3D = { x: v.x * cubeSize, y: v.y * cubeSize, z: v.z * cubeSize };
        p = rotateX(p, rx);
        p = rotateY(p, ry);
        p = rotateZ(p, rz);
        return p;
      });

      const projected = transformed.map((p) => project(p, cx, cy, fov));

      const innerTransformed = innerVertices.map((v) => {
        let p: Point3D = { x: v.x * cubeSize, y: v.y * cubeSize, z: v.z * cubeSize };
        p = rotateX(p, rx);
        p = rotateY(p, ry);
        p = rotateZ(p, rz);
        return p;
      });
      const innerProjected = innerTransformed.map((p) => project(p, cx, cy, fov));

      const faceDepths = cubeFaces.map((face, i) => {
        const avgZ = face.verts.reduce((sum, vi) => sum + transformed[vi].z, 0) / face.verts.length;
        return { index: i, avgZ };
      });
      faceDepths.sort((a, b) => a.avgZ - b.avgZ);

      const faceColors: Record<string, { dark: string; light: string }> = {
        indigo: { dark: 'rgba(99, 102, 241, 0.08)', light: 'rgba(99, 102, 241, 0.06)' },
        purple: { dark: 'rgba(168, 85, 247, 0.08)', light: 'rgba(168, 85, 247, 0.06)' },
        pink: { dark: 'rgba(236, 72, 153, 0.08)', light: 'rgba(236, 72, 153, 0.06)' },
      };

      faceDepths.forEach(({ index }) => {
        const face = cubeFaces[index];
        const pts = face.verts.map((vi) => projected[vi]);
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i].x, pts[i].y);
        }
        ctx.closePath();
        const colors = faceColors[face.color];
        ctx.fillStyle = isDark ? colors.dark : colors.light;
        ctx.fill();
      });

      const innerFaceDepths = innerFaces.map((face, i) => {
        const avgZ = face.reduce((sum, vi) => sum + innerTransformed[vi].z, 0) / face.length;
        return { index: i, avgZ };
      });
      innerFaceDepths.sort((a, b) => a.avgZ - b.avgZ);

      const innerColors = [
        isDark ? 'rgba(99, 102, 241, 0.35)' : 'rgba(99, 102, 241, 0.25)',
        isDark ? 'rgba(168, 85, 247, 0.40)' : 'rgba(168, 85, 247, 0.30)',
        isDark ? 'rgba(236, 72, 153, 0.35)' : 'rgba(236, 72, 153, 0.25)',
        isDark ? 'rgba(139, 92, 246, 0.30)' : 'rgba(139, 92, 246, 0.20)',
        isDark ? 'rgba(244, 114, 182, 0.35)' : 'rgba(244, 114, 182, 0.25)',
        isDark ? 'rgba(129, 140, 248, 0.40)' : 'rgba(129, 140, 248, 0.30)',
        isDark ? 'rgba(192, 132, 252, 0.30)' : 'rgba(192, 132, 252, 0.20)',
        isDark ? 'rgba(236, 72, 153, 0.45)' : 'rgba(236, 72, 153, 0.35)',
      ];

      innerFaceDepths.forEach(({ index }) => {
        const face = innerFaces[index];
        const pts = face.map((vi) => innerProjected[vi]);
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i].x, pts[i].y);
        }
        ctx.closePath();
        ctx.fillStyle = innerColors[index % innerColors.length];
        ctx.fill();
        ctx.strokeStyle = isDark ? 'rgba(168, 85, 247, 0.15)' : 'rgba(168, 85, 247, 0.10)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      cubeEdges.forEach((edge) => {
        const p1 = projected[edge.from];
        const p2 = projected[edge.to];
        const z1 = transformed[edge.from].z;
        const z2 = transformed[edge.to].z;
        const avgZ = (z1 + z2) / 2;
        const depthFactor = 0.3 + 0.7 * ((avgZ + cubeSize) / (2 * cubeSize));

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = isDark
          ? `rgba(168, 85, 247, ${0.06 * depthFactor})`
          : `rgba(168, 85, 247, ${0.04 * depthFactor})`;
        ctx.lineWidth = 6;
        ctx.stroke();

        const edgeGrad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        if (isDark) {
          edgeGrad.addColorStop(0, `rgba(99, 102, 241, ${0.6 * depthFactor})`);
          edgeGrad.addColorStop(0.5, `rgba(168, 85, 247, ${0.7 * depthFactor})`);
          edgeGrad.addColorStop(1, `rgba(236, 72, 153, ${0.6 * depthFactor})`);
        } else {
          edgeGrad.addColorStop(0, `rgba(99, 102, 241, ${0.5 * depthFactor})`);
          edgeGrad.addColorStop(0.5, `rgba(168, 85, 247, ${0.6 * depthFactor})`);
          edgeGrad.addColorStop(1, `rgba(236, 72, 153, ${0.5 * depthFactor})`);
        }
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = edgeGrad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      projected.forEach((p, i) => {
        const z = transformed[i].z;
        const brightness = 0.4 + 0.6 * ((z + cubeSize) / (2 * cubeSize));
        const radius = 2.5 * p.scale;

        const pointGlow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 4);
        if (isDark) {
          pointGlow.addColorStop(0, `rgba(168, 85, 247, ${0.3 * brightness})`);
          pointGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else {
          pointGlow.addColorStop(0, `rgba(168, 85, 247, ${0.2 * brightness})`);
          pointGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        }
        ctx.fillStyle = pointGlow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(255, 255, 255, ${0.7 * brightness})`
          : `rgba(139, 92, 246, ${0.6 * brightness})`;
        ctx.fill();
      });

      for (let i = 0; i < 25; i++) {
        const angle = t * 0.2 + i * (Math.PI * 2 / 25);
        const r = cubeSize * (1.6 + Math.sin(t * 0.5 + i * 0.7) * 0.4);
        const yOff = Math.sin(t * 0.3 + i * 1.3) * cubeSize * 0.8;
        const px = cx + Math.cos(angle) * r;
        const py = cy + yOff;
        const ps = 1 + Math.sin(t * 0.8 + i) * 0.5;
        const alpha = 0.15 + Math.sin(t + i * 0.5) * 0.1;

        ctx.beginPath();
        ctx.arc(px, py, ps, 0, Math.PI * 2);
        if (i % 3 === 0) {
          ctx.fillStyle = isDark ? `rgba(99, 102, 241, ${alpha})` : `rgba(99, 102, 241, ${alpha * 0.7})`;
        } else if (i % 3 === 1) {
          ctx.fillStyle = isDark ? `rgba(168, 85, 247, ${alpha})` : `rgba(168, 85, 247, ${alpha * 0.7})`;
        } else {
          ctx.fillStyle = isDark ? `rgba(236, 72, 153, ${alpha})` : `rgba(236, 72, 153, ${alpha * 0.7})`;
        }
        ctx.fill();
      }

      const streakAngle = t * 0.4;
      for (let i = 0; i < 3; i++) {
        const sa = streakAngle + i * (Math.PI * 2 / 3);
        const sx = cx + Math.cos(sa) * cubeSize * 0.3;
        const sy = cy + Math.sin(sa) * cubeSize * 0.3;
        const ex = cx + Math.cos(sa + 0.3) * cubeSize * 0.6;
        const ey = cy + Math.sin(sa + 0.3) * cubeSize * 0.6;

        const streakGrad = ctx.createLinearGradient(sx, sy, ex, ey);
        streakGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        streakGrad.addColorStop(0.5, isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.06)');
        streakGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = streakGrad;
        ctx.lineWidth = 2;
        ctx.stroke();
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
            <RotatingCube isDark={isDark} />
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
