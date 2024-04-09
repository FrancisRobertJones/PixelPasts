import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'

const Cart = () => {
    const { cartItems } = useContext(CartContext)

  return (
    <div>
        <h1>Your cart</h1>
        {cartItems.map((item) => (
            <div key={item.product.id}>
                <h2>{item.product.name}</h2>
                <p>{item.product.description}</p>
                <p>{item.product.default_price.unit_amount}</p>
                <p>Quantity: {item.quantity}</p>
            </div>
        ))}
    </div>
  )
}

export default Cart