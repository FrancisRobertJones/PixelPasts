import express from 'express'
import { fetchOrders } from '../controllers/profile'

const profileRouter = express.Router()

profileRouter.post("/fetch-orders", fetchOrders)

export {profileRouter}