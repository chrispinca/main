import React from "react"
import {Link}  from "react-router-dom"
import Products from "../pages/Products";

function Header() {
    return (
        <div className = "header">
            <h1>E-commerce Site</h1>
            <nav>
                <div className = "nav-links">
                    <Link to = {'/'}><h3>Home</h3></Link>
                    <Link to = {'/pages/products'}><h3>Products</h3></Link>
                    <h3>Cart</h3>
                    <h3>About Us</h3>
                </div>
                
                
            </nav>
        </div>
    );
}

export default Header;