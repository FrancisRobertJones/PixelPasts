import { NextFunction, Request, Response } from "express";
import { stripeRouter } from "../routes/stripe";
import { initStripe } from "../util/stripe/initStripe";
import { Order, OrderProduct } from "../models/orders";
import fs from 'fs/promises'
import path from 'path';
import { ORDER_DATA_FILE_PATH } from "../constants/orderDataFilePath";



const confirmationWebhook = (request: Request, response: Response, next: NextFunction) => {
    const endpointSecret = process.env.ENDPOINT_SECRET

    const stripe = initStripe();
    const signature = request.headers['stripe-signature'];
    if (!signature) {
        console.error('Webhook signature missing.');
        return response.status(400).send('Webhook Error: Missing signature');
    }
    let event;
    if (!endpointSecret) return response.status(400).send('Webhook Error: Missing secret')
    try { event = stripe.webhooks.constructEvent(request.body, signature, endpointSecret) }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Webhook signature verification failed.`, error.message);
            return response.status(400).send(`Webhook Error: ${error.message}`);
        }
    }
    if (event) {
        if (event.type === 'checkout.session.completed') {
            const checkoutSessionCompleted = async () => {
                const session = event.data.object;
                const lineItems = await stripe.checkout.sessions.listLineItems(session.id)
                const OrderItems = lineItems.data.map((item) => new OrderProduct(item.id, item.description, item.quantity))
                const newOrder = new Order(session.id, session.customer_details.name, OrderItems, Number(session.amount_total) / 100)

                try {
                    const updatedOrdersJSON = await fs.readFile(ORDER_DATA_FILE_PATH, 'utf8')
                    const updatedOrders = JSON.parse(updatedOrdersJSON)
                    updatedOrders.push(newOrder)
                    await fs.writeFile(ORDER_DATA_FILE_PATH, JSON.stringify(updatedOrders, null, 2))
                } catch (error) { console.log("error updating orders" + error) }
                console.log(`Payment succeeded with session ID ${session.id}`);
            }
            checkoutSessionCompleted()
        } else {
            console.log(`Webhook received unhandled event type: ${event.type}`);
        }
    }
    response.json({ received: true });
}

export { confirmationWebhook }
