import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './index.scss';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
        
        return () => {
            clearTimeout(timeoutId);
        }
        }, []);

        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs
                .sendForm('service_iuw558p', 'template_9oquswo', form.current, 'WHIa0hjVLqXIXv3L1')
                .then(
                () => {
                    alert('Mensaje enviado!')
                    window.location.reload(false)
                },
                () => {
                    alert('Error al enviar el mensaje, por favor intenta de nuevo')
                }
                )
        }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'á', 'c', 't', 'a', 'm', 'e']} 
                    idx={15}
                    />
                    </h1>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Nombre' required />
                                </li>
                                <li className='half'>
                                    <input 
                                    type='email'
                                    name='email_id'
                                    placeholder='ejemplo@gmail.com'
                                    required
                                    />
                                </li>
                                <li>
                                    <input 
                                    placeholder='Asunto'
                                    type='text'
                                    name='subject'
                                    required
                                    />
                                </li>
                                <li>
                                    <textarea
                                    placeholder='Mensaje'
                                    name='message'
                                    required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='Enviar' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Santiago Rubio,
                    <br />
                    Colombia,
                    <br />
                    Cra 54a# 45 Santa Ana <br />
                    Bello, Antioquia <br />
                    <span>santiago.rubio.baena.22@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[6.334930, -75.558281]} zoom={15}>
                    <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://carto.com/">Carto</a> contributors'
                    />
                        <Marker position={[6.334930, -75.558281]}>
                            <Popup>Aquí vive Santiago :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}


export default Contact