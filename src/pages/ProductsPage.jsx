import React from 'react'
import NavBar from '../components/NavBar'
import ProductCard from '../components/ProductCard'
import ProductCarousel from '../components/ProductCard'

const ProductsPage = () => {
  return (
    <main>
        <NavBar />
        <div className="flex items-center justify-center text-secondary font-regular text-base mt-6">
          All orders by inquiry.
        </div>
        <ProductCarousel />
    </main>
  )
}

export default ProductsPage