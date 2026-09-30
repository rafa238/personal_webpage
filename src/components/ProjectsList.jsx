import { useContext } from 'react'
import { ProjectCard } from './ProjectCard'
import { DataContext } from '../context/DataProvider'

export const ProjectsList = () => {
  const { projects, actions, project_labels } = useContext(DataContext)

  return (
    <section className="portfolio-section" aria-labelledby="projects-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{project_labels.eyebrow}</p>
          <h2 id="projects-title">{actions.projects}</h2>
        </div>
        <span className="section-number" aria-hidden="true">02 /</span>
      </div>
      <div className="project-grid">
        {projects.map(project => <ProjectCard key={project.name} {...project} />)}
      </div>
    </section>
  )
}
