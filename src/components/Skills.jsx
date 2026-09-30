import { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

export const Skills = () => {
  const { skills, actions, skills_eyebrow } = useContext(DataContext)

  return (
    <section className="portfolio-section" aria-labelledby="skills-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{skills_eyebrow}</p>
          <h2 id="skills-title">{actions.skills}</h2>
        </div>
        <span className="section-number" aria-hidden="true">03 /</span>
      </div>
      <ul className="skill-grid">
        {skills.map(({ skill, img }) => (
          <li className="skill-tile" key={skill}>
            <img src={`${import.meta.env.BASE_URL}${img}`} alt="" loading="lazy" width="48" height="48" />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
