import express from 'express'
import { createCheckoutSession } from '../controllers/stripe'


const stripeRouter = express.Router()

stripeRouter.post("/create-session", createCheckoutSession)


export { stripeRouter }