import { useContext } from 'react'
import { DataContext } from '../context/DataProvider'
import experience from '../db/experience.json'

export const Experience = () => {
  const { language, experience_labels } = useContext(DataContext)
  const locale = language ? 'es' : 'en'

  return (
    <section
      className="experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            {experience_labels.eyebrow}
          </p>
          <h2 id="experience-title">
            {experience_labels.title}
          </h2>
        </div>
        <span className="section-number" aria-hidden="true">
          01 /
        </span>
      </div>

      <div className="experience-timeline">
        {experience.map((item) => (
          <article className="experience-entry" key={item.id}>
            <div className="experience-date">
              {item.dates[locale]}
              <span>{item.location}</span>
            </div>

            <div className="experience-body">
              <h3>{item.company}</h3>
              <p className="experience-position">{item.role}</p>
              <p>{item.summary[locale]}</p>

              <details>
                <summary>
                  {experience_labels.details}
                </summary>
                <ul>
                  {item.details[locale].map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </details>
            </div>

            {item.photo && (
              <figure className="experience-photo">
                <img
                  src={`${import.meta.env.BASE_URL}photos/${item.photo}.jpg`}
                  alt={
                    experience_labels.photo_alt.replace('{company}', item.company)
                  }
                  loading="lazy"
                  width="768"
                  height="1024"
                />
              </figure>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
