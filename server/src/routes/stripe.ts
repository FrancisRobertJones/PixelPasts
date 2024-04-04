import express from 'express'
import { connectToStripe } from '../controllers/stripe'

const stripeRouter = express.Router()

stripeRouter.get("/create-stripe-session", connectToStripe, (req, res, next) => {

})


export { stripeRouter }