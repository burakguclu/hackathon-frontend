import React from 'react';
import './ResetForm.css';
import { Link } from 'react-router-dom';

const ResetForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Reset Password</h1>
            <p style={{ textAlign: 'center', marginBottom: '20px'}}>
                Please enter your email address to search for your account.
            </p>
            <div className="input-box">
                <input type="email" placeholder='E-mail' required />
            </div>
            <button type="submit">Send</button>
            <div className="register-link">
                <p>Remember your password? <Link to="/">Login</Link></p>
            </div>
        </form>
    </div>
  )
}

export default ResetForm