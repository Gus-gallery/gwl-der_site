import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {

    const label = ["Products", "Order"];

  return (
    <header className="sticky">
        <nav className="container mx-auto flex items-center justify-between mt-5">
            <Link to="/" className="text-lg text-primary font-regular">
                gw.læder
            </Link>

            <ul className="flex flex-col md:flex-row items-center font-regular gap-12 text-base">
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