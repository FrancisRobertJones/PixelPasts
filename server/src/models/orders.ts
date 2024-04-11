import { Address } from "./userClass";

interface IOrderData {
    UserData: IUserData,
    cartItemsForStripe: ICartItemsForStripe[]
}

interface IUserData {
    ID: string,
    email: string,
    name: string,
    password: string,
    address: Address
}

interface ICartItemsForStripe {
    quantity: number,
    default_price: string
}

class OrderProduct {
    constructor(
        public productId: string,
        public description: string,
        public quantity: number | null
    ){}
}

class User {
    constructor(
        public productId: string,
        public description: string,
    ){}
}

class Order {
    constructor(
        public id: string,
        public email: string,
        public customerName: string,
        public products: OrderProduct[], 
        public totalCost: number
    ){}
}


export { IOrderData, IUserData, ICartItemsForStripe, Order, OrderProduct }