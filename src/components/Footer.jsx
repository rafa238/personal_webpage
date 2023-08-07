import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider';

export const Footer = () => {
  const {social_media} = useContext(DataContext);
  return (
    <div className='footer'>
        <p className='footer-author'>© Rafael Juarez Laureano</p>
        <div className='footer__social'>
            <a href={ social_media["github"] } target='__blank'>
                <img src='assets/github.png' alt='Rafael github'/>
            </a>
            <a href={ social_media["linkedin"] } target='__blank'>
                <img src='assets/linkedin.png' alt='Rafael linkedin'/>
            </a>
        </div>
    </div>
  )
}
