import { NextFunction, Request, Response } from "express"
import { initStripe } from "../util/stripe/initStripe"


const createCheckoutSession = async (request: Request, response: Response) => {
    const stripe = initStripe()

    const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: [{
            price: 'price_1P3N3ZRpeYHWrPIgp1PSrP0n',
            quantity: 2
        }
        ],
        customer_email: "theemailgoeshere@gmail.com",
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost.5173"
    })

    response.status(200).json({ url: session.url })
}



export { createCheckoutSession }