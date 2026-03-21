import { useEffect, useRef, useCallback } from 'react';

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  phase: number;
  speed: number;
  amplitude: number;
  layer: number;
  pulsePhase: number;
  pulseSpeed: number;
}

export function NeuralNetworkBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const timeRef = useRef(0);

  const createNodes = useCallback((width: number, height: number): Node[] => {
    const nodes: Node[] = [];
    const layers = 5;
    const nodesPerLayer = [4, 6, 8, 6, 4];

    for (let layer = 0; layer < layers; layer++) {
      const count = nodesPerLayer[layer];
      const layerX = (width * (layer + 1)) / (layers + 1);

      for (let i = 0; i < count; i++) {
        const layerY = (height * (i + 1)) / (count + 1);
        nodes.push({
          x: layerX,
          y: layerY,
          baseX: layerX,
          baseY: layerY,
          radius: 2 + Math.random() * 1.5,
          phase: Math.random() * Math.PI * 2,
          speed: 0.3 + Math.random() * 0.4,
          amplitude: 8 + Math.random() * 12,
          layer,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.5 + Math.random() * 0.8,
        });
      }
    }

    // Add a few scattered ambient nodes
    for (let i = 0; i < 12; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        radius: 1 + Math.random(),
        phase: Math.random() * Math.PI * 2,
        speed: 0.15 + Math.random() * 0.25,
        amplitude: 15 + Math.random() * 20,
        layer: -1,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.3 + Math.random() * 0.5,
      });
    }

    return nodes;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      nodesRef.current = createNodes(rect.width, rect.height);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      timeRef.current += 0.016;
      const t = timeRef.current;

      const nodes = nodesRef.current;

      // Update node positions with organic floating
      nodes.forEach((node) => {
        node.x = node.baseX + Math.sin(t * node.speed + node.phase) * node.amplitude;
        node.y = node.baseY + Math.cos(t * node.speed * 0.7 + node.phase * 1.3) * node.amplitude * 0.6;
      });

      // Draw connections between adjacent layers
      nodes.forEach((n1) => {
        if (n1.layer === -1) return;
        nodes.forEach((n2) => {
          if (n2.layer !== n1.layer + 1) return;

          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 350) return;

          const opacity = 0.06 * (1 - dist / 350);

          // Draw the connection line
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);

          // Slight curve for organic feel
          const midX = (n1.x + n2.x) / 2 + Math.sin(t * 0.5 + n1.phase) * 8;
          const midY = (n1.y + n2.y) / 2;
          ctx.quadraticCurveTo(midX, midY, n2.x, n2.y);

          const gradient = ctx.createLinearGradient(n1.x, n1.y, n2.x, n2.y);
          gradient.addColorStop(0, `rgba(99, 102, 241, ${opacity})`);
          gradient.addColorStop(0.5, `rgba(168, 85, 247, ${opacity * 1.2})`);
          gradient.addColorStop(1, `rgba(236, 72, 153, ${opacity})`);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.8;
          ctx.stroke();

          // Data pulse traveling along connection
          const pulseT = (Math.sin(t * 1.5 + n1.phase + n2.phase) + 1) / 2;
          const pulseX = n1.x + (n2.x - n1.x) * pulseT;
          const pulseY = n1.y + (n2.y - n1.y) * pulseT;
          const pulseOpacity = opacity * 3 * Math.sin(pulseT * Math.PI);

          if (pulseOpacity > 0.01) {
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(168, 85, 247, ${pulseOpacity})`;
            ctx.fill();
          }
        });
      });

      // Draw ambient connections (scattered nodes connect to nearby network nodes)
      nodes.forEach((n1) => {
        if (n1.layer !== -1) return;
        nodes.forEach((n2) => {
          if (n2.layer === -1) return;
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 200) return;

          const opacity = 0.03 * (1 - dist / 200);
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        const pulse = Math.sin(t * node.pulseSpeed + node.pulsePhase);
        const glowRadius = node.radius + pulse * 1.5;
        const isNetwork = node.layer !== -1;

        // Glow
        if (isNetwork) {
          const glow = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, glowRadius * 6
          );
          glow.addColorStop(0, `rgba(99, 102, 241, ${0.08 + pulse * 0.04})`);
          glow.addColorStop(0.5, `rgba(168, 85, 247, ${0.03 + pulse * 0.02})`);
          glow.addColorStop(1, 'rgba(168, 85, 247, 0)');
          ctx.beginPath();
          ctx.arc(node.x, node.y, glowRadius * 6, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, isNetwork ? glowRadius : node.radius, 0, Math.PI * 2);
        const coreOpacity = isNetwork ? 0.4 + pulse * 0.15 : 0.15 + pulse * 0.05;
        ctx.fillStyle = isNetwork
          ? `rgba(139, 92, 246, ${coreOpacity})`
          : `rgba(99, 102, 241, ${coreOpacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, [createNodes]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
}
