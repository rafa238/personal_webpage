import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider';

export const Footer = () => {
  const { social_media } = useContext(DataContext);
  return (
    <div className='footer'>
      <p className='footer-author'>© Rafael Juarez Laureano</p>
      <div className='social__container'>
        <span className='social__container__element'>
          <a href={social_media["github"]} target='__blank'>
            <img
              className='light'
              src='assets/github.png'
              alt='Rafael github' />
          </a>
        </span>

        <span className='social__container__element'>
          <a href={social_media["linkedin"]} target='__blank'>
            <img
              className='light'
              src='assets/linkedin.png'
              alt='Rafael linkedin' />
          </a>
        </span>

        <span className='social__container__element'>
          <a href="mailto:rafalaureano642@gmail.com">
            <img
              className='light'
              src='assets/mensaje.png'
              alt='Rafael email' />
          </a>
        </span>
      </div>
    </div>
  )
}
