import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import { CartContext } from "../context/cartContext"
import { Link } from "react-router-dom"

const Navbar = () => {

  const { authedUser, logOut } = useContext(AuthContext)
  const { cartItems } = useContext(CartContext)

  return (
    <div className="navbar bg-neutral">
      <div className="flex-1">
        <a href="/"><img src="../../public/PPlogo.png" className="w-[70px] ml-6"></img></a>
      </div>
      {authedUser.loggedIn && <h1 className="text-white text-xl">Welcome back, {authedUser.User?.name}</h1>}
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span className="text-white badge badge-sm indicator-item"> {cartItems.length}</span>
            </div>
          </div>
          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-neutral shadow text-white">
            <div className="card-body">
              <span className="font-bold text-lg"> {cartItems.length} Items</span>
              <span className="text-white">Subtotal: $999</span>
              <div className="card-actions">
                <Link to={"/cart"} ><button className="btn btn-primary btn-block">View cart</button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="ProfilePic" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52">
            <li>
              <a href="/profile" className="justify-between text-white">
                Profile & Past orders
              </a>
            </li>
            <li onClick={logOut}><a className="text-white">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar