import { Address } from "./userClass";

interface IOrderData {
    orderUser: IOrderUser,
    orderItems: IOrderItems[]
}

interface IOrderUser {
    ID: string,
    email: string,
    name: string,
    password: string,
    address: Address
}
interface IOrderItems {
    quantity: number,
    default_price: string
}


export {
    IOrderData, IOrderUser, IOrderItems
}