import { useContext, useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/authContext"
import { CartContext } from "../context/cartContext"
import { CartActionType } from "../reducers/cartReducer"

const Success = () => {
  const { checkAuth, authedUser } = useContext(AuthContext)
  const { dispatchCart } = useContext(CartContext)

  useEffect(() => {
    const updateAuthStatus = async () => {
      try {
        await checkAuth();
      } catch (error) {
        console.error("Error checking auth status:", error);

      }
    };

    const emptyCart = () => {
      dispatchCart({ type: CartActionType.EMPTYCART, payload: null })
    }
    emptyCart()
    updateAuthStatus();

  }, [])


  return (
    <>
      <div className='flex items-center flex-col mt-24 h-[1000px] w-[100%] text-4xl'>
        <h1>GREAT SUCCESS </h1>

        <a href="/profile"><button className="btn btn-outline btn-primary mx-4">Profile & confirmed orders</button></a></div>


    </>
  )
}

export default Success