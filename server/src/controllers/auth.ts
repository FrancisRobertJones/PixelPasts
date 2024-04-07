import { NextFunction, Response, Request } from "express";

import { IUser } from "../models/userInterfaces";
import { User } from "../models/userClass";
import bcrypt from "bcrypt"
import { fetchUsers } from "../util/findUsers";
import { createNewUser } from "../util/createNewUser/createUser";
import { v4 as uuidv4 } from 'uuid';


const createUser = async (request: Request, response: Response, next: NextFunction) => {
    const users: IUser[] = await fetchUsers()

    const { email, name, password, address } = request.body

    if (users.find(user => user.email === email)) {
        console.log("this user exists")
        response.status(400).json("this user already exists")
        return
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const uniqueID = uuidv4()
    const updatedUser = new User(uniqueID, email, name, hashedPassword, address)

    users.push(updatedUser)

    try {
        await createNewUser(users)
        console.log("new user updated successfully")
        response.status(201).json(users)
    } catch (error) {
        console.log("error writing new user " + error)
        response.status(500).json({ error: "an error occured" })
    }
}


const login = async (request: Request, response: Response, next: NextFunction) => {
    const { email, password } = request.body
    const users: IUser[] = await fetchUsers()
    const userExists =  users.find(user => user.email === email)
    if (!userExists) {
       return response.status(401).json("User or password incorrect")
    }

    if (userExists) {
        const isMatch = await bcrypt.compare(password, userExists.password)
        if (isMatch) {
            request.session ? (request.session.user = userExists): (request.session = { user: userExists });
            return response.status(200).json("You have been authenticated!")
        } else {
            return response.status(401).json("User or password incorrect")
        }
    }
}





export { createUser, login }