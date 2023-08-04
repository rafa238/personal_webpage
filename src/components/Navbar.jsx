import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

export const Navbar = () => {
  const {language, setLanguage} = useContext(DataContext);
  return (
    <nav>
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

      <input 
        type='checkbox' 
        value="language"
        checked={language}
        onChange={() => setLanguage(!language)}/>
    </nav>
  )
}
