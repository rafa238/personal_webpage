import React, { useContext } from 'react'
import { ProjectCard } from './ProjectCard'
import { DataContext } from '../context/DataProvider';

export const ProjectsList = () => {
  const { projects, projects_title} = useContext(DataContext);
  return (
    <section className='projects'>
      <h2 className='projects-title'>{ projects_title }</h2>
      {
        projects.map( project => (
          <ProjectCard key={project.name} {...project}/>
        ))
      }
    </section>
  )
}
