import React from "react";
import { Link } from "react-router-dom"


function ProductCard(props) {
    console.log("Product Image URL:", props.image); // Check image URL
    return (
        <div className="product-card">
            <Link to = {`/pages/ProductDetails/${props.id}`}>
                <img 
                    className="product-image" 
                    src={props.image}
                    alt="Product"
                />
                <h2>{props.productName}</h2>
                <p className="product-price">${props.price}</p>
            </Link>
            <button className="add-to-cart">Add to Cart</button>
        </div>
    );
}

export default ProductCard;
