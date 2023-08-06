import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

export const Navbar = () => {
  const {language, setLanguage} = useContext(DataContext);
  return (
    <nav className='nav'>
      <div className='nav__left'>
        <span className='nav-name'>
          <strong>Rafa</strong> JL
        </span>
        <ul className='main-nav'>
          <li className='main-nav__item'>
            <a href='#' > Home </a>
          </li>
          <li className='main-nav__item'>
            <a href='#' > About </a>
          </li>
          <li className='main-nav__item'>
            <a href='#'>Projects</a>
          </li>
        </ul>
      </div>
      <label >
        <input 
          type='checkbox' 
          checked={language}
          onChange={() => setLanguage(!language)}/>
      </label>
      
    </nav>
  )
}
