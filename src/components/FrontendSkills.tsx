import React from 'react'
import SkillProgressBar from './SkillProgressBar'
import technicalSkills from '../data/skill'

const FrontendSkills: React.FC = () => {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
        <span className="text-orange-400">🎨</span> Frontend
      </h2>
      <div className="grid gap-4">
        {technicalSkills.frontend.map((skill) => (
          <SkillProgressBar key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  )
}

export default FrontendSkills
