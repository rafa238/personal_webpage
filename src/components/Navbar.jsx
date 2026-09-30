import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/DataProvider'

export const Navbar = () => {
  const { language, setLanguage, navigation, actions } = useContext(DataContext)
  const tooltip = navigation.switch_language

  return (
    <header className="site-header">
      <nav
        className="site-nav"
        aria-label={navigation.label}
      >
        <a
          className="wordmark"
          href="#home"
          aria-label="Rafael Juárez Laureano"
        >
          rjl<span>.</span>
        </a>

        <div className="nav-links">
          <Link to="/personal_webpage/#content">
            {navigation.experience}
          </Link>
          <Link to="/personal_webpage/contact#content">
            {actions.contact}
          </Link>
        </div>

        <div className="language-control">
          <button
            type="button"
            onClick={() => setLanguage(!language)}
            aria-label={tooltip}
            aria-describedby="language-tooltip"
          >
            <span aria-hidden="true">◎</span>
            <span className={language ? 'selected-language' : ''}>ES</span>
            <span aria-hidden="true">/</span>
            <span className={!language ? 'selected-language' : ''}>EN</span>
          </button>
          <span role="tooltip" id="language-tooltip">
            {tooltip}
          </span>
        </div>
      </nav>
    </header>
  )
}
