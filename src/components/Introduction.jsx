import { useContext, useEffect, useRef } from 'react'
import { DataContext } from '../context/DataProvider'
import Typed from 'typed.js'
import { Link } from 'react-router-dom'

export const Introduction = () => {
  const { hero, description, social_media, adjectives } = useContext(DataContext)
  const role = useRef(null)
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let typed
    const update = () => {
      typed?.destroy()
      if (preference.matches) role.current.textContent = adjectives.join(' · ')
      else typed = new Typed(role.current, { strings: adjectives, typeSpeed: 48, backSpeed: 24, backDelay: 2200, loop: true })
    }
    update()
    preference.addEventListener('change', update)
    return () => { typed?.destroy(); preference.removeEventListener('change', update) }
  }, [adjectives])
  return (
    <section className="hero" id="home" aria-labelledby="hero-name">
      <div className="hero-copy">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-name">Rafael Juárez<br /><span>Laureano.</span></h1>
        <div className="hero-role"><span className="sr-only">{adjectives.join(' · ')}</span><span aria-hidden="true"><span ref={role} /></span></div>
        <p className="hero-description">{description}</p>
        <p className="hero-school">ESCOM · Instituto Politécnico Nacional</p>
        <div className="hero-actions">
          <Link className="primary-link" to="/personal_webpage/#content">{hero.explore} <span aria-hidden="true">↗</span></Link>
          <a className="secondary-link" href="mailto:rafalaureano642@gmail.com">{hero.contact} <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-social">
          <a href={`${import.meta.env.BASE_URL}Resume_Rafael.pdf`} target="_blank" rel="noreferrer">{hero.resume}</a>
          <a href={social_media.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={social_media.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
      <figure className="hero-photo"><img src={`${import.meta.env.BASE_URL}photos/golden-gate.jpg`} alt={hero.photo_alt} width="800" height="800" /><figcaption>San Francisco, California</figcaption></figure>
    </section>
  )
}
