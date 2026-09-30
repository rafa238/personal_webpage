import { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

export const Footer = () => {
  const { social_media, footer_email } = useContext(DataContext)

  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Rafael Juárez Laureano</p>
      <div>
        <a href={social_media.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href={social_media.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="mailto:rafalaureano642@gmail.com">{footer_email}</a>
      </div>
    </footer>
  )
}
