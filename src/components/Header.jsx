import '../styles/Header.css'

import { Link } from 'react-router-dom'
import { useState } from 'react'

import Login from './Login.jsx'
import Popup from 'reactjs-popup'
import Logo from './Logo.jsx'

function Header() {

  // To change burguer classes 
  const [burger_class, setBurguer_class] = useState('burger-bar unclicked')
  const [menu_class, setMenu_class] = useState('menu hidden')
  const [is_menu_clicked, setIs_menu_clicked] = useState(false)

  // Toggle burguer menu change 
  const updateMenu = () => {
    if (!is_menu_clicked) {
      setBurguer_class('burger-bar clicked')
      setMenu_class('menu visible')
    } else {
      setBurguer_class('burger-bar unclicked')
      setMenu_class('menu hidden')
    }
    setIs_menu_clicked(!is_menu_clicked)
  }

  return (
    <header>

      <Logo />

      <div className="navbar">

        <nav className={menu_class}>
          <ul>
            <li><Link to='/'>Inicio</Link></li>
            <li><a href='#us'>Nosotros</a></li>
            <li><Link to='/search'>Buscar</Link></li>
            <li><Popup trigger={<button>Iniciar Sesión</button>} modal nested>{close => (<Login close={close} />)}</Popup></li>
          </ul>
        </nav>

        <div className="burger-menu">
          <div className={burger_class} onClick={updateMenu}></div>
          <div className={burger_class} onClick={updateMenu}></div>
          <div className={burger_class} onClick={updateMenu}></div>
        </div>

      </div>

    </header>
  )
}

export default Header