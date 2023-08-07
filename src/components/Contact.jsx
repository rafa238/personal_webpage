import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'
import { Form } from './Form';
import { AiOutlinePhone, AiOutlineMail, AiOutlineLinkedin} from 'react-icons/ai';
import { BsGithub} from 'react-icons/bs';

export const Contact = () => {
  const {social_media} = useContext(DataContext);
  return (
    <div className='contact'>
      <div className='contact__container shadow'>
        <div className='contact__info'>
          <h5>¡Mantengamonos en contacto!</h5>

          <p className='contact__info-item'>
            <AiOutlineMail/>
            <strong> Correo Electronico:</strong> <br/> 
            rafalaureano642@gmail.com
          </p>

          <p className='contact__info-item'>
            <AiOutlinePhone/>
            <strong> Telefono:</strong> <br/> 
            (+52) 55 8727 7559
          </p>

          <p className='contact__info-item'>
            <BsGithub/>
            <strong> github:</strong> <br/>
            <a href={social_media["github"]} target='_blank'>rafa238</a>
          </p>

          <p className='contact__info-item'>
            <AiOutlineLinkedin/>
            <strong> Linkedin:</strong> <br/>
            <a href={social_media["linkedin"]} target='_blank'>Juarez Laureano Rafael</a>
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
