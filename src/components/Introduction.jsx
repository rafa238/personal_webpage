import React, { Children, useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataProvider'

const images = ["mi_foto_cubre.jpg", "mi_foto.jpg"]
let idx = 0;

export const Introduction = () => {
  const { greeting, description, resume_check} = useContext(DataContext);
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

      <a
        href='https://drive.google.com/file/d/1kVvRcr4bNo7RjBhS2LVNTquH23Y3tGNA/view'
        className='presen_resume shadow'
        target='__blank'
      >
        {resume_check}
      </a>
    </section>
  )
}
