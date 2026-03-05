import React, { useEffect, useRef } from 'react';

interface NotfoundProps {
  error_message?: string;
  back_button_text?: string;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  pulse: number;
}

const Notfound: React.FC<NotfoundProps> = ({
  error_message = "This page doesn't exist",
  back_button_text = "Return to Previous Page"
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
      const particleCount = Math.min(60, Math.floor(window.innerWidth / 25));
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.4 + 0.1,
          pulse: Math.random() * Math.PI * 2
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += 0.015;
        
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        const opacity = p.opacity + Math.sin(p.pulse) * 0.15;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        gradient.addColorStop(0, `rgba(168, 85, 247, ${opacity})`);
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="fixed inset-0 w-full h-full mt-20 flex items-center justify-center overflow-hidden bg-[#0f0f1e]">
      {/* Floating Background Orbs */}
      <div className="orb orb-1 absolute w-[400px] h-[400px] bg-[#8b5cf6] -top-[200px] -right-[100px] rounded-full blur-[60px] opacity-30 animate-[floatOrb_20s_ease-in-out_infinite] pointer-events-none" />
      <div className="orb orb-2 absolute w-[300px] h-[300px] bg-[#ec4899] -bottom-[100px] -left-[50px] rounded-full blur-[60px] opacity-30 animate-[floatOrb_25s_ease-in-out_infinite_reverse] pointer-events-none [animation-delay:-5s]" />
      <div className="orb orb-3 absolute w-[250px] h-[250px] bg-[#f97316] bottom-[20%] right-[10%] rounded-full blur-[60px] opacity-30 animate-[floatOrb_30s_ease-in-out_infinite] pointer-events-none [animation-delay:-10s]" />

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none" />

      {/* Main 404 Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="error-code text-[clamp(120px,25vw,280px)] font-black leading-none tracking-[-8px] bg-gradient-to-br from-[#a855f7] via-[#ec4899] to-[#f97316] bg-clip-text text-transparent animate-[floatError_4s_ease-in-out_infinite] m-0">
          404
        </h1>
        
        <p className="error-message text-[clamp(18px,3vw,28px)] text-white/85 mt-6 mb-8 font-light tracking-widest animate-[fadeIn_1s_ease-out_0.3s_both]">
          {error_message}
        </p>

        <button 
          onClick={handleBack}
          className="back-button inline-block px-8 py-3.5 bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] text-white font-semibold rounded-full shadow-[0_4px_20px_rgba(139,92,246,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(168,85,247,0.6)] active:translate-y-0 animate-[fadeIn_1s_ease-out_0.6s_both]"
        >
          {back_button_text}
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatError {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -30px) scale(1.05); }
          50% { transform: translate(-20px, 20px) scale(0.95); }
          75% { transform: translate(20px, 10px) scale(1.02); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default Notfound;