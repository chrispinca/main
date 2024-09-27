import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

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

    return (
        <div>
            <img 
                className="product-details-image" 
                src={"/" + product.image_url}
                alt={`Image of ${product.name}`}
            />
            <h2>{product.name}</h2>
            <h3>{`Price: $${product.price}`}</h3>
            <h3>{product.description}</h3>
        </div>
    );
}

export default ProductDetails;
