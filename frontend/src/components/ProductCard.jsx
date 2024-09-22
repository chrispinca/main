import React from "react";

function ProductCard(props) {
    return (
        <div className="product-card">
            <img 
                className="product-image" 
                src={props.image}
                alt="Product"
            />
            <h2>{props.productName}</h2>
            <p className="product-price">${props.price}</p>
            <button className="add-to-cart">Add to Cart</button>
        </div>
    );
}

export default ProductCard;
