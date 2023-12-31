import React, { Children, useContext, useEffect, useRef, useState } from 'react'
import { DataContext } from '../context/DataProvider'
import Typed from 'typed.js'

const images = ["mi_foto2_cubre.png", "mi_foto2.png"]
let idx = 0;

export const Introduction = () => {
  const { greeting, description, resume_check, social_media, adjectives } = useContext(DataContext);
  const [imgIdx, setImgIdx] = useState(idx);
  const adjs = useRef(null);

  useEffect(() => {
    //change image
    const intervalId = setInterval(function () {
      setImgIdx((idx++) % images.length);
    }, 4000);

    //typed efect
    const typed = new Typed(adjs.current, {
      strings: adjectives,
      typeSpeed: 200,
      backSpeed: 100,
      onComplete: (self) => {
        //wait one second and reset
        setTimeout(() => {
          self.reset();
        }, 1000);
      }
    });

    return () => {
      //interval image
      clearInterval(intervalId);
      //interval typing
      typed.destroy();
    }
  }, [adjectives]);


  return (
    <section className='presen'>
      <figcaption className='presen__pictures'>
        <img
          data-aos="fade-up"
          data-aos-duration="3000"
          src={images[imgIdx]}
          alt='Rafael Juarez Laureano fotografia' />
      </figcaption>
      <div className='presen__main'>
        <h1 className='presen__main-greeting'>
          {greeting} <span ref={adjs}></span>
        </h1>
        <p className='presen__main-description'>{description}</p>
        <div className='social__container'
          data-aos="fade-right"
          data-aos-duration="3000">

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

          <span className='social__container__element'>
            <a href="https://drive.google.com/file/d/1kVvRcr4bNo7RjBhS2LVNTquH23Y3tGNA/view" target="__blank">
              <img
                className='light'
                src='assets/cv.png'
                alt='Rafael resume' />
            </a>
          </span>
        </div>
      </div>

      {/*<a
        href='https://drive.google.com/file/d/1kVvRcr4bNo7RjBhS2LVNTquH23Y3tGNA/view'
        className='btn-blue shadow'
        target='__blank'
      >
        {resume_check}
      </a>*/}
    </section>
  )
}
