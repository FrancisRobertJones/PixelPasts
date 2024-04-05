import express from "express";
import dotenv from 'dotenv'
import { stripeRouter } from "./routes/stripe";
import cors from 'cors'
import { authRouter } from "./routes/auth";
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use("/payments", stripeRouter)
app.use("/accounts", authRouter)


app.listen(3000, () => {
    console.log("server is up and running on 3000")
})