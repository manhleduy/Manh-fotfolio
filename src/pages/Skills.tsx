import React from 'react';
import { motion } from 'framer-motion';
import FrontendSkills from '../components/FrontendSkills';
import BackendSkills from '../components/BackendSkills';
import DatabaseSkills from '../components/DatabaseSkills';
import Tools from '../components/Tools';
import SoftSkils from '@/components/SoftSkils';
import LanguageSkills from '@/components/LanguageSkills';

// --- Sub-Components ---

// --- Main Component ---

const Skills: React.FC = () => {
  return (
    <div className="min-h-screen mt-16 sm:mt-20 text-white font-['Playfair_Display',serif] selection:bg-purple-500/40 page-enter overflow-x-hidden"
         style={{ background: 'radial-gradient(circle farthest-corner at -5.6% -6.8%, rgba(103,49,145,1) 37.3%, rgba(50,0,129,1) 73.5%)' }}>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Hero Title */}
        <header className="text-center mb-24">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-pink-200">
              Skill
            </span>
          </motion.h1>
            
        </header>

        {/* --- TECHNICAL SKILLS --- */}
        
        <FrontendSkills />
        <BackendSkills />
        <DatabaseSkills />
        <Tools />
        {/* --- SOFT SKILLS --- */}
        <SoftSkils/>
        {/* --- LANGUAGES --- */}
        <LanguageSkills/>
      </div>
    </div>
  );
};

export default Skills;