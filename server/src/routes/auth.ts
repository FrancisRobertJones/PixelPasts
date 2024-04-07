import express, { Request, Response, NextFunction } from "express";
import { createUser, login } from "../controllers/auth";

const authRouter = express.Router()


authRouter.post("/create-user", createUser, (request: Request, res: Response, next: NextFunction) => {
    console.log("create-user endpoint hit")
})

authRouter.post("/login", login, (request: Request, res: Response, next: NextFunction) => {
    console.log("login-user endpoint hit")
})

export { authRouter }