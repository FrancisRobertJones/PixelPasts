import { NextFunction } from "express"
import { Request, Response } from "express-serve-static-core"
import { IServicePointData, ServicePoint } from "../models/servicePoint"
import { fetchUsers } from "../util/findUsers"
import { IUser } from "../models/userInterfaces"
import { User } from "../models/userClass"
import { saveUsers } from "../util/createNewUser/createUser"

const updateServicePoint = async (request: Request, response: Response, next: NextFunction) => {
    const servicePointData: IServicePointData = request.body
    const userEmail = servicePointData.email
    console.log("this is the user email from reqbody", userEmail)
    const newServicePoint = new ServicePoint(servicePointData.name, servicePointData.servicePointId, servicePointData.visitingAddress)
    try {
        const users: IUser[] = await fetchUsers()
        console.log("users: ", users)
        const userIndexToUpdate = users.findIndex((user) => user.email === userEmail)
        console.log("user index to update: ", userIndexToUpdate)

        if (userIndexToUpdate === -1) {
            return response.status(404).json({ error: "User not found" });
        }
        users[userIndexToUpdate].servicePoint = newServicePoint
        console.log("users updated", users)
        try {
            await saveUsers(users);
            console.log('Users have been updated successfully.');
        } catch (error) {
            console.error('Failed to save users:', error);
        }
        response.status(200).json({"here is the service point": users})
        console.log("here is the service point on server", users)
    } catch (error) {
        response.status(400).json({"problem saving the service point": error})
    }
}

export { updateServicePoint }