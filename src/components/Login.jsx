import '../styles/Login.css'

import loginIcon from '../icons/loginIcon.svg'

import { Link } from 'react-router-dom'

const Login = (close) => {
    return (
        <form className='login-form'>
            <button onClick={close} className='close'>&times;</button>
            <div className="login-title">
                <img src={loginIcon} className='login-icon' />
                <h2>Login</h2>
            </div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" />
            <label htmlFor='pwd'>Contraseña</label>
            <input type='password' name='pwd' placeholder='******'/>
            <input type='submit' className='submit-login'/>

            <div className="register-box">
                <p className='register-title'>¿Eres un desarrollador? ¡Regístrate!</p>
                <Link to='/register-dev' className='sign-in-btn'>Sign in</Link>
            </div>
        </form>
    )
}

export default Login