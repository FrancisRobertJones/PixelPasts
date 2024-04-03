import ProductCard from "../Components/ProductCard"

const Products = () => {
    return (
        <div className="flex flex-col">
            <h1 className="mb-12 text-white">Top sellers</h1>
            <div className="flex flex-col items-center">

                <div className="grid grid-cols-3">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}

export default Products