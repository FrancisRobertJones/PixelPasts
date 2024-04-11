import { IProduct } from "./products";

interface IOrderProduct {
    description: string,
    quantity: number
}

export interface IOrders {
    id: string,
    products: IOrderProduct[],
    totalCost: number,
    customerName: string,
    email: string,
}