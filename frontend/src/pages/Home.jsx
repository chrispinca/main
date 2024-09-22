import React from "react"
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

function Home() {
    return (
        <div>
            <ProductCard image = "https://cb2.scene7.com/is/image/CB2/071124_ViewAll_LivingRoom_Chairs_Filter?wid=520&qlt=75" productName = "Cushy Chair" price = "10.99"></ProductCard>
        </div>
    );
}

export default Home;