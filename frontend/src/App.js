import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

import {Navbar} from "./Components/navbar.js";
import {Home} from "./Pages/Home/home.js";
import {LoginPage} from "./Pages/Login/loginPage.js";
import {Leanform} from "./Pages/Plans/leanform.js";
import {Bulkform} from "./Pages/Plans/bulkform.js";
import schema from "./Components/validation.js";

const initialFormValues = {
  protein: '',
  carb: '',
  veggie: '',
  sauce: '',
};

const initialFormErrors = {
  protein: '',
  carb: '',
  veggie: '',
  sauce: '',
};

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
    .then(res => {
      setUsers([ res.data, ...users ])
    })
    .catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const handleChange = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value})
  }

  return (
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="leanprep" element={<Leanform values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit} />} />
          <Route path="bulkprep" element={<Bulkform values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit}/>} />
        </Routes>
      </div>
  );
};
export default App;
