import { Outlet } from 'react-router'
import Container from '../Components/Container'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Layout = () => {
  return (
    <div className=''>
      <ToastContainer />
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  )
}

export default Layout