import React from "react"

function ProductCard() {
    return (
        <div className = "product-card">
            <img src = "https://cb2.scene7.com/is/image/CB2/071124_ViewAll_LivingRoom_Chairs_Filter?wid=520&qlt=75"></img>
            <h2>Product Name</h2>
            <p className = "product-price">$10.99</p>
            <button className = "add-to-cart">Add to Cart</button>
        </div>
    );
}

export default ProductCard;