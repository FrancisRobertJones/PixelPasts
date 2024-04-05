import { NextFunction, Response, Request } from "express";
import fs from "fs/promises"
import path from "path"
import { IUser } from "../models/userInterfaces";
import { User } from "../models/userClass";
import bcrypt from "bcrypt"
import { fetchUsers } from "../util/findUsers";
import { createNewUser } from "../util/createUser";



const createUser = async (request: Request, response: Response, next: NextFunction) => {
    const users:IUser[] = await fetchUsers()

    const { email, name, password, address } = request.body

    if (users.find(user => user.email === email)) {
        console.log("this user exists")
        return response.status(400).json("this user already exists")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const updatedUser = new User(email, name, hashedPassword, address)

    users.push(updatedUser)

    try {
        await createNewUser(users)
        console.log("new user updated successfully")
        response.status(201).json(users).json(updatedUser)
    } catch (error) {
        console.log("error writing new user " + error)
        response.status(500).json({ error: "an error occured" })
    }
}

export { createUser }