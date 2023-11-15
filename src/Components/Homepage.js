// HomeComponent.js
import { useNavigate } from 'react-router-dom';
import './homepage.css';

export default function Home () {
  const navigate = useNavigate();
  const routeToLeanPrep = () => {
    navigate('/leanform');
  };

  const routeToBulkPrep = () => {
    navigate('/bulkform');
  };

  return (
    <div className='home-wrapper'>
      <h1>Welcome to our meal prepping service!</h1>
      <h2>Let us help you reach your goals!</h2>

      <div className='meal-box'>
        <div className='meal-description'>
          <h3>Lean Meals</h3>
          <p>Description of Lean Meals criteria goes here.</p>
        </div>
        <button onClick={routeToLeanPrep}>Lean Meals</button>
      </div>

      <div className='meal-box'>
        <div className='meal-description'>
          <h3>Bulk Meals</h3>
          <p>Description of Bulk Meals criteria goes here.</p>
        </div>
        <button onClick={routeToBulkPrep}>Bulk Meals</button>
      </div>
    </div>
  );
};

