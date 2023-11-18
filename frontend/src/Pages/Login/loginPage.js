import React from 'react';
import { LoginForm } from './loginForm';
import { useNavigate } from 'react-router-dom';
import './loginpage.css';

export const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/');
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <h2 className="login-header">Login</h2>
        <LoginForm onLogin={handleLogin} />
        <div className="link-container">
        </div>
      </div>
    </div>
  );
};