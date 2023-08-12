import React, { useContext, useState } from 'react'
import { DataContext } from '../context/DataProvider';

export const ProjectCard = (project) => {
    const { project_check } = useContext(DataContext);
    const {name, description, bullets, technologies, url, images} = project;

    const [isActive, setIsActive] = useState(false);
    
    const toggleCard = () => {
        setIsActive(!isActive);
    };

    return (
        <article
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
            className={`projects__card ${isActive ? 'active' : ''}`}
            onClick={toggleCard} >
            
            {isActive && (
                <div className="overlay">
                    <div className="content">
                        <a href={url} target='__blank'>
                        <img
                            className='light'
                            src='assets/github.png'
                            alt='Github repository' />
                        </a>
                        <img src='assets/cerca.png' className='overlay__content-close'/>
                    </div>    
                </div>  
            )}

            <div className='card__header'>
                <img src={ images } />
                <h5 className='card__header-title'>{ name }</h5>
            </div>
            <div className='card__content'>
                <p className='card__content-description'>{ description }</p>
                <div>
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
            </div>        
        </article>
    )
}
