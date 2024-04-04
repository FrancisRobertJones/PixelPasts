import express from "express";
import dotenv from 'dotenv'
import { stripeRouter } from "./routes/stripe";
import cors from 'cors'
import { userRouter } from "./routes/users";

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use("/payments", stripeRouter)
app.use("/accounts", userRouter)


app.listen(3000, () => {
    console.log("server is up and running on 3000")
})