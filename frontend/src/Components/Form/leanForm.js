import React, { useState } from 'react';
import * as yup from 'yup';
import './form.css';
import axios from 'axios';

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
  
export const Leanform = () => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [orderCount, setOrderCount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [orders, setOrders] = useState([]);
  
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

    const handleOrder = (e) => {
      e.preventDefault();
      setOrders((prevOrders) => [...prevOrders, formValues]);
      document.getElementById("form").reset();
      setFormValues(initialFormValues);
      setOrderCount((prevCount) => prevCount + 1);
      setTotalAmount((prevAmount) => prevAmount + 9.99);
    };    

    const handleOrderSubmit = async () => {
      try {
        await axios.post('https://reqres.in/api/orders', orders)
            setOrders([]);
            setFormValues({
              protein: null,
              carb: null,
              veggie: null,
              sauce: null,
            });
            setOrderCount(0);
            setTotalAmount(0);
      } catch (err) {
        console.log(err);
      }
    };
    
    return (
      <div className="app__form">
        <form id="form" onSubmit={handleOrder}>
            <div className="app__wrapper_info">
            <h1 className='form__header p__opensans' style={{color: 'black'}} >Build Your Own Meal</h1>
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
                <button id="order-button" className='custon__button'>Add to Order</button>
            </footer>
        </form>
        <div className="app__form-subcontainer p__opensans">
        {orders.length > 0 && (
          <div className="app__form-subcontainer-order">
          <h1>Your Order:</h1>
          <ul>
            {orders.map((order, index) => (
              <li key={index}>
                <p>{`Protein: ${order.protein || ''}`}</p>
                <p>{`Carb: ${order.carb || ''}`}</p>
                <p>{`Veggie: ${order.veggie || ''}`}</p>
                <p>{`Sauce: ${order.sauce || ''}`}</p>
              </li>
            ))}
          </ul>
          <h2 className="subcontainer-total"> Total Meals: {orderCount} Amount: ${totalAmount.toFixed(2)} </h2>
          {orderCount >= 5 && (
            <button
              id="subcontainer__submit-button"
              className="custon__button"
              onClick={handleOrderSubmit}
            >
              Submit Order
            </button>
          )}
        </div>
        )}
        </div>
      </div>
    )
}