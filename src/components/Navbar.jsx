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
            <a href='#' > My projects </a>
          </li>
        </ul>
      </div>
      <label class="nav__switchBtn">
        <input 
          type='checkbox' 
          checked={language}
          onChange={() => setLanguage(!language)}/>
          <div class="slide round">spanish</div>
      </label>
      
    </nav>
  )
}
