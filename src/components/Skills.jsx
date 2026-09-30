import { useContext } from 'react'
import { FiCpu, FiServer, FiSmartphone, FiLink, FiDatabase, FiZap } from 'react-icons/fi'
import { DataContext } from '../context/DataProvider'

const skillIcons = {
  ai: FiCpu,
  backend: FiServer,
  mobile: FiSmartphone,
  apis: FiLink,
  pipelines: FiDatabase,
  automation: FiZap,
}

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
        {skills.map(({ id, skill, description }) => {
          const Icon = skillIcons[id]

          return (
            <li className="skill-tile" key={id}>
              <span className="skill-icon">
                <Icon aria-hidden="true" />
              </span>
              <h3>{skill}</h3>
              <p>{description}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
