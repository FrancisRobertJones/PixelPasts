import { NextFunction, Response, Request } from "express";

import { IUser } from "../models/userInterfaces";
import { User } from "../models/userClass";
import bcrypt from "bcrypt"
import { fetchUsers } from "../util/findUsers";
import { saveUsers } from "../util/createNewUser/createUser";
import { v4 as uuidv4 } from 'uuid';
import { createNewStripeCustomer } from "../util/stripe/createCustomerstripe";


const createUser = async (request: Request, response: Response, next: NextFunction) => {
    const users: IUser[] = await fetchUsers()

    const { email, name, password, address } = request.body

    if (users.find(user => user.email === email)) {
        console.log("this user exists")
        response.status(400).json("this user already exists")
        return
    }
    const hashedPassword = await bcrypt.hash(password, 10)

    const customerId = await createNewStripeCustomer(name, email, address)

    if (!customerId) {
        return response.status(500).json({ message: "failed to retrieve customer in stripe ." });
    }

    const updatedUser = new User(customerId, email, name, hashedPassword, address);
    users.push(updatedUser);

    try {
        await saveUsers(users)
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
    const userExists = users.find(user => user.email === email)
    if (!userExists) {
        return response.status(401).json("User or password incorrect")
    }

    if (userExists) {
        const isMatch = await bcrypt.compare(password, userExists.password)
        if (isMatch) {
            request.session ? (request.session.user = userExists) : (request.session = { user: userExists });
            return response.status(200).json("You have been authenticated!")
        } else {
            return response.status(401).json("User or password incorrect")
        }
    }
}

const authCheck = (request: Request, response: Response, next: NextFunction) => {
    if (request.session && request.session.user) {
        const userObjectToFrontend = {...request.session.user, password: ""}
        response.status(201).json({ isAuthenticated: true, user: userObjectToFrontend })
    } else {
        response.status(401).json({ isAuthenticated: false })
    }
}

const logout = (request: Request, response: Response, next: NextFunction) => {
    try {
        request.session = null
        response.status(200).json({ message: "sucessfully logged out" })
    } catch(error) {
        console.log("problem logging out" + error)
    }
}





export { createUser, login, authCheck, logout }