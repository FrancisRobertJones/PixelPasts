import React, { useContext } from 'react'
import { IServicePoint, ServicePointSelected } from '../models/postnord'
import axios from 'axios'
import { AuthContext } from '../context/authContext'
import { toast } from 'react-toastify'

interface IServicePointCardProps {
    point: IServicePoint,
    toggleSerivePointVisibility: () => void
}


const ServicePointCard = ({ point, toggleSerivePointVisibility }: IServicePointCardProps) => {

    const { authedUser } = useContext(AuthContext)

    const handleServicePointSelection = async (point: IServicePoint) => {
        if (authedUser.User?.email) {
            console.log("this is the email we're sending", authedUser.User.email)
            const selectedServicePoint = new ServicePointSelected(authedUser.User.email, point.name, point.servicePointId, point.visitingAddress)
            try {
                const res = await axios.post("http://localhost:3000/accounts/servicepoint", selectedServicePoint)
                console.log(res.data)
                toast.success("Your service point selection has been udpated!")
                toggleSerivePointVisibility()
            } catch (error) {
                console.log("error in service point selection handling", error)
            }
        }

    }


    return (
        <div>
            <h2 className='text-black mt-8'>Pickup Point {point.name}</h2>
            <div key={point.servicePointId} className='p-4 m-2 text-black border border-black"'>
                <p className='mt-2'>{point.visitingAddress.streetName}, {point.visitingAddress.postalCode}, {point.visitingAddress.city}, {point.visitingAddress.countryCode}</p>
                <button onClick={() => handleServicePointSelection(point)} className='text-white mt-6'>Choose</button>
            </div>
        </div>
    )
}

export default ServicePointCard