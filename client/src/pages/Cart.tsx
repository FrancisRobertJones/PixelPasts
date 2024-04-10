import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import CheckoutProduct from '../Components/CheckoutProductCard'

const Cart = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <>
   { cartItems.length >= 1 ?
        <div className = 'grid grid-cols-3'>
      {
        cartItems.map((cartItem) => (
          <CheckoutProduct
            cartItem={cartItem}
          />
        ))
      }
    </div >   
    :
    <div className='text-3xl'>No items in cart</div>
    
  }
    </>
  ) 
}

export default Cart