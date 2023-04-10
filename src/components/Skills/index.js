import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['Competencias', ' ', '&', ' ', 'Educación']
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
        
        return () => {
            clearTimeout(timeoutId);
        }
        }, []);

    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                    />
                </h1>
                <p>
                    Desarrollador full stack con competencias en tecnologías como
                    <span> HTML5, CSS3, SCSS, JavaScript, React, Git, GitHub, MongoDB</span> y <span>NodeJs</span>
                    .
                </p>
                <p>
                    Graduado como Full Stack Engineer de 
                    <span><a href='https://www.educacionit.com/' target="_blank" rel='noopener noreferrer'> EducaciónIT </a></span> 
                    en alianza con <span><a href='https://www.protalento.com/' target="_blank" rel='noopener noreferrer'> PROtalento</a></span>,
                    donde trabajé en proyectos de desarrollo como sitios dinámicos, e-commerce, formularios, etc.
                </p>
                <p>
                    Visita mi <span><a href='https://www.linkedin.com/in/santiago-rubio-baena/' target="_blank" rel='noopener noreferrer'> LinkedIn </a></span>
                    para más detalles. Además, para revisar mi hoja de vida, puedes hacerlo en este 
                    <span>
                        <a href='https://drive.google.com/file/d/1-HCLOBvEwZLZqTkHt48JPOUM5SWRiUaE/view?usp=sharing' target="_blank" rel='noopener noreferrer'> Link 
                        </a>
                    </span>.
                </p>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Skills

//https://drive.google.com/file/d/1-HCLOBvEwZLZqTkHt48JPOUM5SWRiUaE/view?usp=sharing