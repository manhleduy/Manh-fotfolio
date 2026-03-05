import React, { useEffect, useRef, useState } from 'react';

interface DynamicBackgroundProps {
  children?: React.ReactNode;
  primaryColor?: string;   // Hex for Orbs/Particles
  accentColor?: string;    // Hex for Secondary Orbs
  particleCount?: number;  // Default: 80
  showWaves?: boolean;     // Toggle footer waves
  interactive?: boolean;   // Enable Mouse Parallax
}

interface Particle {
  x: number; y: number; size: number;
  speedX: number; speedY: number;
  opacity: number; pulse: number;
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({
  children,
  primaryColor = '#8b5cf6',
  accentColor = '#a855f7',
  particleCount = 80,
  showWaves = true,
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      particles = [];
      const count = Math.min(particleCount, Math.floor(window.innerWidth / 15));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.5 + 0.2,
          pulse: Math.random() * Math.PI * 2
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.speedX; p.y += p.speedY; p.pulse += 0.02;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;

        const opacity = p.opacity + Math.sin(p.pulse) * 0.2;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        gradient.addColorStop(0, `${primaryColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      // Calculate normalized mouse position (-1 to 1)
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize(); init(); animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [primaryColor, particleCount, interactive]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a0a1a]">
      {/* Background Layer (Canvas & Gradients) */}
      <div className="absolute inset-0 z-0 pointer-events-none transition-transform duration-500 ease-out"
           style={{ transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)` }}>
        
        <div className="absolute rounded-full blur-[100px] opacity-30 animate-float w-[500px] h-[500px] -top-20 -right-20"
             style={{ backgroundColor: primaryColor }} />
        
        <div className="absolute rounded-full blur-[100px] opacity-20 animate-float w-[400px] h-[400px] bottom-10 -left-10 [animation-delay:-5s] bg-[#6366f1]" />

        <canvas ref={canvasRef} className="absolute inset-0" />
      </div>

      {/* Content Layer (Where your components go) */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {/* Foreground Layer (Waves) */}
      {showWaves && (
        <div className="absolute bottom-0 left-0 w-full h-[120px] z-20 pointer-events-none overflow-hidden opacity-40">
           <div className="wave-svg absolute bottom-0 left-0 w-[200%] h-full animate-wave-slow" />
           <div className="wave-svg absolute bottom-2 left-0 w-[200%] h-full animate-wave-fast opacity-50" />
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, 30px) scale(1.1); }
        }
        @keyframes wave {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-float { animation: float 15s ease-in-out infinite; }
        .animate-wave-slow { animation: wave 20s linear infinite; }
        .animate-wave-fast { animation: wave 12s linear infinite reverse; }
        .wave-svg {
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='1' d='M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E") repeat-x;
          background-size: 50% 100%;
        }
      `}} />
    </div>
  );
};

export default DynamicBackground;