import { IUser } from "../models/userInterfaces"
import fs from "fs/promises"
import path from 'path'
import { USER_DATA_FILE_PATH } from "../constants/userDataFilePath"



export const fetchUsers = async () => {
    const data = await fs.readFile(USER_DATA_FILE_PATH, "utf-8")
    const users: IUser[] = JSON.parse(data)
    return users
}