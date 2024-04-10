import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import CheckoutProduct from '../Components/CheckoutProductCard'
import axios from 'axios'
import { IPaymentConfirmation } from '../models/products'

const Cart = () => {
  const { cartItems } = useContext(CartContext)

  const handleCheckout = async () => {
    const res = await axios.get("http://localhost:3000/payments/create-session")
    const stripeCheckout = res.data.url
    window.location = stripeCheckout
  }
  return (

    <div>
      {

        cartItems.length >= 1 ?
          <div className='flex flex-col items-center justify-center'>
            <div className='grid grid-cols-3'>
              {
                cartItems.map((cartItem) => (
                  <CheckoutProduct
                    cartItem={cartItem}
                  />
                ))
              }
            </div >
            <button onClick={handleCheckout} className="btn btn-outline btn-primary mx-4">Checkout</button>
          </div>
          :
          <div className='text-3xl'>No items in cart</div>

      }
    </div>
  )
}

export default Cart