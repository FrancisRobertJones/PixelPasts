import React, { useContext } from 'react'
import { IProduct } from '../models/products'
import { CartContext } from '../context/cartContext'
import { CartActionType } from '../reducers/cartReducer'


interface IProductCardProps {
    product: IProduct
}

const ProductCard = ({ product }: IProductCardProps) => {

    const { dispatchCart } = useContext(CartContext)


    return (
        <div key={product.id} className="card h-[90%] w-96 bg-white shadow-xl text-black mx-6">
            <figure><img src={product.images[0]} alt="Retro Gameboy" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <div className='flex space-between mt-4'>
                    <p className='align-center'>{product.default_price.unit_amount}</p>
                    <div className="card-actions">
                        <button onClick={() => dispatchCart({ type: CartActionType.ADDTOCART, payload: product })} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard