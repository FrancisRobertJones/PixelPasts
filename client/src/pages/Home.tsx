import { Link } from 'react-router-dom'
import '../App.css'

function Home() {
  return (
    <>
      <div className='flex flex-col justify-center items-center pb-24'>
        <img className='w-[70%]' src="../public/PPlogo.png" alt="pixelpastslogo" />
        <div className='flex'>
          <Link to="./products"><button className="btn btn-outline btn-primary mx-4">Visit our store</button></Link>
          <Link to="./auth"><button className="btn btn-outline btn-primary mx-4">Login/Register</button></Link>
        </div>
      </div>
    </>
  )
}

export default Home
