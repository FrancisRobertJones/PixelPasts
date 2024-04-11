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


export {
    IOrderData, IUserData, ICartItemsForStripe
}