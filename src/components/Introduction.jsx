import React, { Children, useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataProvider'

const images = ["mi_foto_cubre.jpg", "mi_foto.jpg"]
let idx = 0;

export const Introduction = () => {
  const { greeting, description, resume_check, social_media} = useContext(DataContext);
  const [imgIdx, setImgIdx] = useState(idx);

  useEffect(() => {
    const intervalId = setInterval(function(){
      setImgIdx((idx++) % images.length);
    }, 4000);
  
    return () => {
      clearInterval(intervalId);
    }
  }, []);
  

  return (
    <section className='presen'>
      <figcaption className='presen__pictures'>
        <img src={ images[imgIdx] } alt='Rafael Juarez Laureano fotografia'/>
      </figcaption>
      <div className='presen__main'>
        <h1 className='presen__main-greeting'>{ greeting }</h1>
        <p className='presen__main-description'>{ description }</p>
      </div>
      <div className='social__container'>
        <a href={ social_media["github"] } target='__blank'>
            <img src='assets/github.png' alt='Rafael github'/>
        </a>
        <a href={ social_media["linkedin"] } target='__blank'>
            <img src='assets/linkedin.png' alt='Rafael linkedin'/>
        </a>
        <a href="#contact">
            <img src='assets/mensaje.png' alt='Rafael email'/>
        </a>
      </div>
      <a
        href='https://drive.google.com/file/d/1kVvRcr4bNo7RjBhS2LVNTquH23Y3tGNA/view'
        className='btn-blue shadow'
        target='__blank'
      >
        {resume_check}
      </a>
    </section>
  )
}
