import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {

    const label = ["Products", "Order"];

  return (
    <header className="sticky">
        <nav className="container mx-auto flex flex-wrap items-center px-4 lg:px-0 justify-between mt-5">
            <Link to="/" className="text-lg text-primary font-regular">
                gw.læder
            </Link>

            <ul className="flex flex-wrap md:flex-row justify-end items-center gap-6 lg:gap-12 font-regular text-base">
                {label.map((label) => (
                    <li key={label}>
                        <Link to={'/'+label.toLowerCase()}
                        className="text-primary opacity-60 cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out" 
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default NavBar