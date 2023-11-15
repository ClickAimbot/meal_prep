import { useNavigate } from 'react-router-dom';
import './homepage.css';

export default function Home () {
  const navigate = useNavigate();
  const routeToLeanPrep = () => {
    navigate('/leanprep');
  };

  const routeToBulkPrep = () => {
    navigate('/bulkprep');
  };

  return (
    <div className='home-wrapper'>
      <h1>Welcome to our meal prepping service!</h1>
      <h2>Let us help you reach your goals!</h2>

      <div className='meal-box'>
        <div className='meal-description'>
          <h3>Lean Meals</h3>
          <p>Lean Meals consist of the following:</p>
          <p>4oz of Protein</p>
          <p>Half Cup Carbs</p>
          <p>Half Cup Veggies</p>
        </div>
        <button onClick={routeToLeanPrep}>$9.99</button>
      </div>

      <div className='meal-box'>
        <div className='meal-description'>
          <h3>Bulk Meals</h3>
          <p>Bulk Meals consist of the following:</p>
          <p>6oz of Protein</p>
          <p>1 Cup Carbs</p>
          <p>1 Cup Veggies</p>
        </div>
        <button onClick={routeToBulkPrep}>$12.99</button>
      </div>
    </div>
  );
};

