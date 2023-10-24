import '../styles/Footer.css'

import Instagram from '../icons/Instagram.jsx'
import Twitter from '../icons/Twitter.jsx'
import Linkedin from '../icons/Linkedin.jsx'

function Footer() {
    return (
        <footer>
            <ul>
                <li>
                    <Instagram />
                    <a href='https://www.instagram.com/loveujoa/' target='_blank'>Instagram</a>
                </li>
                <li>
                    <Twitter />
                    <a href='https://twitter.com/loveujoa' target='_blank'>Twitter</a>
                </li>
                <li>
                    <Linkedin />
                    <a href='https://www.linkedin.com/in/joaquin-trujillo-851547254/' target='_blank'>LinkedIn</a>
                </li>
            </ul>
            <p>© Todos los derechos reservados: Joaquin Trujillo</p>
        </footer>
    )
}

export default Footer