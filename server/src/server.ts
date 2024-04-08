import express from "express";
import dotenv from 'dotenv'
import { stripeRouter } from "./routes/stripe";
import cors from 'cors'
import { authRouter } from "./routes/auth";
import cookieSession from 'cookie-session';
import { productsRouter } from "./routes/products";

dotenv.config()

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use(cookieSession({
    secret: process.env.SESSION_SECRET,
    maxAge: 60 * 1000 * 60
}))

app.use(express.json())


app.use("/payments", stripeRouter)
app.use("/accounts", authRouter)
app.use("/products", productsRouter)


app.listen(3000, () => {
    console.log("server is up and running on 3000")
})