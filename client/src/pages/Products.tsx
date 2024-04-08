import { useEffect, useState } from "react"
import ProductCard from "../Components/ProductCard"
import axios from "axios"
import { IProduct } from "../models/products"

const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
            const fetchProducts = async () => {
                try {
                const data = await axios.get("http://localhost:3000/products/fetch-products")
                console.log(data.data + "this is thje product data")
                setProducts(data.data)
                fetchProducts()
            } catch (error) {
                console.log(error)
            }
            }

    }, []) 

    return (
        <div className="flex flex-col">
            <h1 className="mb-12 text-white">Top sellers</h1>
            <div className="flex flex-col items-center">

                <div className="grid grid-cols-3">
                    {products.map((product) =>
                        <ProductCard
                            key={product.id}
                            images={product.images}
                            name={product.name}
                            description={product.description}
                            default_price={product.default_price}
                            id={product.id}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Products