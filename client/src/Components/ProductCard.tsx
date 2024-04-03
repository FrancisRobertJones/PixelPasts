import React from 'react'

const ProductCard = () => {
    const [loggedIn, setLoggedIn] = React.useState(false)

    const handleLogginStatus = () => {
        if (loggedIn) {
            
        }
    }


    return (
        <div className="card h-[90%] w-96 bg-white shadow-xl text-black mx-6">
            <figure><img src="https://archives.bulbagarden.net/media/upload/thumb/8/80/Red_EN_boxart.png/500px-Red_EN_boxart.png" alt="Retro Gameboy" /></figure>
            <div className="card-body">
                <h2 className="card-title">Retro Gameboy</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className='flex space-between mt-4'>
                    <p className='align-center'>12€</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard