import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

function CheckoutButton() {
    const { cartItems } = useContext(CartContext);

    const handleCheckout = async () => {
        try {
            const res = await fetch('http://localhost:5000/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }, // Corrected headers format
                body: JSON.stringify({ cartItems }), // Body included within the fetch options
            });

            if (!res.ok) {
                throw new Error('Failed to create checkout session');
            }

            const { url } = await res.json();
            window.location.href = url; // Redirect to Stripe's checkout page
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    return <button onClick={handleCheckout}>Checkout</button>;
}

export default CheckoutButton;
