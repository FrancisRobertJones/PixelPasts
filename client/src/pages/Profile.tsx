import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/authContext"
import axios from "axios"
import { IOrders } from "../models/Orders"
import OrdersTable from "../Components/OrdersTable"
import { POSTNORD_APIKEY, POSTNORD_BASEURL } from "../constants/postnord"
import { IPostNordRes, IServicePoint } from "../models/postnord"
import ServicePointCard from "../Components/PickupPoints"
import { nativeSelectClasses } from "@mui/material"

const Profile = () => {

    const { authedUser, logOut } = useContext(AuthContext)
    const [orders, setOrders] = useState<IOrders[]>()
    const [servicePointsState, setServicePointsState] = useState<IServicePoint[]>([])
    const [showOrders, setToggleShowOrders] = useState(false)
    const [showServicePoints, setShowServicePoints] = useState(false)

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


    const toggleSerivePointVisibility = () => {
        setShowServicePoints(prev => !prev)
    }


    const fetchPostNordStälle = async () => {
        const postCode = authedUser.User?.address.postal_code
        const country = authedUser.User?.address.country

        let countryCode = ""
        switch (country?.toLowerCase()) {
            case 'sweden': countryCode = "SE";
                break;
            case 'norway': countryCode = "NO";
                break;
            case 'finland': countryCode = "FI";
                break;
            case 'denmark': countryCode = "DK";
                break;
        }

        try {
            const res = await axios.get<IPostNordRes>(`${POSTNORD_BASEURL}countryCode=${countryCode}&postalCode=${postCode}&numberOfServicePoints=5&apikey=${POSTNORD_APIKEY}`)
            setServicePointsState(res.data.servicePointInformationResponse.servicePoints)
            toggleSerivePointVisibility()

        } catch (error) {
            console.log("there has been a problem retrieving postnord", error)
        }
    }


    useEffect(() => {
        console.log("here is the service point state in a use effect", servicePointsState)

    }, [servicePointsState])


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
            <button onClick={() => fetchPostNordStälle()} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Choose or update a pickup Point</button>


            <section>

                {servicePointsState.length > 1 && showServicePoints && <h1 className="text-2xl text-black mt-8">Choose a pickup location:</h1>}
                {servicePointsState.length > 1 && showServicePoints &&
                    servicePointsState.map((point) => {
                        return <ServicePointCard key={point.servicePointId} point={point} toggleSerivePointVisibility={toggleSerivePointVisibility} />
                    })
                }
                <button onClick={() => setToggleShowOrders((prev) => !prev)} className="my-4 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">{showOrders ? "Hide orders" : "Show orders"}</button>

                {(orders && orders.length<1 && showOrders) && <h1 className="text-2xl text-black mt-8">No orders to show</h1>}
                {(orders && orders.length>1 && showOrders) && <h1 className="text-2xl text-black mt-8">Your orders:</h1>}
                {(orders && showOrders) &&
                    <OrdersTable orders={orders} />}
            </section>
        </section>
    )
}

export default Profile