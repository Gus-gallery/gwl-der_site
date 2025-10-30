import React from 'react'
import NavBar from '../components/NavBar'
import OrderButton from '../components/OrderButton'
import { Link } from 'react-router-dom'

const OrderPage = () => {
  return (
    <main>
        <NavBar />
        <h1 className="flex flex-row items-center justify-center mt-30 text-secondary text-base font-regular">
          Inquirys and contact by email or through <a href="https://www.instagram.com/gustavwerdelin/" target="_blank"
          rel="noopener noreferrer" className="underline hover:text-primary ease-in-out duration-300 font-semibold ml-1">instagram</a>.
        </h1>
        <OrderButton />
        <div>

        </div>
    </main>
  )
}

export default OrderPage