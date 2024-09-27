import React from "react";
import {useParams} from "react-router-dom"

function ProductDetails() {

    
    return (
        <div>
            <img src = {props.image}></img>
            <h2>{props.name}</h2>
            <h3>{props.price}</h3>
            <h3>{props.description}</h3>
        </div>
    );
}

export default ProductDetails