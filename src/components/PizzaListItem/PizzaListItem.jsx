import React from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";

import {useDispatch} from "react-redux"
import {useState} from 'react'

import '../App/App.css';



function PizzaListItem({pizza}) {

    const [addPizza, setAddPizza]=useState(true)

    const dispatch=useDispatch();

    const entirePizza = useSelector(store => store.pizzaListReducer)

//add request
    const addPizzaItem = () => {
        axios({
          method: 'POST',
          url: `/api/order`
        })
          .then((response) => { 
            dispatch({
                type: 'ADD_TO_CART', 
                payload: `${pizza.id, pizza.price}`
              })
              console.log('here is the response.data', response.data)
            getPizzas() 
          })
          .catch((error) => {
            console.log('error on adding to cart: ', error)
          })
      };

      //delete request
  const deletePizzaItem = (id) => {
    setAddPizza(!addPizza);
    axios({
      method: 'DELETE',
      url: `/api/order`
    })
      .then((response) => { 
        dispatch({
            type: 'DELETE_FROM_CART', 
            payload: response.data
          })
        getPizzas() 
        
      })
      .catch((error) => {
        console.log('error on delete: ', error)
      })
  };
// const handleToggle=()=>{
//     setAddPizza(!addPizza);
// }


    return (
        <div key={pizza.id} className="pizzas">
            <p>{pizza.name}</p>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            <p>{pizza.image_path}</p>
        {/* toggling */}
    <div>
        {addPizza ?
        <button onClick={addPizzaItem}>Add to Cart</button>
        :
        <button onClick={deletePizzaItem}>Delete from Cart</button>
        }
    </div>

        </div>
    );
    }

export default PizzaListItem;
