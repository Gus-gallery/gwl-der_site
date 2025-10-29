import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import ProductCarousel from '../components/ProductCard'

const ProductsPage = () => {
  return (
    <main>
        <NavBar />
        <div className="flex items-center justify-center text-secondary font-regular text-base mt-6">
          All orders by
          <Link 
            to="/orders"
            className="text-secondary underline hover:text-primary transition-colors ml-1"
          >
            inquiry
          </Link>.
        </div>
        <ProductCarousel />
    </main>
  )
}

export default ProductsPage