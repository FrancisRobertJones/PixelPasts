import { Outlet } from 'react-router'
import Container from '../Components/Container'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Layout = () => {
  return (
    <div className=''>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  )
}

export default Layout