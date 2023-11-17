import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './navbar.css'; 

export const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/" className="logo">
          Prepped Up
        </Link>
      </div>
        <ul className="app__navbar-links">
          <li className='p__opensans'>
            <Link to="/plans">
              Plans
            </Link>
          </li>
        </ul>
        <div className='app__navbar-login'>
          <Link to="/login" className="p__opensans">
            Login / Register
          </Link>
        </div>

        <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setShowMenu(true)}/>

        {showMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setShowMenu(false)}/>
          <ul className="app__navbar-smallscreen_links">
            <li className="p__opensans">
              <Link to="/">Home</Link>
            </li>
            <li className="p__opensans">
              <Link to="/plans">Plans</Link>
            </li>
          </ul>
        </div>
        )}
      </div>
    </nav>
  );
};
