import React from 'react';
import './form.css';

const Prepform = (props) => {
    const { submit, errors, change } = props;
    const { username, substitute, topping, sauce} = props.values
    
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
                <p>{errors.username}</p>
                <label> Name
                    <input id="name-input"
                        placeholder="Input Name Here!"
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChange}
                    />
                </label>
                <label for='size-select'>
                    <h3>Choice of Size</h3>
                    <p>Required</p>
                    <select name='size' id='size-dropdown' onChange={onChange}>
                        <option value="">--Please Choose an Option--</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
                <label> 
                    <h3>Choice of Sauce</h3>
                    <input type="radio" name="Sauce" value={sauce} onChange={onChange} />
                    <label>Red Sauce</label>
                    <input type="radio" name="Sauce" value={sauce} onChange={onChange} />
                    <label>Pesto Sauce</label>
                    <input type="radio" name="Sauce" value={sauce} onChange={onChange} />
                    <label>Garlic Red Sauce</label>
                </label>
                <label>
                    <h3>Toppings</h3>
                    <input type="checkbox" name='topping1' value='Pepperoni' checked={topping} onChange={onChange} />
                    <label>Pepperoni</label> 
                    <input type="checkbox" name='topping2' value='Chicken' checked={topping} onChange={onChange} />
                    <label>Chicken</label>
                    <input type="checkbox" name='topping3' value='Bacon' checked={topping} onChange={onChange} />
                    <label>Bacon</label>
                    <input type="checkbox" name='topping4' value='Onions' checked={topping} onChange={onChange} />
                    <label>Onions</label>
                    <input type="checkbox" name="topping5" value='BellPeppers' checked={topping} onChange={onChange} />
                    <label>BellPeppers</label>
                </label>
                <label>
                    <h3>Choice of Substitute</h3>
                    <input 
                        type='radio'
                        name='substitute'
                        value={substitute}
                        onChange={onChange}
                    />
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