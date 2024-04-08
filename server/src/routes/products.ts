import express, { NextFunction } from 'express'
import { fetchProducts } from '../controllers/products'

const productsRouter = express.Router()

productsRouter.get("/fetch-products", fetchProducts)

export { productsRouter }

