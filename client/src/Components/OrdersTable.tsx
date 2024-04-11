import { IOrders } from '../models/Orders';

interface IOrderTableProps {
    orders: IOrders[]
}

const OrdersTable = ({ orders }: IOrderTableProps) => {
    return (
        <div className="flex flex-col items-center mt-8 text-black">
            {orders.map((order, index) => (
                <div key={index} className="p-6 max-w-4xl w-full bg-white shadow-md rounded-lg mb-6">
                    <h2 className="text-lg font-semibold">Order ID: {order.id}</h2>
                    <div>Email: {order.email}</div>
                    <div>Customer Name: {order.customerName}</div>
                    <div className="mt-4">
                        <table className="min-w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-left">
                                    <th className="px-4 py-2">Product</th>
                                    <th className="px-4 py-2">Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.products.map((product, productIndex) => (
                                    <tr key={productIndex} className="border-b">
                                        <td className="px-4 py-2">{product.description}</td>
                                        <td className="px-4 py-2">{product.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 font-semibold">Total Cost: {order.totalCost}</div>
                </div>
            ))}
        </div>
    );
}

export default OrdersTable