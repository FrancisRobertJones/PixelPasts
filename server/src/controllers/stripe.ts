import { NextFunction, Request, Response } from "express"
import { initStripe } from "../util/stripe/initStripe"
import { IOrderData, IOrderItems, IOrderUser } from "../models/orders"


const createCheckoutSession = async (request: Request, response: Response) => {
    const stripe = initStripe()
    const orderData: IOrderData = request.body
    const cartItems: IOrderItems[] = orderData.orderItems
    const userData: IOrderUser = orderData.orderUser


    console.log("here are the cart items we'll send to stripe!", cartItems, "and here is the user", userData)

    const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: cartItems.map((item) => ({
            price: item.default_price,
            quantity: item.quantity
        })),
        customer_email: "theemailgoeshere@gmail.com",
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost.5173"
    })

    response.status(200).json({ url: session.url, sessionID: session.id })
}



export { createCheckoutSession }