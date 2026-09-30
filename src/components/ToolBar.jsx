import { useContext, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FiBriefcase, FiCode, FiLayers, FiMail } from 'react-icons/fi'
import { DataContext } from '../context/DataProvider'

export const ToolBar = () => {
  const { actions, language, navigation: navigation_labels, experience_labels } = useContext(DataContext)
  const { pathname } = useLocation()
  const navigation = useRef(null)
  const sections = [
    { path: '', label: experience_labels.title, Icon: FiBriefcase },
    { path: 'projects', label: actions.projects, Icon: FiCode },
    { path: 'skills', label: actions.skills, Icon: FiLayers },
    { path: 'contact', label: actions.contact, Icon: FiMail },
  ]

  useEffect(() => {
    const active = navigation.current?.querySelector('[aria-current="page"]')
    if (active) navigation.current.scrollLeft = active.offsetLeft - navigation.current.offsetLeft - 12
  }, [pathname, language])

  return (
    <div className="section-switcher" id="content">
      <nav
        className="section-links"
        aria-label={navigation_labels.sections}
        ref={navigation}
      >
        {sections.map(({ path, label, Icon }) => (
          <NavLink
            key={path}
            to={`/personal_webpage/${path}#content`}
            end
            className={({ isActive }) => `section-link${isActive ? ' is-active' : ''}`}
          >
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
