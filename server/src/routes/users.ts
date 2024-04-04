import express, { Request, Response, NextFunction } from "express";
import { createUser } from "../controllers/users";

const userRouter = express.Router()


userRouter.post("/create-user", createUser, (request: Request, res: Response, next: NextFunction) => {
    console.log("create-user endpoint hit")
})

export { userRouter }