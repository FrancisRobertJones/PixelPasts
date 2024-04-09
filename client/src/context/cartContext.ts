import { Dispatch, createContext } from "react";
import { ICartItem, IProduct } from "../models/products";
import { ICartAction } from "../reducers/cartReducer";

export interface ICartContext {
    cartItems: ICartItem[]
    dispatchCart: Dispatch<ICartAction>
}

export const CartContext = createContext<ICartContext>({
    cartItems: [],
    dispatchCart: () => {}
})