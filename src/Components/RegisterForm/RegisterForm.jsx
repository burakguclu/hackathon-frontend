import React from 'react'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa"

const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Register</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="email" placeholder='E-mail' required />
                <FaEnvelope className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required />
                <FaLock className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='Re-enter password' required />
                <FaLock className='icon'/>
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default LoginForm