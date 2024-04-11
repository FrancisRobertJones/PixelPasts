import { useEffect, useState } from "react"
import ProductCard from "../Components/ProductCard"
import axios from "axios"
import { IProduct, IProductRes } from "../models/products"
import { Link } from "react-router-dom"

const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get<IProductRes>("http://localhost:3000/products/fetch-products")
                setProducts(response.data.data)
                console.log("im fetching products through backend", products)
            } catch (error) {
                console.log("failed to fetch products" + error)
            }
        }
        fetchProducts()
    }, [])


  

    return (
        <div className="flex flex-col">
            <h1 className="mb-12 text-white">Top sellers</h1>
            <div className="flex flex-col items-center">
                 <div className="grid grid-cols-3">
                    {products.map((product) =>
                        <ProductCard
                            product={product}
                        />
                    )}
                </div> 
                <Link to="/cart"><button className="btn btn-outline btn-primary mx-4">Cart</button></Link>

            </div>
        </div>
    )
}

export default Products