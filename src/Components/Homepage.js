import { useNavigate } from 'react-router-dom';

export default function Home () {
    const navigate = useNavigate()
    const routeToForm = () => {
        navigate('mealprep')
    }

    return (
        <div className='home-wrapper'>
            <h1>Who wants healthy yet tasty eats?</h1>
            <button onClick={routeToForm} id='mealprep' classname='form-button'>
                Login
            </button>           
        </div>
    )
}