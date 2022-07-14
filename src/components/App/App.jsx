import React from 'react';
import axios from 'axios';
import './App.css';
import PizzaList from '../PizzaList/PizzaList';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import PizzaForm from '../PizzaForm/PizzaForm';


function App() {
  const dispatch=useDispatch();

  useEffect(() => {

    getPizzas();

  }, [] );
  
  const getPizzas = () => {
      axios({
      method: 'GET',
      url: '/api/pizza'
    })
      .then((response) => {
        // response.data is the array of pizzas
        console.log(response.data);
        dispatch({
          type: 'SET_PIZZA_LIST', 
          payload: response.data
        })
      })
      .catch((error) => {
        console.log('error on GET', error);
      });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      {/* <img src='images/pizza_photo.png' /> */}
      <p>Pizza is great.</p>
      <div>
        <PizzaForm getPizzas={getPizzas}/>
        <PizzaList />
      </div>
    </div>
  );
}

export default App;
