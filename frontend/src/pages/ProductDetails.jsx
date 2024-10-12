import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const res = await fetch(`http://localhost:5000/products/${id}`);
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };
        fetchProductDetails();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>
    }

    const handleCartClick = () => {
        addToCart(product);
        navigate('/cart');
    };

    return (
        <div className = "product-details">
            <h2>{product.name}</h2>
            <img 
                className="product-details-image" 
                src={"/" + product.image_url}
                alt={`Image of ${product.name}`}
            />
            <h3>{`Price: $${product.price}`}</h3>
            <h3>{product.description}</h3>
            <button className="add-to-cart" onClick={handleCartClick}>Add to Cart</button>
        </div>
    );
}

export default ProductDetails;
