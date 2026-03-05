import React, { useEffect, useRef } from 'react';

interface IntroProps {
  onComplete?: () => void;
  title?: string;
  subtitle?: string;
}

const Intro: React.FC<IntroProps> = ({ 
  onComplete, 
  title = "[ PORTFOLIO ]", 
  subtitle = "INITIALIZING..." 
}) => {
  const binaryContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = binaryContainerRef.current;
    if (!container) return;

    const generateBinary = () => (Math.random() > 0.5 ? '1' : '0');
    const lineCount = Math.floor(window.innerHeight / 30);

    // Clear any existing lines to prevent duplicates during strict mode double-mount
    container.innerHTML = '';

    for (let i = 0; i < lineCount; i++) {
      const line = document.createElement('div');
      // Using Tailwind JIT classes for the animation defined in the style block below
      line.className = 'binary-line absolute font-mono text-[14px] text-[#00ff88] opacity-0 whitespace-nowrap pointer-events-none';
      
      let binaryText = '';
      for (let j = 0; j < 80; j++) {
        binaryText += generateBinary();
        if (j % 8 === 7) binaryText += ' ';
      }

      line.textContent = binaryText;
      line.style.left = `${Math.random() * window.innerWidth}px`;
      line.style.animationDelay = `${Math.random() * 1.5}s`;
      container.appendChild(line);
    }

    // Trigger the onComplete callback after the animation finishes (approx 5s)
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a1a] animate-[fadeOutIntro_0.8s_ease-out_4.2s_forwards]">
      {/* Container for the falling binary characters */}
      <div ref={binaryContainerRef} className="absolute inset-0 w-full h-full overflow-hidden" />
      
      {/* Central Initializing Text */}
      <div className="relative z-10 text-center opacity-0 animate-[introTextFade_1s_ease-out_1s_forwards]">
        <h2 className="text-[2.5rem] md:text-[4rem] text-[#7220f6] font-bold mb-[10px] drop-shadow-[0_0_25px_rgba(0,255,136,0.8)] tracking-widest">
          {title}
        </h2>
        <p className="text-[1rem] text-[#00ff88]/70 font-mono tracking-[4px] uppercase animate-pulse">
          {subtitle}
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes binaryFall {
          0% { top: -100px; opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes introTextFade { 
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeOutIntro { 
          to { opacity: 0; visibility: hidden; } 
        }
        .binary-line {
          animation: binaryFall 5s linear forwards;
        }
      `}} />
    </div>
  );
};

export default Intro;