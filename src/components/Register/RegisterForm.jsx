import { useState, useEffect } from 'react'

import locked from '../../icons/locked.svg'
import unlocked from '../../icons/unlocked.svg'

import languages_frameworks from '../../constants/languages.js'

const RegisterForm = () => {
    // values from form
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [description, setDescription] = useState('')

    const [selectedLanguages, setSelectedLanguages] = useState([])
    const [isUnlocked, setIsUnlocked] = useState(false)

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value

        if (!selectedLanguages.includes(selectedLanguage)) {
            setSelectedLanguages([...selectedLanguages, selectedLanguage])
        }
    }

    const removeSelectedLanguage = (language) => {
        const updatedSelectedLanguages = selectedLanguages.filter((lang) => lang !== language)
        setSelectedLanguages(updatedSelectedLanguages)
    }

    useEffect(() => {
        document.title = 'Code Match | Register'
    }, [])

    return (
        <main className="register">
            <h1>Gracias por elegirnos!</h1>
            <form action="" className="register-form">
                <label htmlFor='name'>Nombre: </label>
                <input
                    type='text'
                    className='name'
                    name='name'
                    id='name'
                    autoComplete="given-name"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                />

                <label htmlFor='surname'>Apellido:</label>
                <input
                    type='text'
                    className='surname'
                    name='surname'
                    id='surname'
                    autoComplete="family-name"
                    value={surname}
                    onChange={(e) => { setSurname(e.target.value) }}
                />

                <label htmlFor='email'>Correo:</label>
                <input
                    type='email'
                    className='email'
                    name='email'
                    id='email'
                    autoComplete='email'
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />

                <label htmlFor="password">Contraseña:</label>
                <div className="password-input">
                    <input
                        type={isUnlocked ? 'text' : 'password'}
                        className="password"
                        name="password"
                        id="password"
                        value={pwd}
                        onChange={(e) => { setPwd(e.target.value) }}
                    />
                    <img
                        src={isUnlocked ? unlocked : locked}
                        onClick={() => setIsUnlocked(!isUnlocked)}
                        alt="password visibility"
                    />
                </div>

                <label htmlFor="languages">Lenguajes y frameworks:</label>
                <select name="languages" className="languages" id="languages" onChange={handleLanguageChange}>
                    <option value="">Seleccione un lenguaje o framework</option>
                    {languages_frameworks.map((lang, index) => {
                        return (
                            <option key={index} value={lang}>{lang}</option>
                        )
                    })}
                </select>
                <div className="selected-languages">
                    {selectedLanguages.map((selectedLang, index) => (
                        <div key={index} className="selected-language">
                            {selectedLang}
                            <button
                                type="button"
                                onClick={() => removeSelectedLanguage(selectedLang)}
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>

                <label htmlFor='description'>Descríbete:</label>
                <textarea
                    className='description'
                    name='description'
                    id='description'
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }}
                />

                <label htmlFor='photo'>Foto de perfil:</label>
                <input type='file' className='photo' name='photo' id='photo'></input>

                <input type='submit' value='Enviar' className='submit' id='submit'></input>
            </form>
        </main>
    )
}

export default RegisterForm