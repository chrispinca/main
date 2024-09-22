import React from "react"
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import ProductList from "../components/ProductList";

function Home() {
    return (
        <div>
            <h1>Welcome to our store!</h1>
            <ProductList />
            
        </div>
    );
}

export default Home;