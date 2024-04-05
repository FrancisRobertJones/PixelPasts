interface IUser {
    email: string,
    name: string,
    password: string,
    address: IAddress
}

interface IAddress {
    city: string,
    country: string,
    address: string,
    postcode: string,
    state: string
}


export { IUser, IAddress }