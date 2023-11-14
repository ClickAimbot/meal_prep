import React from 'react';
import './form.css';

const Prepform = (props) => {
    const { submit, errors, change } = props;
    const { substitute, veggie, carb} = props.values
    
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
            <form onSubmit={onSubmit}>
                <label for='protein-select'>
                    <h3>Choice of Protein</h3>
                    <p>Required</p>
                    <select name='protein' id='protein-dropdown' onChange={onChange}>
                        <option value="">--Please Choose an Option--</option>
                        <option value="chicken">Chicken</option>
                        <option value="beef">Lean Ground Beef</option>
                        <option value="fish">Salmon</option>
                    </select>
                </label>
                <label> 
                    <h3>Choice of Carb</h3>
                    <p>Required</p>
                    <input type="radio" name="carb1" value={carb} onChange={onChange} />
                    <label>White Rice</label>
                    <input type="radio" name="carb2" value={carb} onChange={onChange} />
                    <label>Brown Rice</label>
                    <input type="radio" name="carb3" value={carb} onChange={onChange} />
                    <label>Potatoes</label>
                    <input type="radio" name="carb4" value={carb} onChange={onChange} />
                    <label>Sweet Potatoes</label>
                </label>
                <label>
                    <h3>Choice of Veggies</h3>
                    <p>Optional</p>
                    <input type="checkbox" name='veggie1' value='Pepperoni' checked={veggie} onChange={onChange} />
                    <label>Pepperoni</label> 
                    <input type="checkbox" name='veggie2' value='Chicken' checked={veggie} onChange={onChange} />
                    <label>Chicken</label>
                    <input type="checkbox" name='veggie3' value='Bacon' checked={veggie} onChange={onChange} />
                    <label>Bacon</label>
                    <input type="checkbox" name='veggie4' value='Onions' checked={veggie} onChange={onChange} />
                    <label>Onions</label>
                    <input type="checkbox" name="veggie5" value='BellPeppers' checked={veggie} onChange={onChange} />
                    <label>BellPeppers</label>
                </label>
                <label for='sauce-select'>
                    <h3>Choice of Added Sauce</h3>
                    <p>Optional</p>
                    <select name='sauce' id='sauce-dropdown' onChange={onChange}>
                        <option value="">--Please Choose an Option--</option>
                        <option value="small">Lowcal BBQ</option>
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

export default Prepform;