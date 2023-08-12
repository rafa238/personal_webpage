import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider';

export const Skills = () => {
  const { skills } = useContext(DataContext);
  console.log(skills)
  return (
    <div className='skills'>
      {
        skills.map( skill => (
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
            className="skills__item" 
            key={skill.skill}>
            <img src={skill.img} className='skills__item-img'/>
            <span className='skills__item-text'>
              {skill.skill}
            </span>
          </div>
        ))
      }
    </div>
  )
}
