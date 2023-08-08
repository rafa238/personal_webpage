import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

export const Navbar = () => {
  const {language, setLanguage, actions} = useContext(DataContext);

  return (
    <nav className='nav'>
      <div className='nav__left'>
        <span className='nav-name'>
          <strong>Rafa</strong> JL
        </span>
        <ul className='main-nav'>
          <li className='main-nav__item'>
            <a href='#' > { actions.home } </a>
          </li>
          <li className='main-nav__item'>
            <a href='#contact' > { actions.contact } </a>
          </li>
          <li className='main-nav__item'>
            <a href='#projects'> { actions.projects } </a>
          </li>
        </ul>
      </div>
      <div className='nav__right'>
        <img
          src='assets/idiom.png'
          className='nav__right-language light'
          onClick={() => setLanguage(!language)}/>
      </div>
    </nav>
  )
}
