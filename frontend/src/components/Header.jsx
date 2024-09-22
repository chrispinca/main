import React from "react"
import {Link}  from "react-router-dom"

function Header() {
    return (
        <div className = "header">
            <h1>E-commerce Site</h1>
            <nav>
                <div className = "nav-links">
                    <h3>Home</h3>
                    <h3>Cart</h3>
                </div>
                
                
            </nav>
        </div>
    );
}

export default Header;