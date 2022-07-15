import React from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";

import {useDispatch} from "react-redux"
import {useState} from 'react'

import '../App/App.css';



function PizzaListItem({pizza}) {

    const [addPizza, setAddPizza]=useState(true)
    const dispatch=useDispatch();

    // const pizza = useSelector(store => store.pizzaListReducer)
    const handleAddPizza=(id)=>{
        itemToggleClick()
      
    dispatch({
        type: 'ADD_TO_CART', 
        payload: pizza
      })
  }

  const handleDeletePizza=(id)=>{
    itemToggleClick()
dispatch({
    type: 'DELETE_FROM_CART', 
    payload: pizza
  })
}


  // toggle between photo and description
  const itemToggleClick=()=>{
  
  //toggle the add/delete
  setAddPizza(!addPizza)
  console.log('You clicked the button!', addPizza)}

    return (
        <div key={pizza.id} className="pizzas">
            <p>{pizza.name}</p>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            <p>{pizza.image_path}</p>
        {/* toggling */}
    <div>
        {addPizza ?
        <button onClick={handleAddPizza}>Add to Cart</button>
        :
        <button onClick={handleDeletePizza}>Delete from Cart</button>
        }
    </div>

        </div>
    );
    }

export default PizzaListItem;
