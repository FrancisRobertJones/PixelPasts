import { IServicePointData, ServicePoint } from "./servicePoint"

interface IUser {
    email: string,
    name: string,
    password: string,
    address: IAddress,
    servicePoint?: ServicePoint

}

interface IAddress {
    country: string,
    line1: string,
    postal_code: string,
    state: string
}


export { IUser, IAddress }