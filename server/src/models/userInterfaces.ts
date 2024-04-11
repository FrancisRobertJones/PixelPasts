interface IUser {
    email: string,
    name: string,
    password: string,
    address: IAddress
}

interface IAddress {
    country: string,
    line1: string,
    postal_code: string,
    state: string
}


export { IUser, IAddress }