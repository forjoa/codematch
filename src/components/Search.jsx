import Header from './Header.jsx'
import Developers from './Search/Developers.jsx'
import Footer from './Footer.jsx'

import '../styles/Search.css'

import { useEffect } from 'react'

const Search = () => {

    useEffect(() => {
        document.title = 'Code Match | Buscar'
    }, [])

    return (
        <>
            <Header />
            <input
                className='input-search'
                type='text'
                spellCheck='false'
                placeholder='Nombre de usuario / Lenguaje '
            />
            <Developers />
            <Footer /> 
        </>
    )
}

export default Search