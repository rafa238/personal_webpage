import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'
import { Form } from './Form';

export const Contact = () => {
  const {social_media} = useContext(DataContext);
  return (
    <div className='contact'>
      <div className='contact__container shadow'>
        <div className='contact__info'>
          <h5>¡Mantengamonos en contacto!</h5>
          <p className='contact__info-item'>
            <strong>Correo Electronico:</strong> rafalaureano642@gmail.com
          </p>
          <p className='contact__info-item'>
            <strong>Telefono:</strong> (+52) 55 8727 7559
          </p>
          <p className='contact__info-item'>
            <strong>github:</strong> <a href={social_media["github"]} target='_blank'>rafa238</a>
          </p>
          <p className='contact__info-item'>
            <strong>Linkedin:</strong> <a href={social_media["linkedin"]} target='_blank'>Juarez Laureano Rafael</a>
          </p>
        </div>
        <div className='contact__form'>
          <h5>
            Envia un correo aqui mismo
          </h5>
          <Form />
        </div>
      </div>
    </div>
  )
}
