import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/authContext"
import axios from "axios"
import { IOrders } from "../models/Orders"
import OrdersTable from "../Components/OrdersTable"
import { POSTNORD_APIKEY, POSTNORD_BASEURL } from "../constants/postnord"
import { IPostNordRes } from "../models/postnord"

const Profile = () => {

    const { authedUser, logOut } = useContext(AuthContext)
    const [orders, setOrders] = useState<IOrders[]>()

    useEffect(() => {
        if (authedUser.User?.email) {

            const fetchOrders = async () => {
                try {
                    const res = await axios.post("http://localhost:3000/profile/fetch-orders", { email: authedUser.User?.email })
                    const orders: IOrders[] = res.data
                    setOrders(orders)
                } catch (error) {
                    console.log(error, "error fetching orders")
                }
            }

            fetchOrders()

        } else {
            console.log("user not fetched yet")
        }
    }, [authedUser.User?.email])


    return (
        <section className="bg-gray-50 w-[1200px] p-12">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-24 h-24 mr-2" src="../../public/PPlogo.png" alt="logo" />
                Profile information
            </a>
            <div className='grid lg:grid-cols-2 md:grid-cols-1'>
                <div className='m-6'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" name="FirstName" id="FirstName" disabled className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder={authedUser.User?.name} />
                </div>
                <div className='m-6'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input type="email" name="Email" id="Email" disabled className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder={authedUser.User?.email} />
                </div>
                <div className='m-6'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Country</label>
                    <input type="text" name="Country" id="Country" disabled className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder={authedUser.User?.address.country} />
                </div>
                <div className='m-6'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">State</label>
                    <input type="text" name="county" id="county" disabled className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder={authedUser.User?.address.state} required />
                </div>
                <div className='m-6'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                    <input type="text" name="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" disabled placeholder={authedUser.User?.address.line1} />
                </div>
                <div className='m-6'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Post Code</label>
                    <input type="number " name="postcode" id="postcode" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" disabled placeholder={authedUser.User?.address.postal_code} />
                </div>
            </div>
            <section>
                <h1 className="text-2xl text-black">Your orders:</h1>
                {orders &&
                    <OrdersTable orders={orders} />}
            </section>
        </section>
    )
}

export default Profile