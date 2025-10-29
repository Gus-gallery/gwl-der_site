import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProductsPage from './pages/ProductsPage'
import OrderPage from './pages/OrderPage'

function App() {
  return (
    <main>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/order" element={<OrderPage />} />
      </Routes>
    </main>
  )
}

export default App