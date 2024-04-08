import axios from "axios"
import { toast } from "react-toastify"

const logOut = async () => {
    const res = await axios.get("http://localhost:3000/accounts/logout", { withCredentials: true })
    console.log(res.data)
    toast.success("you have been logged out")
}


export { logOut }