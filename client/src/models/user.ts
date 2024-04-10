import { CartItemForStripe } from "./products";

export class User {
    constructor(
        public ID: string,
        public email: string,
        public name: string,
        public password: string,
        public address: Address
    ){}
}

export class Address {
    constructor(
        public country: string,
        public line1: string,
        public postal_code: string,
        public state: string
    ){}
}

export class PasswordsComparison {
    constructor(
        public password1: string,
        public password2: string,
        public passwordsMatch: boolean,
        public passwordLengthWarning: boolean
    ){}
}

export class UserCredentials {
    constructor(
        public email: string,
        public password: string
    ){}
}

export class OrderData {
    constructor(
        public UserData: User | null,
        public cartItemsForStripe: CartItemForStripe[] | null
    ){}
}