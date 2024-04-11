import React, { useContext } from 'react'
import { IProduct } from '../models/products'
import { CartContext } from '../context/cartContext'
import { CartActionType } from '../reducers/cartReducer'
import { toast } from 'react-toastify'


interface IProductCardProps {
    product: IProduct
}

const ProductCard = ({ product }: IProductCardProps) => {

    const { dispatchCart } = useContext(CartContext)

    const addToCart = (name: string) => {
        toast.success(`${name} added to cart`)
        dispatchCart({ type: CartActionType.ADDTOCART, payload: product })
    }


    return (
        <div key={product.id} className="card h-[90%] w-96 bg-white shadow-xl text-black mx-6">
            <figure><img src={product.images[0]} alt="Retro Gameboy" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <div className='flex space-between mt-4'>
                    <p className='align-center'>{product.default_price.unit_amount / 100 } SEK</p>
                    <div className="card-actions">
                        <button onClick={() => addToCart(product.name)} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard