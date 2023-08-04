import React from 'react'


export const ProjectCard = (project) => {
  return (
    <article>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul>
            {
            project.bullets.map( bullet => (
                <li key={bullet}>{bullet}</li>
            ))
            }
        </ul>
        <p>Technologies:</p>
        <ul>
            {
            project.technologies.map( techology => (
                <li key={techology}>{techology}</li>
            ))
            }
        </ul>
    </article>
  )
}
