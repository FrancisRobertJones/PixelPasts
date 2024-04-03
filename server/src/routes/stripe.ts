import express from 'express'

const stripeRouter = express.Router()

stripeRouter.get("/create-stripe-session", (req, res, next) => {
    res.json("hello world")
})


export { stripeRouter }