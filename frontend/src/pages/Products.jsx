import React from "react"
import {useParams} from "react-router-dom"
import ProductList from "../components/ProductList";

function Products() {
    return (
        <div>
            <h2 className = "product-list-title">All Products</h2>
            <ProductList></ProductList>
        </div>
    );
}

export default Products;