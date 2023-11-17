import React from 'react';
import './form.css';

export const Leanform = (props) => {
    const { submit, errors, change } = props;
    const { protein, carb, veggie, sauce} = props.values
    
    const onChange = (e) => {
        const {name, value } = e.target;
        change(name, value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return (
        <form className='app__form section__padding' id="form" onSubmit={onSubmit}>
            <div className="app__wrapper_info">
            <h2 className='p__opensans' style={{color: 'black'}} >Choice of Protein</h2>
                <label htmlFor='protein-select'>
                    <select name='protein'  id='protein-dropdown' onChange={onChange}>
                        <option value="">--Please Choose an Option--</option>
                        <option value={protein}>Chicken</option>
                        <option value={protein}>Lean Ground Beef</option>
                        <option value={protein}>Salmon</option>
                    </select>
                </label>  
                <h2 className='p__opensans' style={{color: 'black'}} >Choice of Carb</h2>
                <label htmlFor='carb-select'>
                    <select name='carb' id='carb-dropdown' onChange={onChange}>
                        <option value="">--Please Choose an Option--</option>
                        <option value={carb}>White Rice</option>
                        <option value={carb}>Brown Rice</option>
                        <option value={carb}>Potatoes</option>
                        <option value={carb}>Sweet Potatoes</option>
                    </select>
                </label>  
                <h2 className='p__opensans' style={{color: 'black'}} >Choice of Vegetable</h2>
                <label htmlFor='veggie-select' >
                    <select name='veggie' id='veggie-dropdown' onChange={onChange}>
                        <option value="">--Please Choose an Option--</option>
                        <option value={veggie}>Broccoli</option>
                        <option value={veggie}>Onions & Bell Peppers</option>
                        <option value={veggie}>Potatoes</option>
                        <option value={veggie}>Sweet Potatoes</option>
                    </select>
                </label>
                <h2 className='p__opensans' style={{color: 'black'}} >Choice of Sauce</h2>
                <label htmlFor='sauce-select'> 
                    <p>Optional</p>
                    <select name='sauce' id='sauce-dropdown' onChange={onChange}>
                        <option value="">--Please Choose an Option--</option>
                        <option value={sauce}>BBQ</option>
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
    )
}