import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';

import {Navbar} from "./Components/navbar.jsx";
import {Home} from "./Pages/Home/home.js";
import {ContactUs} from "./Pages/Help/contact-us.jsx";
import {LoginPage} from "./Pages/Login/loginPage.jsx";
import {Leanform} from "./Pages/Plans/leanform.jsx"

const App = () => {
  return (
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="plans" element={<Leanform />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>
      </div>
  );
};
export default App;
