import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from '../AnimatedLetters'
import './index.scss';
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','S', 'a', 'n', 't', 'i', 'a', 'g', 'o', ' ', 'R', 'u', 'b', 'i', 'o,']
    const jobArray = ['D', 'e', 's', 'a', 'r', 'r', 'o', 'l', 'l', 'a', 'd', 'o', 'r', ' ', 'w', 'e','b.']

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
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>¡H</span>
                <span className={`${letterClass} _12`}>o</span>
                <span className={`${letterClass} _13`}>l</span>
                <span className={`${letterClass} _14`}>a!</span>
                <br />
                <span className={`${letterClass} _15`}>S</span>
                <span className={`${letterClass} _16`}>o</span>
                <span className={`${letterClass} _17`}>y</span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>Desarrollador Full Stack</h2>
                <Link 
                to="/contact" 
                className="flat-button"
                >CONTÁCTAME</Link>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home