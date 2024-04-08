import { Outlet } from 'react-router'
import Container from '../Components/Container'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../context/authContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Auth } from '../models/auth';



const Layout = () => {
  /* const [auth, setAuth] = useState(new Auth(false, () => {}, () => {})) */
  const [loggedIn, setLoggedIn] = useState(false)

  const checkAuth = async () => {
    try {
      const res = await axios.get("http://localhost:3000/accounts/auth-check", { withCredentials: true })
      if (res.data.isAuthenticated) {
        setLoggedIn(true)
      }
      console.log(res.data.isAuthenticated, res.data.user)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <div className=''>
{/*       <AuthContext.Provider value={}>
 */}        <ToastContainer />
        <Navbar />
        <Container>
          <Outlet />
        </Container>
        <Footer />
{/*       </AuthContext.Provider>
 */}    </div>
  )
}

export default Layout