import { useEffect, useState } from 'react';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        
        return () => {
            clearTimeout(timeoutId);
        }
        }, []);


    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['S', 'o', 'b', 'r', 'e', ' ', 'm', 'í']}
                        idx={15}
                    />
                </h1>
                <p> 
                    Soy un desarrollador full stack jr, 
                    busco ocupar un rol estable en una empresa de tecnología, 
                    donde tenga la oportunidad de trabajar y aprender con 
                    las más recientes tecnologías y diversos proyectos retadores.
                </p>
                <p>
                    Tengo una gran pasión por el desarrollo web y estoy 
                    convencido de que una cominicación asertiva es 
                    buena herramienta para la divulgacion del 
                    conocimiento y su apropiación socialll.
                </p>
            
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faNodeJs} color="#388E3C" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About
