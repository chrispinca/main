import React from "react"
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";

function Home() {
    return (
        <div>
            <Hero />
            <h2 className = "product-list-title">Featured Products</h2>
            <ProductList />
            
        </div>
    );
}

export default Home;