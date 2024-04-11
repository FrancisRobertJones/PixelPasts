import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/cartContext'
import CheckoutProduct from '../Components/CheckoutProductCard'
import axios from 'axios'
import { CartItemForStripe } from '../models/products'
import { AuthContext } from '../context/authContext'
import { OrderData } from '../models/user'

const Cart = () => {
  const { cartItems } = useContext(CartContext)
  const [cartItemsForStripe, setCartItemsForStripe] = useState<CartItemForStripe[]>()
  const [orderData, setOrderData] = useState<OrderData>(new OrderData(null, null))

  const { authedUser } = useContext(AuthContext)


  useEffect(() => {
    const updatedCartItemsForStripe = cartItems.map(cartItem =>
      new CartItemForStripe(cartItem.quantity, cartItem.product.default_price.id)
    );
  
    if (authedUser && updatedCartItemsForStripe.length > 0) {
      setOrderData(new OrderData(authedUser.User, updatedCartItemsForStripe));
    }
  }, [cartItems, authedUser]);




  const handleCheckout = async () => {
    try {
      const res = await axios.post("http://localhost:3000/payments/create-session", orderData)
      const stripeCheckout = res.data.url
      localStorage.setItem("sessionID", JSON.stringify(res.data.sessionID))
      window.location = stripeCheckout
    } catch (error) {
      console.log("issues submitting orderdata", error)
    }

  }


  useEffect(() => {
    console.log(orderData)
  }, [orderData])

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