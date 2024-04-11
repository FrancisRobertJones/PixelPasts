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
import { AuthState } from '../models/auth';



const Layout = () => {
  const [authedUser, dispatchAuth] = useReducer(AuthReducer, new AuthState(false, null))
  const [cartItems, dispatchCart] = useCartReducerWithLS()

  const logOut = async () => {
    try {
      const res = await axios.get("http://localhost:3000/accounts/logout", { withCredentials: true })
      console.log(res.data)
      toast.success("you have been logged out")
      dispatchAuth({ type: AuthActionType.LOGOUT, payload: { isAuthenticated: false, user: null } })
    } catch (err) {
      toast.error("logout failed")
      console.log(err)
    }
  }

  const checkAuth = async () => {
    try {
      const res = await axios.get("http://localhost:3000/accounts/auth-check", { withCredentials: true })
      if (res.data.isAuthenticated) {
        const userData = res.data
        console.log(userData, "this is the userdata")
        dispatchAuth({ type: AuthActionType.LOGIN, payload: userData })
        console.log(res.data, "this is the auth data from rendering")
      } else {
        dispatchAuth({ type: AuthActionType.LOGOUT, payload: { isAuthenticated: false, user: null } })
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
        <AuthContext.Provider value={{ dispatchAuth, logOut, authedUser, checkAuth }}>
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