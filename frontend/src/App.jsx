import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import './App.css'
import CartPage from './pages/CartPage';
import { CartProvider } from './CartContext';

function App() {

  return (
    <CartProvider>
      <Router>
        <>
          <Header />
          <Routes>
            <Route path = "/" element={<Home />}/>
            <Route path = "pages/ProductDetails/:id" element={<ProductDetails />} />
            <Route path = "/Products/" element={<Products />} />
            <Route path ="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </>
      </Router>
    </CartProvider>
  )
}

export default App;
