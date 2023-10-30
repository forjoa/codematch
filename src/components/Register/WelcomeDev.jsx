import '../../styles/WelcomeDev.css'

import { useEffect, useState } from "react"

import logo from '../../assets/photo-logo.png'
import { Link } from 'react-router-dom'

const WelcomeDev = () => {
    const [name, setName] = useState('')

    useEffect(() => {
        document.title = '¡Bienvenid@!'
        setName(localStorage.getItem('name'))
    }, [])

    return (
        <div className="welcome-container">
            <div className="welcome">
                <img src={logo} alt="Welcome Logo" className="welcome-logo" />
                <h1>Bienvenid@ {name}!</h1>
                <h2>Estamos encantados de tenerte con nosotros</h2>
                <p>Gracias por confiar en nosotros para conseguir tu primer trabajo freelance!</p>
                <div className="links">
                    <Link to='/'>Volver al inicio</Link>
                    <Link to='/search'>Verme en el buscador</Link>
                </div>
            </div>
        </div>
    )
}

export default WelcomeDev