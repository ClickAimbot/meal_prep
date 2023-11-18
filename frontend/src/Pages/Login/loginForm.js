import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import './loginform.css';

export const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithEmail = async (e) => {
    e.preventDefault();
    await supabase.auth.signInWithPassword({
      email: 'example@email.com',
      password: 'example-password',
    })
    onLogin();
  };

  useEffect(() => {
    const session = supabase.auth.getSession();
    setUser(session?.user)
  }, [])

  const routeToSignup = () => {
    navigate('/signup');
  }

  return (
    <form className="login-container" onSubmit={signInWithEmail}>
      <label className='login-input'>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className='login-input'>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button className="login-button" type="submit">Login</button>
      <button className="signup-button" onClick={routeToSignup}>Sign Up</button>
    </form>
  );
};

