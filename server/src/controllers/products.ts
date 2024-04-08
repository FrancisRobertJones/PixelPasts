import { NextFunction, Request, Response } from "express";
import { initStripe } from "../util/stripe/initStripe"

const fetchProducts = async (request: Request, response: Response, next: NextFunction) => {
    const Stripe = initStripe()

    try {
    const products = await Stripe.products.list({
        expand: ["data.default_price"]
      });
      response.status(200).json(products)
    } catch(error){
        response.status(400).json(error)
        console.log("Error fetching products")
    }

}


export { fetchProducts }