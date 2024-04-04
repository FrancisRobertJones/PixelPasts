import { json } from "body-parser";
import { NextFunction, Response, Request } from "express";
import fs from "fs/promises"
import path from "path"


const createUser = async (request: Request, response: Response, next: NextFunction) => {
    const filePath = path.resolve(__dirname, "../data/users.json")
    const data = await fs.readFile(filePath, "utf-8")
    const users = JSON.parse(data)


    const newUserData = request.body

    try {
        users.push(newUserData)
        await fs.writeFile(filePath, JSON.stringify(users, null, 2), "utf-8")
        console.log("new user updated successfully")
        response.status(200).json(users)
    } catch (error) {
        console.log("error writing new user " + error)
        response.status(500).json({error: "an error occured"})
    }
}

export { createUser }