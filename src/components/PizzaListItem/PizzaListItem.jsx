import React from 'react';
// import axios from 'axios';
import { useSelector } from "react-redux";
import '../App/App.css';


function PizzaListItem({pizza}) {

    // const pizzas = useSelector(store => store.pizzaListReducer)

//   const deleteArtist = () => {
//     axios({
//       method: 'DELETE',
//       url: `/artist/${artist.id}`
//     })
//       .then((response) => { 
//         refreshArtists() 
//       })
//       .catch((error) => {
//         console.log('error on delete: ', error)
//       })
//   };



    return (
        <div className="pizza-card">
        <p>{pizza.image_path}</p>
            <div key={pizza.id} className="pizza-container">
                <p>{pizza.name}</p>
                <p>{pizza.description}</p>
                <p>{pizza.price}</p>
                {/* toggling */}
            </div>
        </div>
    );
    }

export default PizzaListItem;
