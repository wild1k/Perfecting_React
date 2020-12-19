import React from "react";

export default function Products(props) {
    


    return(
     <div>
         <p>Product Name: {props.prodArray.name}</p>
        <p>Price: {props.prodArray.price}</p>
     </div>


    )
}