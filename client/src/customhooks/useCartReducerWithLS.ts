import { Dispatch, useEffect, useReducer } from "react"
import { CartActionType, CartReducer, ICartAction } from "../reducers/cartReducer"
import { ICartItem } from "../models/products";



export const useCartReducerWithLS = (): [ICartItem[], Dispatch<ICartAction>] => {
    const initialiseCart = () => {
        const lsCart = localStorage.getItem("cart");
        if (lsCart) {
            return JSON.parse(lsCart);
        } else {
            return [];
        }
    };

    const [cartItems, dispatchCart] = useReducer(CartReducer, [], initialiseCart)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }, [cartItems])

    return [cartItems, dispatchCart]
}