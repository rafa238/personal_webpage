import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataProvider'

export const Navbar = () => {
  const {language, setLanguage, actions} = useContext(DataContext);

  const [navBackground, setNavBackground] = useState('transparent');

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setNavBackground('var(--blue-gray-light)'); // Cambiar el color de fondo al superar 100vh
    } else {
      setNavBackground('transparent'); // Mantener el fondo transparente
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className='nav' style={{ backgroundColor: navBackground }}>
      <div className='nav__left'>
        <img className='nav-name' src='/my_icon.ico'/>
        <ul className='main-nav'>
          <li className='main-nav__item'>
            <a href='#' > { actions.home } </a>
          </li>
          <li className='main-nav__item'>
            <a href='#content'> { actions.content } </a>
          </li>
          
        </ul>
      </div>
      <div className='nav__right'>
        <img
          src='assets/idiom.png'
          className='nav__right-language'
          onClick={() => setLanguage(!language)}/>
      </div>
    </nav>
  )
}
