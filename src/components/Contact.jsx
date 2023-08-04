import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

export const Contact = () => {
  const {social_media} = useContext(DataContext);
  return (
    <div>
        Correo Electronico: rafalaureano642@gmail.com
        Telefono: (+52) 55 8727 7559
        github: <a href={social_media["github"]} target='_blank'>rafa238</a>
        Linkedin: <a href={social_media["linkedin"]} target='_blank'>Juarez Laureano Rafael</a>
    </div>
  )
}
