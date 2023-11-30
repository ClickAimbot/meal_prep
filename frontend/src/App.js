import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import {Navbar} from "./Components/Navbar/navbar.js";
import {Home} from "./Pages/Home/home.js";
import {Plans} from "./Pages/Plans/plans.js";
import {LoginPage} from "./Pages/Login/loginPage.js";
import {SignUpForm} from './Pages/Login/signUpForm.js';
import {Leanform} from "./Components/Form/leanForm.js";
import {Bulkform} from "./Components/Form/bulkForm.js";

const App = () => {

  return (
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="plans" element={<Plans/>} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="signup" element={<SignUpForm/>} />
          <Route path="leanform" element={<Leanform />} />
          <Route path="bulkform" element={<Bulkform />} />
        </Routes>
      </div>
  );
};
export default App;
