import fs from 'fs/promises'
import path from 'path'
import { IUser } from '../models/userInterfaces'
import { USER_DATA_FILE_PATH } from '../constants/userDataFilePath'


export const createNewUser = async (users: IUser[]) => {
    await fs.writeFile(USER_DATA_FILE_PATH, JSON.stringify(users, null, 2), "utf-8")
}