import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux
import logger from 'redux-logger';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

// Reducer Pizza List
const pizzaListReducer = (state = [], action) => {
  console.log('Reducer pizzalist: ', action);

  switch (action.type) {
    case 'SET_PIZZA_LIST':
      console.log('You clicked SET_PIZZA_LIST', action.payload);
      return action.payload;

    default:
      return state;
  }
};

// Customer Reducer
const customerTableReducer = (state = [], action) => {
  console.log('Customer Table reducer: ', action);

  switch (action.type) {
    case 'ADD_CUSTOMER':
      console.log('You clicked ADD_CUSTOMER', action.payload);
      // state.push(action.payload); -- wrong
      // spread operator allows new array to be passed with action.payload
      return action.payload;

    default:
      // if action.type is anything else, return last value of state
      return state;
  }
};
// const [updateCart, setUpdateCart]=useState(true)
let totalCost = 0;
let cartItems = [];
let itemsCount;
// Reducer pizzas in the cart
// {totalCost: 0, cartItems: [], itemsCount: 0}
const cartReducer = (state = [], action) => {
  console.log('Reducer cart', action);

  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('You clicked ADD_TO_CART', action.payload);

      return [...state, action.payload];
    // totalCost: (totalCost += Number(action.payload.price)),


    case 'DELETE_FROM_CART':
      console.log('You clicked DELETE_FROM_CART', action.payload);
      const pizzaSelected = (pizza) => {
        pizza.id !== payload.id;
        const updateCart = cartItems.filter(pizzaSelected);
      };
      return {
        totalCost: (totalCost -= Number(action.payload.price)),
        cartItems: updateCart,
      };

    case 'CLEAR_CART':
      console.log('You clicked checkout CLEAR_CART', action.payload);
      return action.payload;

    default:
      return state;
  }
};

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
  combineReducers({
    pizzaListReducer,
    cartReducer,
    customerTableReducer,
  }),
  applyMiddleware(logger)
);

// Wrap our App in a Provider, this makes Redux available in
// our entire application
ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
