import React, { useState, useEffect, useRef } from 'react';
import  technicalSkills, { backendFooter, type Skill }  from '../data/skill';
import { icons } from '../data/const';


// --- Types ---

interface Position {
  x: number;
  y: number;
}

// Map skill names to icon keys from const.ts
const backendIconMap: Record<string, keyof typeof icons> = {
  'Node.js': 'nodejs',
  'Express.js': 'express',
  'Redis': 'redis',
  'Socket.io': 'socket',
  'REST API': 'nodejs',
};



const NODE_OFFSETS = [
  { x: -35, y: -40 },
  { x: 35, y: -35 },
  { x: -40, y: 15 },
  { x: 42, y: 20 },
  { x: 0, y: 45 }
];

// --- Components ---

import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './ui/Tooltip'

const DataStream = ({ left, delay, content }: { left: string, delay: number, content: string }) => (
  <div 
    className="absolute text-[10px] mono text-green-400/15 whitespace-nowrap animate-stream-flow pointer-events-none"
    style={{ left, animationDelay: `${delay}s` }}
  >
    {content}
  </div>
);

const SkillNode: React.FC<{ skill: Skill; pos: Position; index: number }> = ({ skill, pos }) => {
  const iconKey = backendIconMap[skill.name];
  const hasIcon = iconKey && icons[iconKey];

  return (
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div 
          className="absolute transition-transform duration-300 z-20 group"
          style={{ left: pos.x, top: pos.y, transform: 'translate(-50%, -50%)' }}
        >
          <div 
            className={`w-32 h-32 md:w-[140px] md:h-[140px] rounded-2xl flex items-center justify-center relative transition-all duration-300 shadow-xl group-hover:scale-110 bg-gradient-to-br ${skill.gradient}`}
            style={{
              boxShadow: `0 4px 20px rgba(0,0,0,0.3)`
            }}
          >
            {hasIcon ? (
              <img
                src={icons[iconKey]}
                alt={skill.name}
                className="w-10 h-10 object-contain filter drop-shadow-lg"
              />
            ) : (
              <span className="text-4xl">
                <img  src={skill.icon} alt={skill.name} className="w-20 h-20 object-contain filter drop-shadow-lg" />
              </span>
            )}
            {/* Glow Border Effect */}
            <div 
              className="absolute -inset-[3px] rounded-[19px] opacity-0 group-hover:opacity-50 transition-opacity pointer-events-none bg-gradient-to-br from-green-400 to-transparent"
            />
          </div>
          <p className="text-center mt-2 text-sm font-medium text-gray-300 whitespace-nowrap group-hover:text-white">
            {skill.name}
          </p>
        </div>
      </TooltipTrigger>
      <TooltipContent className="max-w-[280px] w-auto sm:w-[280px] bg-gradient-to-br from-[#1a2e1a] to-[#0d1f0d] border border-green-400/30 rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-lg text-green-400">{skill.name}</h3>
          <span className="text-[10px] px-2 py-1 rounded-full bg-black/40 border border-white/10 text-green-400">
            {skill.percentage}%
          </span>
        </div>
        <p className="text-gray-300 text-sm mb-3 leading-relaxed">
          <span className="text-green-400 font-semibold">{skill.level}</span> level proficiency
        </p>
      </TooltipContent>
    </Tooltip>
    </TooltipProvider>
  );
};

// --- Main Component ---

const BackendSkills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [center, setCenter] = useState<Position>({ x: 0, y: 0 });
  const [nodePositions, setNodePositions] = useState<Position[]>([]);
  
  // Limit to first 5 skills for the node layout
  const displaySkills = technicalSkills.backend.slice(0, 5);

  const calculateLayout = () => {
    if (!containerRef.current) return;
    const { offsetWidth: width, offsetHeight: height } = containerRef.current;
    const cx = width / 2;
    const cy = height / 2;
    
    setCenter({ x: cx, y: cy });
    
    const positions = NODE_OFFSETS.slice(0, displaySkills.length).map(offset => ({
      x: cx + (offset.x / 100) * width,
      y: cy + (offset.y / 100) * height
    }));
    
    setNodePositions(positions);
  };

  useEffect(() => {
    calculateLayout();
    window.addEventListener('resize', calculateLayout);
    return () => window.removeEventListener('resize', calculateLayout);
  }, [displaySkills.length]);

  return (
    <div className="min-h-screen text-gray-100 relative overflow-hidden flex flex-col pt-10">
      {/* Background Grid & FX */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-green-500/10 blur-[80px] rounded-full animate-pulse" />
        <div className="absolute top-[60%] right-[15%] w-48 h-48 bg-emerald-500/10 blur-[80px] rounded-full animate-pulse" style={{ animationDelay: '-3s' }} />
        <DataStream left="5%" delay={0} content="01001110 01101111 01100100 01100101" />
        <DataStream left="15%" delay={-5} content="const server = express()" />
        <DataStream left="10%" delay={-10} content="redis.set('key', value)" />
      </div>

      {/* Header */}
      <header className="relative z-10 pt-12 pb-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent mb-3">
          Backend Skills
        </h1>
        <p className="font-mono text-green-400/70 text-sm tracking-wider uppercase">
          // Node.js Ecosystem & Technologies
        </p>
      </header>

      {/* Visualization Canvas */}
      <main ref={containerRef} className="relative flex-grow min-h-[600px] w-full max-w-6xl mx-auto">
        {/* Connection Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {nodePositions.map((pos, i) => (
            <path
              key={`line-${i}`}
              d={`M ${center.x} ${center.y} Q ${(center.x + pos.x) / 2} ${(center.y + pos.y) / 2 - 40} ${pos.x} ${pos.y}`}
              className="stroke-green-400/20 fill-none stroke-[2] animate-dash-flow"
              strokeDasharray="8 4"
            />
          ))}
        </svg>

        {/* Central Node */}
        <div 
          className="absolute z-30 flex flex-col items-center" 
          style={{ left: center.x, top: center.y, transform: 'translate(-50%, -50%)' }}
        >
          <div className="relative group">
            {/* Glow Orbs */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] bg-green-500/20 rounded-full blur-2xl animate-pulse" />
            
            <div className="relative w-36 h-36 bg-gradient-to-br from-[#3c873a] to-[#2d682b] rounded-[28px] shadow-2xl shadow-green-500/30 flex items-center justify-center animate-bounce-slow">
              <img src={icons.API}/>
            </div>
          </div>
          <p className="mt-4 font-bold text-green-400 text-lg tracking-tight uppercase">Rest API</p>
          <p className="text-[10px] text-gray-500 font-mono">Runtime Engine</p>
        </div>

        {/* Skill Nodes */}
        {displaySkills.map((skill, i) => (
          nodePositions[i] && (
            <SkillNode 
              key={skill.name} 
              skill={skill} 
              pos={nodePositions[i]} 
              index={i} 
            />
          )
        ))}
      </main>

      {/* Footer Stats */}
      <footer className="relative z-10 py-12 flex justify-center gap-4 md:gap-8 flex-wrap px-4">
        {backendFooter.map((stat, i) => (
          <div key={i} className="bg-green-950/20 border border-green-500/20 rounded-2xl px-8 py-5 text-center min-w-[140px] backdrop-blur-sm">
            <p className={`text-3xl font-black ${stat.color}`}>{stat.val}</p>
            <p className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </footer>

      {/* Global Scoped Animations (Tailwind won't handle these specific keyframes naturally) */}
      
    </div>
  );
};

export default BackendSkills;