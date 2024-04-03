import express from "express";
import http from 'http';
import dotenv from 'dotenv'
import { json } from "body-parser";
import { stripeRouter } from "./routes/stripe";
import { connectToStripe } from "./controllers/stripe";
import cors from 'cors'

dotenv.config()

const app = express()
const stripeRoute = 

app.use(express.json())
app.use(cors)

app.use("/payments", stripeRouter, connectToStripe)


app.listen(3000, () => {
    console.log("server is up and running on 3000")
})