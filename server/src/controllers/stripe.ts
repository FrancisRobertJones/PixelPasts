import { NextFunction, Request, Response } from "express"
import { initStripe } from "../util/stripe/initStripe"
import { ICartItemsForStripe, IOrderData, IUserData,  } from "../models/orders"


const createCheckoutSession = async (request: Request, response: Response) => {
    const stripe = initStripe()
    console.log(request.body)
    const orderData: IOrderData = request.body
    const cartItems: ICartItemsForStripe[] = orderData.cartItemsForStripe
    const userData: IUserData = orderData.UserData


    console.log("here are the cart items we'll send to stripe!", cartItems, "and here is the user", userData)

    const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: cartItems.map((item) => ({
            price: item.default_price,
            quantity: item.quantity
        })),
        customer: userData.ID,
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost.5173",
        allow_promotion_codes: true
    })

    response.status(200).json({ url: session.url, sessionID: session.id }) 
}



export { createCheckoutSession }