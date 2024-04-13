import { IServicePointData } from "./servicePoint";

class User {
    constructor(
        public ID: string,
        public email: string,
        public name: string,
        public password: string,
        public address: Address,
        public servicePoint?: IServicePointData
    ){}
}

 class Address {
    constructor(
        public country: string,
        public line1: string,
        public state: string,
        public postal_code: string,
    ){}
}

export { User, Address }