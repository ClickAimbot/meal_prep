import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          Prepped Up
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="plans">Our Plans</Link>
          </li>
          <li>
            <Link to="contact-us">About Us</Link>
          </li>
          <li>
            <Link to="menus">Our Menus</Link>
          </li>
        </ul>
        <Link to="/login" className="login-btn">
            Login
        </Link>
      </div>
    </div>
  );
};
