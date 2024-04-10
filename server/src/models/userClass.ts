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
        public line1: string,
        public state: string,
        public postal_code: string,
    ){}
}

export { User, Address }