import express from "express";
import dotenv from 'dotenv'
import { stripeRouter } from "./routes/stripe";
import cors from 'cors'
import { authRouter } from "./routes/auth";
import cookieSession from 'cookie-session';
import { productsRouter } from "./routes/products";
import { webHookRouter } from "./routes/confirmationwebhook";
import { profileRouter } from "./routes/profile";

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

app.use("/payments", express.json(), stripeRouter)
app.use("/accounts", express.json(), authRouter)
app.use("/products", express.json(),  productsRouter)
app.use("/verify", express.raw(), webHookRouter)
app.use("/profile", express.json(), profileRouter)


app.listen(3000, () => {
    console.log("server is up and running on 3000")
})