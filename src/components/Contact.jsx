import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'
import { Form } from './Form';
import { AiOutlinePhone, AiOutlineMail, AiOutlineLinkedin} from 'react-icons/ai';
import { BsGithub} from 'react-icons/bs';

export const Contact = () => {
  const {social_media, contact} = useContext(DataContext);
  const {contact_me, send_me, email, phone} = contact;
  return (
    <div 
      className='contact' 
      id="contact"
      data-aos="fade-bottom"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="2000">
      <div className='contact__container shadow'>
        <div className='contact__info'>
          <h5>{ contact_me }</h5>

          <p className='contact__info-item'>
            <AiOutlineMail/>
            <strong> { email }:</strong> <br/> 
            rafalaureano642@gmail.com
          </p>

          <p className='contact__info-item'>
            <AiOutlinePhone/>
            <strong> { phone }:</strong> <br/> 
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
          <h5> { send_me } </h5>
          <Form />
        </div>
      </div>
    </div>
  )
}
