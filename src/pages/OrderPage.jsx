import React from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

const OrderPage = () => {
  return (
    <main>
        <NavBar />
        <h1 className="flex flex-row items-center justify-center mt-18 text-secondary text-base font-regular">
          Inquirys and contact by 
          <a href="https://www.instagram.com/gustavwerdelin/" target="_blank"
          rel="noopener noreferrer" className="underline hover:text-primary ease-in-out duration-300 font-semibold mr-1 ml-1">email</a> 
          or through 
          <a href="https://www.instagram.com/gustavwerdelin/" target="_blank"
          rel="noopener noreferrer" className="underline hover:text-primary ease-in-out duration-300 font-semibold ml-1">instagram</a>.
        </h1>
        <div className="productcards p-2 mt-6 transition-all ease-in-out duration-300 drop-shadow-amber-300 shadow-2xl">
          <video 
          src="/gwl-der_site/flame.MOV"
          alt="light"
          className="w-fit object-cover"
          loop muted autoPlay playsInline/>
        </div>
    </main>
  )
}

export default OrderPage