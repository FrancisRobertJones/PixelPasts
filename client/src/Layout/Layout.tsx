import { Outlet } from 'react-router'
import Container from '../Components/Container'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../context/authContext';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { AuthActionType, AuthReducer } from '../reducers/authReducer';
import { CartContext } from '../context/cartContext';
import { useCartReducerWithLS } from '../customhooks/useCartReducerWithLS';



const Layout = () => {
  const [isLoggedIn, dispatchAuth] = useReducer(AuthReducer, false)
  const [cartItems, dispatchCart] = useCartReducerWithLS()

  const logOut = async () => {
    try {
      const res = await axios.get("http://localhost:3000/accounts/logout", { withCredentials: true })
      console.log(res.data)
      toast.success("you have been logged out")
      dispatchAuth({ type: AuthActionType.LOGOUT, payload: false })
    } catch (err) {
      toast.error("logout failed")
      console.log(err)
    }
  }

  const checkAuth = async () => {
    try {
      const res = await axios.get("http://localhost:3000/accounts/auth-check", { withCredentials: true })
      if (res.data.isAuthenticated) {
        dispatchAuth({ type: AuthActionType.LOGIN, payload: true })
      } else {
        dispatchAuth({ type: AuthActionType.LOGOUT, payload: false })
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])


  return (
    <div className=''>
      <CartContext.Provider value={{ cartItems, dispatchCart }}>
        <AuthContext.Provider value={{ isLoggedIn, dispatchAuth, logOut }}>
          <ToastContainer />
          <Navbar />
          <Container>
            <Outlet />
          </Container>
          <Footer />
        </AuthContext.Provider>
      </CartContext.Provider>
    </div>
  )
}

export default Layout