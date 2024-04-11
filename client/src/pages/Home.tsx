import { Link } from 'react-router-dom'
import '../App.css'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

function Home() {
  const { authedUser, logOut } = useContext(AuthContext)
  return (
    <>
      <div className='flex flex-col justify-center items-center pb-24'>
        <img className='w-[70%]' src="../public/PPlogo.png" alt="pixelpastslogo" />
        <div className='flex'>
          <Link to="./products"><button className="btn btn-outline btn-primary mx-4">Visit our store</button></Link>
          {authedUser.loggedIn ?
            <button className="btn btn-outline btn-primary mx-4" onClick={logOut}>Logout</button>
            :
            <Link to="./auth"><button className="btn btn-outline btn-primary mx-4">Login/Register</button></Link>
          }
        </div>
      </div>
    </>
  )
}

export default Home
