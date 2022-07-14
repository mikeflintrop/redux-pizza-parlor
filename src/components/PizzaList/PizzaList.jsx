import React from 'react';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import{useSelector} from 'react-redux'

function PizzaList() {

  const  pizzas= useSelector(store=> store.pizzaListReducer)

  return (
    <div>
      <ul>
        {pizzas.map((pizza) => {
          return (<PizzaListItem key={pizza.id} pizza={pizza}/>)
        })}
      </ul>
    </div>
  );
}

export default PizzaList;
