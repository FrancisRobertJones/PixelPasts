class User {
    constructor(
        public ID: string,
        public email: string,
        public name: string,
        public password: string,
        public address: Address
    ){}
}

class Address {
    constructor(
        public city: string,
        public country: string,
        public address: string,
        public postcode: string,
        public state: string
    ){}
}

export { User, Address }