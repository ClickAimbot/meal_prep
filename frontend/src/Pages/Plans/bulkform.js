import React from 'react';
import './form.css';

export const Bulkform = (props) => {
    const { submit, errors, change } = props;
    const { protein, carb, veggie, sauce} = props.values
    
    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return (
        <div className="container" id="prep-form">
            {errors.protein ? <p>{errors.protein}</p> : null}
            {errors.carb ? <p>{errors.carb}</p> : null}
            {errors.veggie ? <p>{errors.veggie}</p> : null}
            {errors.sauce ? <p>{errors.sauce}</p> : null}
            <form onSubmit={onSubmit}>
                <label htmlFor='protein-select'>
                    <h3>Choice of Protein</h3>
                    <p>Required</p>
                    <select name='protein' id='protein-dropdown' onChange={onChange}>
                        <option value="">--Please Choose an Option--</option>
                        <option value={protein}>Chicken</option>
                        <option value={protein}>Lean Ground Beef</option>
                        <option value={protein}>Salmon</option>
                    </select>
                </label>
                <label htmlFor='carb-select'>
                    <h3>Choice of Carb</h3>
                    <p>Required</p>
                    <select name='carb' id='carb-dropdown' onChange={onChange}>
                        <option value="">--Please Choose an Option--</option>
                        <option value={carb}>White Rice</option>
                        <option value={carb}>Brown Rice</option>
                        <option value={carb}>Potatoes</option>
                        <option value={carb}>Sweet Potatoes</option>
                    </select>
                </label>
                <label htmlFor='veggie-select'>
                    <h3>Choice of Veggie</h3>
                    <p>Required</p>
                    <select name='veggie' id='veggie-dropdown' onChange={onChange}>
                        <option value="">--Please Choose an Option--</option>
                        <option value={veggie}>Broccoli</option>
                        <option value={veggie}>Onions & Bell Peppers</option>
                        <option value={veggie}>Potatoes</option>
                        <option value={veggie}>Sweet Potatoes</option>
                    </select>
                </label>
                <label htmlFor='sauce-select'>
                    <h3>Choice of Sauce</h3>
                    <p>Optional</p>
                    <select name='sauce' id='sauce-dropdown' onChange={onChange}>
                        <option value="">--Please Choose an Option--</option>
                        <option value={sauce}>BBQ</option>
                        <option value={sauce}>Coming soon..</option>
                        <option value={sauce}></option>
                        <option value={sauce}></option>
                    </select>
                </label>
                <label id="special-text"> 
                    <h3>Special Instructions</h3>
                    <input 
                        id='container-special'
                        placeholder="Anything else you'd like to add?"
                        type='text'
                        name="special"
                        onChange={onChange}
                    />
                </label>
                <footer>
                    <label> 
                        <h3>Ready to eat?</h3>
                        <input 
                            id="order-button"
                            type="submit"
                            value="Add to order"
                        />
                    </label>
                </footer>
            </form>
        </div>
    )
}