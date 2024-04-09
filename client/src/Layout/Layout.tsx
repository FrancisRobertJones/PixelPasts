import { Outlet } from 'react-router'
import Container from '../Components/Container'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext, IAuthContext } from '../context/authContext';
import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { ActionType, AuthReducer } from '../reducers/authReducer';



const Layout = () => {
const [isLoggedIn, dispatch] = useReducer(AuthReducer, false)

  const logOut = async () => {
    try {
      const res = await axios.get("http://localhost:3000/accounts/logout", { withCredentials: true })
      console.log(res.data)
      toast.success("you have been logged out")
      dispatch({ type: ActionType.LOGOUT, payload: false})
    } catch (err) {
      toast.error("logout failed")
      console.log(err)
    }
  }
  
  const checkAuth = async () => {
    try {
      const res = await axios.get("http://localhost:3000/accounts/auth-check", { withCredentials: true })
      if (res.data.isAuthenticated) {
        dispatch({ type: ActionType.LOGIN, payload: true})
      } else {
        dispatch({ type: ActionType.LOGOUT, payload: false})
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
      <AuthContext.Provider value={{ isLoggedIn, dispatch, logOut }}>
        <ToastContainer />
        <Navbar />
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </AuthContext.Provider>
    </div>
  )
}

export default Layout