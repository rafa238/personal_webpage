import { useContext } from 'react'
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi'
import { DataContext } from '../context/DataProvider'
import { Form } from './Form'

export const Contact = () => {
  const { social_media, contact, actions } = useContext(DataContext)

  return (
    <section className="portfolio-section" aria-labelledby="contact-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 id="contact-title">{actions.contact}</h2>
        </div>
        <span className="section-number" aria-hidden="true">04 /</span>
      </div>
      <div className="contact-layout">
        <div className="contact-card">
          <h3>{contact.contact_me}</h3>
          <p>{contact.description}</p>
          <div className="contact-methods">
            <a href="mailto:rafalaureano642@gmail.com"><FiMail aria-hidden="true" /><span>{contact.email}<strong>rafalaureano642@gmail.com</strong></span></a>
            <a href="tel:+525587277559"><FiPhone aria-hidden="true" /><span>{contact.phone}<strong>+52 55 8727 7559</strong></span></a>
            <a href={social_media.github} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" /><span>GitHub<strong>rafa238 ↗</strong></span></a>
            <a href={social_media.linkedin} target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" /><span>LinkedIn<strong>Rafael Juárez Laureano ↗</strong></span></a>
          </div>
        </div>
        <div className="message-card">
          <h3>{contact.send_me}</h3>
          <Form />
        </div>
      </div>
    </section>
  )
}
