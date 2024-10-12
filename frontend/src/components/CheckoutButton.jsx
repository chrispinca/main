import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

function CheckoutButton() {
    const { cartItems } = useContext(CartContext);

    const handleCheckout = async () => {
        console.log('Sending cart items:', JSON.stringify({ cartItems }, null, 2)); // Debug log

        try {
            const res = await fetch('http://localhost:5000/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ cartItems }), // Ensure quantity is included
            });

            if (!res.ok) {
                throw new Error('Failed to create checkout session');
            }

            const { url } = await res.json();
            window.location.href = url; // Redirect to Stripe checkout page
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    return <button onClick={handleCheckout}>Checkout</button>;
}

export default CheckoutButton;
