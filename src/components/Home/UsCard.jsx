
import '../../styles/UsCard.css'

const UsCard = ({ title , text , img }) => {
    return (
        <>
            <section>
                <h3>{ title }</h3>
                <p>{ text }</p>
                <img src={ img } className='card-img'></img>
            </section>
        </>
    )
}

export default UsCard