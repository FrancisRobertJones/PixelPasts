import { useEffect, useState } from "react"

const Success = () => {
  const [sessionID, setSessionID] = useState("")

  useEffect(() => {

    const fetchLocalStorage = async () => {
      const sessionIDData = await localStorage.getItem("sessionID")
      if (sessionIDData) {
        const sessionIDParsed = JSON.parse(sessionIDData)
        setSessionID(sessionIDParsed)
      }
    }
    fetchLocalStorage()
  }, [])

  return (
    <div className='flex items-center justify-center h-[1200px] w-[100%] text-4xl'>GREAT SUCCESS {sessionID}</div>
  )
}

export default Success