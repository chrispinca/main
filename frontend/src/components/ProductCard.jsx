import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";

function ProductCard({ id, image, productName, price }) {
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    const product = { 
        id, 
        image_url: image, 
        name: productName, 
        price 
    };

    const handleCartClick = () => {
        addToCart(product);
        navigate('/cart');
    };

    return (
        <div className="product-card">
            <Link to={`/pages/ProductDetails/${id}`}>
                <img 
                    className="product-image" 
                    src={image} 
                    alt={`Image of ${productName}`} 
                />
                <h2>{productName}</h2>
                <p className="product-price">${price}</p>
            </Link>
            <button className="add-to-cart" onClick={handleCartClick}>
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;
