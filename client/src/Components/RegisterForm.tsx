import { User } from "../models/user"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

interface IRegisterProps {
    handleToggleRegister: () => void
}

const Register = ({ handleToggleRegister }: IRegisterProps) => {

    const [user, setUser] = useState(new User("", "", "", { city: "", country: "", line1: "", postal_code: "", state: "" }))
    const [passwords, setPasswords] = useState({ password1: "", password2: "", passwordsMatch: false, passwordLengthWarning: false })
    const navigate = useNavigate()


    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value })
    }

    const comparePasswords = () => {
        if (passwords.password1.length < 8) {
            setPasswords({ ...passwords, passwordLengthWarning: true })
        } else {
            setPasswords({ ...passwords, passwordLengthWarning: false })
        }

        if (passwords.password1 === passwords.password2) {
            setPasswords({ ...passwords, passwordsMatch: true })
        } else {
            setPasswords({ ...passwords, passwordsMatch: false })
        }
    }

    useEffect(() => {
        comparePasswords()
    }, [passwords.password1, passwords.password2])


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (passwords.passwordsMatch && !passwords.passwordLengthWarning) {
            const newUser = { ...user, password: passwords.password1 }
            try {
                axios.post("http://localhost:3000/accounts/create-user", newUser)
                console.log("user created successfully" + newUser)
                navigate("/")
                toast.success("Account created successfully")
                
            } catch (error) {
                console.log("problem creating user" + error)
            }
        } else {
            alert("Passwords do not match")
        }
    }



    return (
        <section className="bg-gray-50 w-[1200px] md:p-12 sm:p-0">
            <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                <img className="w-24 h-24 mr-2" src="../../public/PPlogo.png" alt="logo" />
                Pixel Pasts
            </a>
            <div className="w-[80%] bg-white rounded-lg shadow p-12 mx-auto">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-6">
                    Account creation
                </h1>
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-4" action="#">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input onChange={handleChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <input onChange={handleChange} type="password" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Maximus Decimus Meridius" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input onChange={handlePasswordChange} type="password" name="password1" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" /> {passwords.passwordLengthWarning && <span>Passwords must be longer than 8 characters</span>} {!passwords.passwordsMatch && <span>Passwords must match</span>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                        <input onChange={handlePasswordChange} type="text" name="password2" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700" />{!passwords.passwordsMatch && <span>Passwords must match</span>}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Country</label>
                        <input onChange={handleChange} type="text" name="Country" id="Country" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Country" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                        <input onChange={handleChange} type="text" name="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="123 Bob street" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">County/Region</label>
                        <input onChange={handleChange} type="text" name="county" id="county" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Yorkshire" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Post Code</label>
                        <input onChange={handleChange} type="number" name="postcode" id="postcode" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="111 11" required />
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label className="font-bold text-gray-800">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                        </div>
                    </div>

                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register</button>
                    <div className="flex items-center">
                        <p className="text-sm font-bold text-gray-800 dark:text-gray-400">
                            Already have an account? <span onClick={handleToggleRegister} className="font-medium text-primary-600 hover:underline dark:text-primary-500">login here</span>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Register