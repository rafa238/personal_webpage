import { useContext } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { DataContext } from '../context/DataProvider'

export const ProjectCard = (project) => {
  const { project_check, project_labels } = useContext(DataContext)
  const { name, description, bullets, technologies, url, images } = project

  return (
    <article className="project-tile">
      <img
        className="project-cover"
        src={`${import.meta.env.BASE_URL}${images}`}
        alt={project_labels.photo_alt.replace('{name}', name)}
        loading="lazy"
      />
      <div className="project-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <ul className="technology-tags" aria-label={project_labels.technologies}>
          {technologies.map(technology => <li key={technology}>{technology}</li>)}
        </ul>
        {bullets?.length > 0 && (
          <details className="project-details">
            <summary>{project_labels.contribution}</summary>
            <ul>{bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
          </details>
        )}
        <a className="project-code" href={url} target="_blank" rel="noreferrer">
          {project_check}<span className="sr-only">: {name}</span>
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}
