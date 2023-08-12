import React, { useContext } from 'react'
import { Link, useMatch } from 'react-router-dom'
import { DataContext } from '../context/DataProvider';

function getClassName(active) {
  return (active) ? 'toolbar__item active' : 'toolbar__item';
}

export const ToolBar = () => {
  const {actions} = useContext(DataContext);
  const { contact, projects, certifications, skills} = actions;
  const isActive = useMatch('/');

  return (
    <div className='toolbar' id='content'>
      <Link className={getClassName(isActive)} to="/personal_webpage/" >
        <img src='toolbar/proyectos.png' />
        <span>{projects}</span>
      </Link>
      <Link className={getClassName(isActive)} to="/personal_webpage/skills">
        <img src='toolbar/habilidades.png' />
        <span>{skills}</span>
      </Link>
      <Link className={getClassName(isActive)} to="/personal_webpage/certifications">
        <img src='toolbar/certificado.png' />
        <span>{certifications}</span>
      </Link>
      <Link className={getClassName(isActive)} to="/personal_webpage/contact">
        <img src='toolbar/contacto.png' />
        <span>{contact}</span>
      </Link>
    </div>
  )
}
