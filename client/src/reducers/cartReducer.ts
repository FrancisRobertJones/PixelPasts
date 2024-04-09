import { CartProduct, ICartItem, IProduct } from "../models/products"

export interface ICartAction {
    type: CartActionType,
    payload: IProduct
}

export enum CartActionType {
    ADDTOCART,
    REMOVEFROMCART,
    EMPTYCART
}

export const CartReducer = (cartItems: ICartItem[], action: ICartAction) => {
    if (action.type === CartActionType.ADDTOCART) {
        const clonedCart = [...cartItems]

        const itemThatsAlreadyAdded = clonedCart.find((item) => item.product.id === action.payload.id)
        if (itemThatsAlreadyAdded) {
            itemThatsAlreadyAdded.quantity++
        } else {
            clonedCart.push(new CartProduct(1, action.payload))
        }
        return clonedCart
    }
        return cartItems;
}