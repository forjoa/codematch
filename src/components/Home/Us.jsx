import UsCard from './UsCard.jsx'

import wwa from '../../assets/3918929.jpg'
import www from '../../assets/3515462.jpg'
import wh from '../../assets/3190343.jpg'

import '../../styles/Us.css'

function Us () {
    return (
        <>
        <article id='us'> 
            <UsCard 
                title='¿Quiénes somos?'
                text='En Code Match queremos que tomes la decisión correcta. Queremos que hagas Match con tu próximo desarrollador.'
                img={ wwa }
            />
            <UsCard 
                title='¿Qué buscamos para ti?'
                text='Buscamos que te sientas cómodo con tu equipo de trabajo y encuentres exactamente lo que necesitas.'
                img={ www }
            />
            <UsCard
                title='¿Qué tenemos para ti?'
                text='Aquí encontrarás al mejor desarrollador para ti. Tendrás la libertad de buscar por filtros al desarrollador que necesitas exactamente'
                img={ wh }
            />
        </article>
        </>
    )
}

export default Us