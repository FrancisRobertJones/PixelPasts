import express from 'express'
import { confirmationWebhook } from '../controllers/confirmationWebhook'

const webHookRouter = express.Router()

webHookRouter.post("/confirmationwebhook", express.raw({type: 'application/json'}), confirmationWebhook)

export { webHookRouter }