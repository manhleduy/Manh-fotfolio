import React from 'react'
import { motion } from 'framer-motion'
import type { Skill } from '../data/skill'

type Props = { skill: Skill }

const SkillProgressBar: React.FC<Props> = ({ skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <span className="text-2xl">
            <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
          </span>
          <div>
            <h4 className="font-bold text-white">{skill.name}</h4>
            <p className="text-xs text-gray-400">{skill.level}</p>
          </div>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm font-semibold text-white"
        >
          {skill.percentage}%
        </motion.span>
      </div>

      <div className="relative h-9 rounded-full overflow-hidden bg-transparent border border-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className={`absolute h-full bg-gradient-to-r ${skill.gradient} rounded-full`}
        />

        {/* Animated icon that moves with progress */}
        <motion.div
          initial={{ left: 0 }}
          whileInView={{ left: `calc(${skill.percentage}% - 12px)` }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-xs drop-shadow-lg"
        >
          <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default SkillProgressBar
