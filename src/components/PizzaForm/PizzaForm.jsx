import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
function PizzaForm ({getPizzas}) {

    const [newCustomer, setNewCustomer] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [newCity, setNewCity] = useState('');
    const [newZip, setNewZip] = useState('');
    const [newType, setNewType] = useState('Delivery');
    const [newTotal, setNewTotal] = useState('Delivery');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
//add request
//should be in the checkout
        axios({
            method: 'POST',
            url: `/api/order`,
            data: 
                customerOrder
            
        })
        .then((response) => { 
            // Dispatch to the redux store
            dispatch({
                type: 'ADD_CUSTOMER',
                payload: [{
                    customer_name: newCustomer,
                    street_address: newAddress,
                    city: newCity,
                    zip: newZip,
                    type: newType,
                    total: newTotal,  
                }]
                [{}]
                // type: 'ADD_TO_CART', 
                // payload: `${pizza.id, pizza.price}`
                })
            // Next navigate to the checkout page
            // something like: history.push('/checkout')
            // Once you hit the checkout button, THEN YOU CAN POST ALL THE THINGS TO THE DATABASE

            console.log('here is the response.data', response.data)
            // getPizzas() 
        })
        .catch((error) => {
            console.log('error on adding to cart: ', error)
        })
    
        setNewCustomer('');
        setNewAddress('');
        setNewCity('');
        setNewZip('');
        setNewType('');
        // ('input').val('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Name"
                value={newCustomer}
                onChange={(event) => setNewCustomer(event.target.value)}
            />
            <input 
                type="text" 
                placeholder="Street Address"
                value={newAddress}
                onChange={(event) => setNewAddress(event.target.value)}
            />
            <input 
                type="text" 
                placeholder="City"
                value={newCity}
                onChange={(event) => setNewCity(event.target.value)}
            />
            <input 
                type="text" 
                placeholder="Zipcode"
                value={newZip}
                onChange={(event) => setNewZip(event.target.value)}
            />

            <div>
            <input 
                type="radio" 
                name="type"
                value={newType}
                checked="checked"
                onChange={(event) => setNewType(event.target.value)}
            /> Delivery

            <input 
                type="radio" 
                name="type" 
                value={newType}
                onChange={(event) => setNewType(event.target.value)}
            /> Pickup
            </div>

        <button type="submit">NEXT</button>
        </form>
    )
}

export default PizzaForm;