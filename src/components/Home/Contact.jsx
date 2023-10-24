import '../../styles/Contact.css'
import cwu from '../../assets/3459559.jpg'

import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

function Contact() {
    // principal variables states
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const notify = () => toast('Mensaje enviado correctamente', {
        duration: 2000,
        position: 'top-center',
        icon: '✅'
    })

    // setting values
    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleChangeMessage = (event) => {
        setMessage(event.target.value)
    }

    // handler for form sended
    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {name, email, message}

        try {
            const response = await fetch('http://localhost:3000/doubts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            if (response.ok) {
                notify()
                setName('')
                setEmail('')
                setMessage('')
            } else {
                console.error('error al enviar mensaje')
            }
        } catch (error) {
            console.error('error al enviar el mensaje', error)
        }
    }

    return (
        <aside>
            <div className="general">
                <div className="img">
                    <img src={cwu} />
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <label>Introduce tu nombre:</label>
                        <input type="text" onChange={handleChangeName} value={name}/>

                        <label>Introduce tu correo:</label>
                        <input type="email" onChange={handleChangeEmail} value={email}/>

                        <label>Introduce tu duda:</label>
                        <textarea onChange={handleChangeMessage} value={message}/>

                        <input type="submit" value="Enviar" />
                    </form>
                </div>
            </div>
            <Toaster />
        </aside>
    )
}

export default Contact;
