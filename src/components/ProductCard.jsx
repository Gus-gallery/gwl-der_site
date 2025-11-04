import React from 'react'

const products = [
    {
        id: 1,
        name: "Daily Wallet",
        description: "Handstitched cardholder, perfect for daily errands.",
        price: "550 DKK.",
        image: "/gwl-der_site/products/single.png"
    },
    {
      id: 2,
      name: "Folded Daily Wallet",
      description: "Handstitched with french thread, made in italian leather.",
      price: "650 DKK.",
      image: "/gwl-der_site/products/double.png"
    },
    {
      id: 3,
      name: "Classic Leather Belt",
      description: "Thick italian cow leather with brass buckle.",
      price: "500 DKK.",
      image: "/gwl-der_site/products/belt.png"
    },
    {
      id: 4,
      name: "Closed Wallet",
      description: "Ialian leather wallet with brass button closure.",
      price: "700 DKK.",
      image: "/gwl-der_site/products/fold.png"
    },
    {
        id: 5,
        name: "Shoulder Clutch",
        description: "Tumbled leather, french thread and brass hardware.",
        price: "1900 DKK.",
        image: "/gwl-der_site/products/clutch.png"
    }
]


const ProductCard = ({ product }) => (
    <div className="productcards 
    transition-all duration-300 ease-in-out
      hover:shadow-xl hover:-translate-y-1">
        <img 
            src={product.image}
            alt={product.name}
            className="p-4 w-fit h-auto object-cover"
        />
        <div className="p-4 flex flex-col justify-between">
            <h3 className="text-primary font-semibold text-lg mb-2 -mt-4">
                {product.name}
            </h3>
            <p className="text-secondary text-base font-regular">
                {product.description}
            </p>
            <p className="text-primary mt-4 font-regular text-base">
                {product.price}
            </p>
        </div>
    </div>
)

const ProductCarousel = () => {
    return (
        <div className="overflow-x-auto py-6 scroll-smooth pl-10">
            <div className="container flex flex-col md:flex-row flex-nowrap gap-10">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
                <div className="w-1 shrink-0" aria-hidden="true" />
            </div>
        </div>
    )
}

export default ProductCarousel
