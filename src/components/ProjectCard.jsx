import React, { useContext } from 'react'
import { DataContext } from '../context/DataProvider';

export const ProjectCard = (project) => {
    const { project_check } = useContext(DataContext);

    const images = (project.images) ? project.images : "escom.jpg";
    const {name, description, bullets, technologies, url} = project;
    return (
        <article 
            className='projects__card'
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000">
            <div className='card__header'>
                <img src={ images } />
                <h5 className='card__header-title'>{ name }</h5>
            </div>
            <div className='card__content'>
                <p className='card__content-description'>{ description }</p>
                <ul className='card__content-bullets'>
                    {
                        bullets.map(bullet => (
                            <li key={bullet}>{bullet}</li>
                        ))
                    }
                </ul>
                <h5>Technologies:</h5>
                <ul className='card__content__tech'>
                    {
                        technologies.map(techology => (
                            <li className='card__content__tech-item'
                                key={techology}>
                                { techology }
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='card__footer'>
                <a href={ url } className='card__footer-check' target='__blank'>
                    { project_check }
                </a>
            </div>
            
        </article>
    )
}
