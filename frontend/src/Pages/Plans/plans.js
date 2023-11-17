import { useNavigate } from 'react-router-dom';
import React from 'react';
import './plans.css';
import leanMealsImage from "../../assets/gallery01.png"
import leanMealsImage2 from "../../assets/gallery02.png"

export const Plans = () => {
  const navigate = useNavigate();
  const routeToForm = () => {
    navigate('/leanprep');
  };

  return (
    <div className='app__plans app__wrapper section__padding' id="plans">
      <div className="app__wrapper_info">
        <h1 className="app__header-h1">Lean Prep</h1>
        <p className="p__opensans" style={{ margin: '2rem 0', color: 'black'}} >
          Try out the new BBQ Chicken.
        </p>
        <button className="custom__button" onClick={routeToForm}>Order Now</button>
      </div>

      <div className="app__wrapper_info">
        <h1 className="app__header-h1">Bulk Prep</h1>
        <p className="p__opensans" style={{ margin: '2rem 0', color: 'black'}} >
          Try our the new Protein Pasta.
        </p>
        <button className="custom__button" onClick={routeToForm}>Order Now</button>
      </div>
    </div>
  );
};