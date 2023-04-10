import {Link, NavLink} from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/S (1).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser,faBars, faClose, faGear } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';


const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    
    return(
    <div className='nav-bar'>
        <Link 
            className='logo' 
            to='/'
            onClick={() => setShowNav(false)}
            >
            <img src={LogoS} alt="logo" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            to="/"
            onClick={() => setShowNav(false)}
            >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassname='active'
            className="about-link" 
            to="/About"
            onClick={() => setShowNav(false)}
            >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassname='active'
            className="skills-link" 
            to="/Skills"
            onClick={() => setShowNav(false)}
            >
                <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassname='active'
            className="contact-link" 
            to="/Contact"
            onClick={() => setShowNav(false)}
            >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <FontAwesomeIcon 
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#ffd700"
            size="3x"
            className='close-icon' />
        </nav>
        <ul>
            <li>
                <a 
                target="_blank" 
                rel="noreferrer"
                href='https://www.linkedin.com/in/santiago-rubio-baena/'
                >
                    <FontAwesomeIcon 
                    icon={faLinkedin} 
                    color="#4d4d4e" 
                    className="anchor-icon"
                    />
                </a>
            </li>
            <li>
                <a 
                target="_blank" 
                rel="noreferrer"
                href='https://github.com/Srubio-b'
                >
                    <FontAwesomeIcon 
                    icon={faGithub} 
                    color="#4d4d4e" 
                    className="anchor-icon"
                    />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon 
            onClick={() => setShowNav(true)}
            icon={faBars}
            color="#ffd700"
            size="3x"
            className='hamburger-icon' />
    </div>
    )
}

export default Sidebar