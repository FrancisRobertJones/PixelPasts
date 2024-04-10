import { NextFunction, Request, Response } from "express"
import { initStripe } from "../util/stripe/initStripe"
import { CartItemForStripe } from "../models/productInterface"


const createCheckoutSession = async (request: Request, response: Response) => {
    const stripe = initStripe()
    const cartItems: CartItemForStripe[] = request.body
    console.log("here are the cart items we'll send to stripe!", cartItems)

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