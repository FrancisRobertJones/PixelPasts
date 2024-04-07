import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserCredentials } from '../models/user'
import { toast } from 'react-toastify'


interface ILoginProps {
    handleToggleRegister: () => void
}

const Login = ({handleToggleRegister}: ILoginProps) => {
    const [userCredentails, setUserCredentials] = useState(new UserCredentials("", ""))
    const navigate = useNavigate()



    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
        const res = await axios.post("http://localhost:3000/accounts/login", userCredentails)
        if(res.status === 200) {
            navigate("/")
            toast.success("You have been logged in!")

        }} catch(error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 401) {
                    toast.error("User or password incorrect");
                } else {
                    toast.error("An error occurred");
                }
            }}
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserCredentials({...userCredentails, [e.target.name]: e.target.value})
    }


    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center px-6 mx-auto py-12">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    <img className="w-24 h-24 mr-2" src="../../public/PPlogo.png" alt="logo" />
                    Pixel Pasts
                </a>
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Welcome back
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input onChange={handleChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="youremail@email.com" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                            </div>

                           <button onClick={handleLogin} type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                            <p className="text-sm font-bold text-gray-800 dark:text-gray-400">
                                Don't have an account? <span onClick={handleToggleRegister} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</span>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login