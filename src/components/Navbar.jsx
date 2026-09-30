import { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

export const Navbar = () => {
  const { language, setLanguage, navigation } = useContext(DataContext)
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
          <a href="#home">
            {navigation.about}
          </a>
          <a href="#content">
            {navigation.journey}
          </a>
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
