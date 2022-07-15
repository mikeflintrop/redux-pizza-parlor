import React from 'react';
import axios from 'axios';
import './App.css';
import PizzaList from '../PizzaList/PizzaList';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import PizzaForm from '../PizzaForm/PizzaForm';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function App() {
  const dispatch=useDispatch();
  const [totalPrice, setTotalPrice]=useState(0)
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
 
  setTotalPrice (totalPrice+=pizza.price)
  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      {/* <img src='images/pizza_photo.png' /> */}
      <p>Pizza is great.</p>
      <div>
        <ul className="nav">
          <li>
            <Link to="/">Pizzas</Link>
          </li>
          <li>
            <Link to="/customerInfo">Customer Info</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
          <Route exact path="/">
            <PizzaList />
          </Route>

          <Route exact path="/customerInfo">            
            <PizzaForm getPizzas={getPizzas}/>
          </Route>

          <Route exact path="/checkout">            
            {/* <Checkout /> */}
          </Route>
      </div>
    </div>
    </Router>
  );
}

export default App;
