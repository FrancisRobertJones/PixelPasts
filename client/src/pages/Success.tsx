import { useContext, useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/authContext"

const Success = () => {
  const [sessionID, setSessionID] = useState("")
  const { checkAuth } = useContext(AuthContext)

  useEffect(() => {
    const fetchLocalStorage = async () => {
      const sessionIDData = await localStorage.getItem("sessionID")
      if (sessionIDData) {
        const sessionIDParsed = JSON.parse(sessionIDData)
        setSessionID(sessionIDParsed)
      }
    }

    const updateAuthStatus = async () => {
      try {
        await checkAuth();
      } catch (error) {
        console.error("Error checking auth status:", error);

      }
    };
    fetchLocalStorage()
    updateAuthStatus();

  }, [])


  return (
    <>
      <div className='flex items-center flex-col justify-center h-[1200px] w-[100%] text-4xl'>
        <h1>GREAT SUCCESS</h1>

        <Link to="/profile"><button className="btn btn-outline btn-primary mx-4">Profile & confirmed orders</button></Link></div>


    </>
  )
}

export default Success