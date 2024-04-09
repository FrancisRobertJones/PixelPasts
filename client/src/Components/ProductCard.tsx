import React from 'react'
import { IProduct } from '../models/products'

const ProductCard = ({ images, name, description, default_price, id}: IProduct) => {
    const [loggedIn, setLoggedIn] = React.useState(false)

    const handleLogginStatus = () => {
        if (loggedIn) {

        }
    }
    return (
        <div key={id} className="card h-[90%] w-96 bg-white shadow-xl text-black mx-6">
            <figure><img src={images[0]} alt="Retro Gameboy" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className='flex space-between mt-4'>
                    <p className='align-center'>{default_price.unit_amount}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard