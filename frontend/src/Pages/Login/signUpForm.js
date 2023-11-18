import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './loginform.css';
import { supabase } from '../../lib/supabaseClient';

export const SignUpForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUpWithEmail = async (e) => {
        e.preventDefault();
        await supabase.auth.signUp({ 
            email: 'example@email.com',
            password: 'example-password', 
        });
    }

    const routeToHome = () => {
        navigate('/');
    }

  return (
    <div className="signup-body">
        <form className="login-container" onSubmit={signUpWithEmail}>
        <label className='login-input'>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className='login-input'>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button className="signup-button" onClick={routeToHome} type="submit">Register</button>
        </form>
    </div>
  )
}
