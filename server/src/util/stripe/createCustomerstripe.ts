import { Address } from "../../models/userClass"
import { initStripe } from "./initStripe"

const createNewStripeCustomer = async (name: string, email: string, address: Address) => {
    try {
        const Stripe = initStripe()
        const customer = await Stripe?.customers.create({
            name: name,
            email: email,
            address: address
        })
        console.log("this is the newly created stripe customer " + customer.name + customer.email)
        return customer.id

    } catch (error) {
        console.log("problem creating stripe customer", error)
        return null
    }
}

export { createNewStripeCustomer }