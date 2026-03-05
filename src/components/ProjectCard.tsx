import React from 'react'
import type { Project } from '../data/project'
import TechIconWithTooltip from './ui/TechIconWithTooltip'
import ProjectChart from './ProjectChart'


type Props = { project: Project }

const TechSection: React.FC<{ title: string; items: Project['frontend'] | Project['backend'] | Project['database'] }> = ({ title, items }) => {
  return (
    <div className="tags mb-4">
      <p className="text-sm text-gray-300 mb-2 font-semibold">{title}:</p>
      <div className="flex flex-col gap-2">
        {items.map((t) => (
          <TechIconWithTooltip key={t.name} tech={t} />
        ))}
      </div>
    </div>
  )
}

const ProjectCard: React.FC<Props> = ({ project }) => {
    const {title, description, frontend, backend, database, links, size, tool}= project;
  return (
    <article className={`project-card bg-card ${size} p-6 md:p-8 rounded-2xl border border-card-border hover:shadow-lg transition-transform transform hover:-translate-y-2`}>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-200 text-base mb-6">{description}</p>
      
      <div className='flex flex-col lg:flex-row w-full gap-6'>
        {/* Tech Stack Section */}
        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TechSection title="Frontend" items={frontend} />
            <TechSection title="Backend" items={backend} />
            <TechSection title="Database" items={database} />
            {tool && <TechSection title="Tools" items={tool}/>}
          </div>
          
          {/* Project Links */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-2 mt-6">
            {links?.frontend && (
              <a href={links.frontend} target="_blank" rel="noreferrer" className="text-accent font-semibold hover:underline text-sm">
                Frontend →
              </a>
            )}
            {links?.backend && (
              <a href={links.backend} target="_blank" rel="noreferrer" className="text-accent font-semibold hover:underline text-sm">
                Backend →
              </a>
            )}
            {links?.github && (
              <a href={links.github} target="_blank" rel="noreferrer" className="text-accent font-semibold hover:underline text-sm">
                Source Code →
              </a>
            )}
          </div>
        </div>

        {/* Chart Section */}
        <div className="flex-1 min-w-0 flex items-center justify-center">
          <ProjectChart project={project} />
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
