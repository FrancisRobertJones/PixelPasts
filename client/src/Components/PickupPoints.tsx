import React from 'react'
import { IServicePoint } from '../models/postnord'

const PickupPoints = ({ servicePoint }: IServicePoint) => {
    return (
        <div>
            <h2>Pickup Points</h2>
            {pickupPoints.map(point => (
                <div key={point.id} style={{ border: '1px solid gray', padding: '10px', margin: '5px' }}>
                    <h3>{point.name}</h3>
                    <p>{point.address.street}, {point.address.postcode}, {point.address.city}, {point.address.country}</p>
                    <img src="/path-to-your-svg-icon.svg" alt="Parcel Icon" style={{ width: 30, height: 30 }} />
                </div>
            ))}
        </div>
    )
}

export default PickupPoints