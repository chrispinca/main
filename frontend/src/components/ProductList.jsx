import ProductCard from "./ProductCard";
import React, {useState, useEffect} from "react";

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('http://localhost:5000/products');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="product-list-container">
            <div className = "product-list">
                {products.map(product => (
                    <ProductCard 
                        key = {product.id}
                        image = {product.image_url}
                        productName = {product.name}
                        price = {product.price}
                        id = {product.id}
                    />
                ))}
            </div>
        </div>
    )

}

export default ProductList;