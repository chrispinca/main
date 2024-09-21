import { useState } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
