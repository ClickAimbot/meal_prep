import React, { useState } from "react";
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

import formSchema from "./Components/Validation";
import Leanform from "./Components/leanform";
import Bulkform from "./Components/bulkform";
import Home from "./Components/Homepage";


const initialFormValues = {
  protein: "",
  carb: "",
  veggie: "",
  sauce: "",
  special: ""
}
const initialFormErrors = {
  username: "",
  size: "",
  sauce: "",
  topping: "",
  special: ""
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const onSubmit = () => {
    console.log(formValues)
    axios.post("https://reqres.in/api/orders", formValues)
    .then(res => {
      setUsers([ res.data, ...users ])
    })
    .catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }
  const onChange = (name, value) => {
    validate(name, value)
    setFormValues({ ...formValues, [name]: value})
  }

  return (
      <div className='App'>
        <nav>
          <h1 className='store-header'>Meal Prepping Done Right</h1>
          <div className='nav-links'>
            <Link to="/">Home</Link>
            <Link to="Help">Help</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="leanprep" element={<Leanform values={formValues} change={onChange} errors={formErrors} submit={onSubmit} />} />
          <Route path="bulkprep" element={<Bulkform values={formValues} change={onChange} errors={formErrors} submit={onSubmit} />} />
        </Routes>
      </div>
  );
};
export default App;
