import React from 'react';
// import axios from 'axios';
import { useSelector } from "react-redux";

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
        <div key={pizza.id} className="pizzas">
            <p>{pizza.name}</p>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            <p>{pizza.image_path}</p>
        {/* toggling */}
        </div>
    );
    }

export default PizzaListItem;
