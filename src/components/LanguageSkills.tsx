import React from 'react'
import {motion} from 'framer-motion'
import { languageSkills } from '@/data/skill'
const LanguageSkills = () => {
  return (
    <section className="pb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-300">
              🌍 Languages
            </h2>
            <p className="text-white/60">Multilingual communication capabilities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {languageSkills.map((lang, i) => (
              <motion.div 
                key={lang.label} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl group-hover:scale-110 transition-transform">{lang.flag}</span>
                  <div>
                    <h3 className="font-bold text-lg">{lang.label}</h3>
                    <span className="text-sm text-cyan-300 font-medium">{lang.level}</span>
                  </div>
                </div>
                <div className="flex gap-1 h-2 bg-white/10 rounded-full overflow-hidden mb-4">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className={`h-full bg-gradient-to-r ${lang.color}`} 
                  />
                </div>
                <p className="text-sm text-white/60">{lang.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

  )
}

export default LanguageSkills