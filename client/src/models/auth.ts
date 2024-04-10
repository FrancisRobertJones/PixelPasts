import { User } from "./user";

export class AuthState {
    constructor(
        public loggedIn: boolean,
        public User: User | null
    ){}
}

export interface AuthResponse {
    isAuthenticated: boolean,
    user: User | null
}