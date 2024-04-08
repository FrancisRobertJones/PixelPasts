export class Auth {
    constructor(
        public loggedIn: boolean,
        public logOut: () => void,
        public logIn: () => void
    ){}
}