import React from 'react'
import projects from '../data/project'
import ProjectCard from '../components/ProjectCard'

const Projects: React.FC = () => {
  return (
    <section className="projects-section page-enter mt-20 py-16 px-4 md:px-8 lg:px-16 " id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="section-header text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white playfair">Projects<span className="text-accent">.</span></h2>
          <p className="text-gray-300 mt-2">Những project gần đây</p>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}

          <div className="project-card large empty flex items-center justify-center text-gray-400 bg-card rounded-2xl border border-card-border">Coming Soon</div>

        </div>
      </div>
    </section>
  )
}

export default Projects