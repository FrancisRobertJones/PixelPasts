import { Response } from "express"
import { IUser } from "../../models/userInterfaces"

export const checkIfUserExists = (users: IUser[], email: string, response: Response) => {
    if (users.find(user => user.email === email)) {
        console.log("this user exists")
        return response.status(400).json("this user already exists")
    }
}