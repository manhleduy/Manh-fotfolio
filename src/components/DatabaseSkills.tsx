import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import technicalSkills from '../data/skill'
import Cloudinary from './SVG/Cloudinary'
import HalfPostgresql from './SVG/halfpostgresql'
import HalfMysql from './SVG/HalfMysql'

const DatabaseSkills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Map skills to their icon components/paths
  const getIconComponent = (skill: any) => {
    switch (skill.name) {
      case 'PostgreSQL':
        return { type: 'component', component: HalfPostgresql };
      case 'MySQL':
        return { type: 'component', component: HalfMysql };
      case 'Cloudinary':
        return { type: 'component', component: Cloudinary };
      default:
        return { type: 'image', path: `/${skill.icon}` };
    }
  };

  // Calculate responsive size based on skill.size
  const getIconSize = (size?: number) => {
    const baseSize = (size || 400) / 10; // Convert to rem potentially
    return {
      container: `${Math.max(baseSize * 0.15, 4)}rem`, // Container height
      icon: `${Math.max(baseSize * 0.1, 2.5)}rem` // Icon size
    };
  };

  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 text-cyan-300">
        <span>🗄️</span> Database
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 py-10">
        {technicalSkills.database.map((skill) => {
          const iconData = getIconComponent(skill);
          const sizes = getIconSize(skill.size);
          const IconComponent = iconData.type === 'component' ? iconData.component : null;
          
          return (
            <div
              key={skill.name}
              className="relative flex flex-col items-center cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Icon Container - Responsive sizing */}
              <motion.div
                animate={{
                  scale: hoveredSkill === skill.name ? 1.15 : 1,
                  y: hoveredSkill === skill.name ? -15 : 0
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{
                  height: sizes.container,
                  width: sizes.container
                }}
                className="relative flex items-center justify-center"
              >
                {iconData.type === 'component' && IconComponent ? (
                  <IconComponent 
                    style={{
                      height: sizes.icon,
                      width: sizes.icon
                    }}
                    className="drop-shadow-lg"
                  />
                ) : (
                  <img
                    src={iconData.path}
                    alt={skill.name}
                    style={{
                      height: sizes.icon,
                      width: sizes.icon
                    }}
                    className="object-contain drop-shadow-lg"
                  />
                )}
                
                {/* Glow effect on hover */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-xl pointer-events-none"
                  />
                )}
              </motion.div>

              {/* Skill Info */}
              <motion.div
                animate={{
                  opacity: hoveredSkill === skill.name ? 0 : 1,
                  y: hoveredSkill === skill.name ? -5 : 0
                }}
                transition={{ duration: 0.2 }}
                className="mt-4 text-center"
              >
                <h4 className="font-bold text-lg text-white">{skill.name}</h4>
                <p className="text-sm text-white/70">{skill.projects} projects</p>
              </motion.div>

              {/* Tooltip */}
              <AnimatePresence>
                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full mb-4 w-64 bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/40 rounded-xl p-4 shadow-2xl z-50"
                  >
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-cyan-300 uppercase tracking-wide">
                        {skill.name}
                      </p>
                      <p className="text-xs text-white/60 mt-1">
                        {skill.level} · {skill.percentage}%
                      </p>
                    </div>
                    
                    <div className="bg-slate-900/50 rounded-lg p-3 mb-3 border border-white/10">
                      <pre className="text-[10px] text-green-400 font-mono overflow-x-auto">
                        <code>{skill.codeSnippet}</code>
                      </pre>
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-cyan-400/40" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default DatabaseSkills
