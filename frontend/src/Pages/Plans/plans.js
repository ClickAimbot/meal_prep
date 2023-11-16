import { useNavigate } from 'react-router-dom';
import './plans.css';
import leanMealsImage from "../../Images/IMG_0365.jpg"
import leanMealsImage2 from "../../Images/IMG_0366.jpg"

export const Plans = () => {
  const navigate = useNavigate();
  const routeToLeanPrep = () => {
    navigate('/leanprep');
  };

  const routeToBulkPrep = () => {
    navigate('/bulkprep');
  };

  return (
    <div className='plans-wrapper'>
      <h1>Welcome to our meal prepping service!</h1>
      <h2>Fresh made meals ready to go for an entire week.</h2>
      <h3>Choose from our two options below.</h3>

      <div className='meal-box'>
      <img src={leanMealsImage} alt="Lean Meals" className="meal-image" />
        <div className='meal-description'> 
          <h3>Lean Meals</h3>
          <p>Lean Meals consist of the following:</p>
          <p>4oz of Protein</p>
          <p>Half Cup Carbs</p>
          <p>Half Cup Veggies</p>
        </div>
        <button onClick={routeToLeanPrep}>Order Now</button>
      </div>

      <div className='meal-box'>
      <img src={leanMealsImage2} alt="Bulk Meals" className="meal-image" />
        <div className='meal-description'>
          <h3>Bulk Meals</h3>
          <p>Bulk Meals consist of the following:</p>
          <p>6oz of Protein</p>
          <p>1 Cup Carbs</p>
          <p>1 Cup Veggies</p>
        </div>
        <button onClick={routeToBulkPrep}>Order Now</button>
      </div>
    </div>
  );
};