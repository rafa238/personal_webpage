import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider';

export const Footer = () => {
  const {social_media} = useContext(DataContext);
  return (
    <div className='footer'>
        <p className='footer-author'>© Rafael Juarez Laureano</p>
        <div className='social__container'>
            <a href={ social_media["github"] } target='__blank'>
                <img 
                  className='light' 
                  src='assets/github.png' 
                  alt='Rafael github'/>
            </a>
            <a href={ social_media["linkedin"] } target='__blank'>
                <img 
                  className='light' 
                  src='assets/linkedin.png' 
                  alt='Rafael linkedin'/>
            </a>
            <a href="mailto:rafalaureano642@gmail.com">
              <img 
                className='light'
                src='assets/mensaje.png' 
                alt='Rafael email'/>
            </a>
        </div>
    </div>
  )
}
