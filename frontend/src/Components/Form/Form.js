import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import './form.css';

import schema from '../validation';

const initialFormValues = {
    protein: null,
    carb: null,
    veggie: null,
    sauce: null,
  };
  
const initialFormErrors = {
    protein: '',
    carb: '',
    veggie: '',
    sauce: '',
  };
  
export const Form = () => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [mealType, setMealType] = useState('lean');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      yup
        .reach(schema, name)
        .validate(value)
        .then(() => {
          setFormErrors({ ...formErrors, [name]: '' });
        })
        .catch((err) => {
          setFormErrors({ ...formErrors, [name]: err.errors[0] });
        });
      setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .post('https://reqres.in/api/users', formValues)
          .then((res) => {
            console.log(res.data);
            setFormValues({
              protein: null,
              carb: null,
              veggie: null,
              sauce: null,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }

    const toggleMealType = () => {
        setMealType((prevType) => (prevType === 'lean' ? 'bulk' : 'lean'));
    }

    return (
      <div className={`app__form ${mealType}`}>
        <div className="meal-type-slider">
          <div
            className={`slider-button ${mealType === 'lean' ? 'active' : ''}`}
            onClick={() => toggleMealType()}
          >
            Lean
          </div>
          <div
            className={`slider-button ${mealType === 'bulk' ? 'active' : ''}`}
            onClick={() => toggleMealType()}
          >
            Bulk
          </div>
        </div>
        <form id="form" onSubmit={handleSubmit}>
            <div className="app__wrapper_info">
            <h2 className='p__opensans' style={{color: 'black'}} >Choice of Protein</h2>
                <label htmlFor='protein-select'>
                    <select name='protein'  id='protein-dropdown' onChange={handleChange}>
                        <option value="">--Please Choose an Option--</option>
                        <option value={formValues.protein}>Chicken</option>
                        <option value={formValues.protein}>Lean Ground Beef</option>
                        <option value={formValues.protein}>Salmon</option>
                    </select>
                </label>  
                <h2 className='p__opensans' style={{color: 'black'}} >Choice of Carb</h2>
                <label htmlFor='carb-select'>
                    <select name='carb' id='carb-dropdown' onChange={handleChange}>
                        <option value="">--Please Choose an Option--</option>
                        <option value={formValues.carb}>White Rice</option>
                        <option value={formValues.carb}>Brown Rice</option>
                        <option value={formValues.carb}>Potatoes</option>
                        <option value={formValues.carb}>Sweet Potatoes</option>
                    </select>
                </label>  
                <h2 className='p__opensans' style={{color: 'black'}} >Choice of Vegetable</h2>
                <label htmlFor='veggie-select' >
                    <select name='veggie' id='veggie-dropdown' onChange={handleChange}>
                        <option value="">--Please Choose an Option--</option>
                        <option value={formValues.veggie}>Broccoli</option>
                        <option value={formValues.veggie}>Onions & Bell Peppers</option>
                        <option value={formValues.veggie}>Potatoes</option>
                        <option value={formValues.veggie}>Sweet Potatoes</option>
                    </select>
                </label>
                <h2 className='p__opensans' style={{color: 'black'}} >Choice of Sauce</h2>
                <label htmlFor='sauce-select'> 
                    <p>Optional</p>
                    <select name='sauce' id='sauce-dropdown' onChange={handleChange}>
                        <option value="">--Please Choose an Option--</option>
                        <option value={formValues.sauce}>BBQ</option>
                    </select>
                </label>
            </div>
            <footer>
                    <label>
                    <input
                        id='order-button'
                        type='submit'
                        value='Add to Cart'
                        className='custom__button'
                    />
                    </label>
            </footer>
        </form>
      </div>
    )
}