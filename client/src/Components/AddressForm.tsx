import React from 'react'

const AddressForm = () => {
    return (
        <section className="bg-gray-50 w-[1200px] p-24 mx-12">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                <img className="w-24 h-24 mr-2" src="../../public/PPlogo.png" alt="logo" />
                Pixel Pasts
            </a>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 m-12'>
                <div className='m-6'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                    <input type="text" name="FirstName" id="FirstName" disabled className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="First Name" />
                </div>
                <div className='m-6'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                    <input type="text" name="LastName" id="LastName" disabled className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Last Name" />
                </div>
                <div className='m-6'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input type="email" name="Email" id="Email" disabled className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Email" />
                </div>
                <div className='m-6'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Country</label>
                    <input type="text" name="Country" id="Country" disabled className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Country" />
                </div>
                <div className='m-6'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                    <input type="text" name="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" disabled placeholder="123 Bob street" />
                </div>
                <div className='m-6'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Post Code</label>
                    <input type="number " name="postcode" id="postcode" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" disabled placeholder="111 11" />
                </div>
                <button type="submit" className="w-[50%] ml-12 mt-12 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update Address</button>

            </div>
            <section>
                <h1 className='text-black text-2xl mt-12'>Past purchases</h1>
                <h4>You have no past purchases</h4>
            </section>
        </section>
    )
}

export default AddressForm