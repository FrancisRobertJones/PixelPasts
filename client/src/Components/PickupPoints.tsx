import React from 'react'
import { IServicePoint } from '../models/postnord'

interface IServicePointCardProps {
    point: IServicePoint
}

const ServicePointCard = ({ point }: IServicePointCardProps) => {
    return (
        <div>
            <h2 className='text-black mt-8'>Pickup Point {point.name}</h2>
            <div key={point.servicePointId} className='p-4 m-2 text-black border border-black"'>
                <p className='mt-2'>{point.visitingAddress.streetName}, {point.visitingAddress.postalCode}, {point.visitingAddress.city}, {point.visitingAddress.countryCode}</p>
                <button className='text-white mt-6'>Choose</button>
            </div>
        </div>
    )
}

export default ServicePointCard