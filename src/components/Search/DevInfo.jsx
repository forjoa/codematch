import '../../styles/DevInfo.css'

const DevInfo = ({ data, close }) => {
    const pLang = data.programming_lang.split('/')

    return (
        <div className="modal">
            <button className="close" onClick={close}>
                &times;
            </button>
            <div className="devinfo-content">
                <div className="photo-name">
                    <img src={data.photo} />
                    <h2 className="header">{data.name}</h2>
                </div>
                <div className="content">
                    <h3>Descripción</h3>
                    <p>{data.description}</p>
                    <h3>Lenguajes:</h3>
                    <ul>
                        {
                            pLang.map((lang, index) => {
                                return (
                                    <li key={index}>{lang}</li>
                                )
                            })
                        }
                    </ul>
                    <button className='contact-me-btn'>Enviar mensaje</button>
                </div>
            </div>
        </div>
    )
}

export default DevInfo