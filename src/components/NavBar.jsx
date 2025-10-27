import React from 'react'

const NavBar = () => {

    const label = ["Products", "Order"];

  return (
    <header>
        <nav className="container mx-auto flex items-center justify-between mt-5 2xl:px-0 relative z-10">
            <h2 className="text-lg text-primary font-regular">gw.læder</h2>

            <ul className="flex items-center text-regular text-base gap-12">
                {label.map((label) => (
                    <li key={label}>
                        <a href={label}
                        className="hidden md:block text-primary opacity-60 font-regular cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out" 
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>

        </nav>
    </header>
  )
}

export default NavBar