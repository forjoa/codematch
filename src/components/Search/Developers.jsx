import { useEffect, useState } from 'react'

import Dev from './Dev.jsx'

const Developers = () => {
    const [devs, setDevs] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/developers')
            .then(response => response.json())
            .then(data => {
                setDevs(data)
            })
    }, [])

    return (
        <article className='devs-container'>
            {devs.map((dev, key) => {
                return (
                    <Dev key={key} data={dev}/>
                )
            })
            }
        </article>
    )
}

export default Developers