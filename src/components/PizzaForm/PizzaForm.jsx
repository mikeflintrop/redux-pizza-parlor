import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

function PizzaForm () {

    const [newCustomer, setNewCustomer] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [newCity, setNewCity] = useState('');
    const [newZip, setNewZip] = useState('');
    const [newType, setNewType] = useState('Delivery');

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_CUSTOMER',
            payload: [newCustomer, 
            newAddress, newCity, newZip, newType]
        });
    
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
                placeholder="Name"
                value={newCity}
                onChange={(event) => setNewCity(event.target.value)}
            />
            <input 
                type="text" 
                placeholder="Name"
                value={newZip}
                onChange={(event) => setNewZip(event.target.value)}
            />

            <div>
            <input 
                type="radio" 
                name="Delivery"
                value={newType}
                onChange={(event) => setNewType(event.target.value)}
            /> Delivery

            <input 
                type="radio" 
                name="Pickup" 
                value={newType}
                onChange={(event) => setNewType(event.target.value)}
            /> Pickup
            </div>

        <button type="submit">NEXT</button>
        </form>
    )
}

export default PizzaForm;