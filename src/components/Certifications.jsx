import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider';

export const Certifications = () => {
  const { certifications } = useContext(DataContext);
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000"
      className='certifications'>
      {
        certifications.map(({ title, img }) => (
          <div className="certifications__card" key={title}>
            <img
              className='certifications__card-img'
              src={"certifications/" + img} />
            <p className='certifications__card-title'>
              {title}
            </p>
          </div>
        ))
      }

    </div>
  )
}
