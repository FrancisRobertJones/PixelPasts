import express, { Request, Response, NextFunction } from "express";
import { createUser, login, authCheck, logout } from "../controllers/auth";
import { updateServicePoint } from "../controllers/servicePoint";

const authRouter = express.Router()


authRouter.post("/create-user", createUser, (request: Request, res: Response, next: NextFunction) => {
    console.log("create-user endpoint hit")
})

authRouter.post("/login", login, (request: Request, res: Response, next: NextFunction) => {
    console.log("login-user endpoint hit")
})

authRouter.get("/auth-check", authCheck, (request: Request, res: Response, next: NextFunction) => {
    console.log("auth-check endpoint hit")
})

authRouter.get("/logout", logout, (request: Request, res: Response, next: NextFunction) => {
    console.log("logout endpoint hit")
})

authRouter.post("/servicepoint", updateServicePoint)

export { authRouter }