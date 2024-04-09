import { Outlet } from 'react-router'
import Container from '../Components/Container'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext, IAuthContext } from '../context/authContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Auth } from '../models/auth';



const Layout = () => {
  const [auth, setAuth] = useState<IAuthContext>({
    isLoggedIn: false,
    loggedInStatus: () => {},
    logOut : () => {},
    logIn: () => {}
  })

  auth.loggedInStatus = (status: boolean) => {
    setAuth({ ...auth, isLoggedIn: status })
  }

  auth.logOut = async () => {
    try {
      const res = await axios.get("http://localhost:3000/accounts/logout", { withCredentials: true })
      console.log(res.data)
      toast.success("you have been logged out")
      auth.loggedInStatus(false)
    } catch (err) {
      console.log(err)
    }
  }

  auth.logIn = async () => {
    auth.loggedInStatus(true)
  }

  const checkAuth = async () => {
    try {
      const res = await axios.get("http://localhost:3000/accounts/auth-check", { withCredentials: true })
      if (res.data.isAuthenticated) {
        auth.loggedInStatus(true)
      } else {
        auth.loggedInStatus(false)
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
      <AuthContext.Provider value={auth}>
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