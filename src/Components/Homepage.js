import { useNavigate } from 'react-router-dom';
import './homepage.css';

export default function Home () {
    const navigate = useNavigate()
    const routeToLeanPrep = () => {
        navigate('/leanprep')
    }
    const routeToBulkPrep = () => {
        navigate('/bulkprep')
    }

    return (
        <div className='home-wrapper'>
            <h1>Welcome to our meal prepping service!</h1>
            <h2>Let us help you reach your goals!</h2>
            <button onClick={routeToLeanPrep}>Lean Meals</button>
            <button onClick={routeToBulkPrep}>Bulk Meals</button>         
        </div>
    )
}