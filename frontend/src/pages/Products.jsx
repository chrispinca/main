import React from "react"
import {useParams} from "react-router-dom"
import ProductList from "../components/ProductList";
import ProductCard from "../components/ProductCard";

function Products() {
    return (
        <div>
            <h2 className = "product-list-title">All Products</h2>
            <ProductList />
        </div>
    );
}

export default Products;