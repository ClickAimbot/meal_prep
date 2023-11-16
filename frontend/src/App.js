import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import {Navbar} from "./Components/navbar.js";
import {Home} from "./Pages/Home/home.js";
import {LoginPage} from "./Pages/Login/loginPage.js";
import {Leanform} from "./Pages/Plans/leanform.js";
import {Bulkform} from "./Pages/Plans/bulkform.js";

const App = () => {
  return (
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="leanprep" element={<Leanform />} />
          <Route path="bulkprep" element={<Bulkform />} />
        </Routes>
      </div>
  );
};
export default App;
