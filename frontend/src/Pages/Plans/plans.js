import { useNavigate } from 'react-router-dom';
import React from 'react';
import './plans.css';

export const Plans = () => {
  const navigate = useNavigate();
  const routeToLeanForm = () => {
    navigate('/leanform');
  };

  const routeToBulkForm = () => {
    navigate('/bulkform');
  }

  return (
    <div className='app__plans app__wrapper section__padding' id="plans">
      <div className="app__wrapper_info">
        <h1 className="app__header-h1">Lean Prep</h1>
        <h2 className='p__opensans' style={{ margin: '2rem 0', color: 'black'}}>
        Try out the new BBQ Chicken.
        </h2>
        <h2 className="p__opensans" style={{ margin: '2rem 0', color: 'black'}} >
          Starting at $9.99
        </h2>
        <p className="p__opensans" style={{ margin: '2rem 0', color: 'black'}}>
          Minimum of 5 meals per order.
        </p>
        <button className="custom__button" onClick={routeToLeanForm}>Order Now</button>
      </div>

      <div className="app__wrapper_info">
        <h1 className="app__header-h1">Bulk Prep</h1>
        <h2 className='p__opensans' style={{ margin: '2rem 0', color: 'black'}}>
          Try our the new Protein Pasta.
        </h2>
        <h2 className="p__opensans" style={{ margin: '2rem 0', color: 'black'}} >
          Starting at $12.99
        </h2>
        <p className="p__opensans" style={{ margin: '2rem 0', color: 'black'}}>
          Minimum of 5 meals per order.
        </p>
        <button className="custom__button" onClick={routeToBulkForm}>Order Now</button>
      </div>
    </div>
  );
};