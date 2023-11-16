import React, { useState } from 'react';
import './form.css';

export const Leanform = (props) => {
    const { submit, errors, change } = props;
    const initialFormState = {
        protein: '',
        carb: '',
        veggie: '',
        sauce: '',
    };

    const [formValues, setFormValues] = useState(initialFormState);
    
    const onChange = (e) => {
        const {name, value } = e.target;
        setFormValues({...formValues, [name]: value});
        change(name, value)
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
                        <option value={formValues.protein}>Chicken</option>
                        <option value={formValues.protein}>Lean Ground Beef</option>
                        <option value={formValues.protein}>Salmon</option>
                    </select>
                </label>
                <label htmlFor='carb-select'>
                    <h3>Choice of Carb</h3>
                    <p>Required</p>
                    <select name='carb' id='carb-dropdown' onChange={onChange}>
                        <option value="">--Please Choose an Option--</option>
                        <option value={formValues.carb}>White Rice</option>
                        <option value={formValues.carb}>Brown Rice</option>
                        <option value={formValues.carb}>Potatoes</option>
                        <option value={formValues.carb}>Sweet Potatoes</option>
                    </select>
                </label>
                <label htmlFor='veggie-select'>
                    <h3>Choice of Veggie</h3>
                    <p>Required</p>
                    <select name='veggie' id='veggie-dropdown' onChange={onChange}>
                        <option value="">--Please Choose an Option--</option>
                        <option value={formValues.veggie}>Broccoli</option>
                        <option value={formValues.veggie}>Onions & Bell Peppers</option>
                        <option value={formValues.veggie}>Potatoes</option>
                        <option value={formValues.veggie}>Sweet Potatoes</option>
                    </select>
                </label>
                <label htmlFor='sauce-select'>
                    <h3>Choice of Sauce</h3>
                    <p>Optional</p>
                    <select name='sauce' id='sauce-dropdown' onChange={onChange}>
                        <option value="">--Please Choose an Option--</option>
                        <option value={formValues.sauce}>BBQ</option>

                    </select>
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

export default Leanform;