
// logo img
import logo from '../assets/photo-logo.png'

const Logo = () => {
    return (
        <div className="logo" onClick={() => window.open('/', '_self')}>
            <img src={logo}></img>
            <p>CODE MATCH</p>
        </div>
    )
}

export default Logo