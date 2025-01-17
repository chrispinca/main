import React, { useContext } from "react";
import { CartContext } from '../CartContext';
import CheckoutButton from "./CheckoutButton";

function Cart() {

    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
    let total = 0.00;
    cartItems.forEach(item => {
        total += Number(item.price);
    });
    
    total = total.toFixed(2);

    return (
        <div className= "cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        
                        <li className = "class-item" key={item.id}>
                            <img className = "cart-image" src={"/" + item.image_url} alt = {item.name}/>
                            <span>{item.name}</span>
                            <span>${item.price}</span>
                            <span>{}</span>
                            <button onClick ={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            {
                cartItems.length > 0 && (
                    
                    <button onClick={clearCart}>Clear Cart</button>
                )
            }
            <h1>Total: {total}</h1>
            <CheckoutButton></CheckoutButton>
        </div>
    );
}

export default Cart;