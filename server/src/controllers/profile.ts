import { Request, Response, NextFunction } from "express"
import { ORDER_DATA_FILE_PATH } from "../constants/orderDataFilePath";
import fs from "fs/promises"
import { Order } from "../models/orders";

const fetchOrders = async (request: Request, response: Response, next: NextFunction) => {
    const { email } = request.body

    if (!email) {
        return response.status(400).json({ error: 'Email is required' });
    }
    if (email) {
        try {
            const allOrdersJSON = await fs.readFile(ORDER_DATA_FILE_PATH, 'utf8')
            const allOrders: Order[] = JSON.parse(allOrdersJSON)
            console.log(allOrders.map((order) => order.email), email)
            const userOrders = allOrders.filter(order => order.email === email)
            console.log(userOrders)
            response.json(userOrders)
        } catch (error) {
            console.log("problem finding the users orders")
        }
    }
}


export { fetchOrders }