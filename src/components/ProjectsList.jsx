import React, { useContext } from 'react'
import { ProjectCard } from './ProjectCard'
import { DataContext } from '../context/DataProvider';

export const ProjectsList = () => {
  const { projects } = useContext(DataContext);
  return (
    <>
      <h2>Projects maded with love: </h2>
      {
        projects.map( project => (
          <ProjectCard key={project.name} {...project}/>
        ))
      }
    </>
  )
}
