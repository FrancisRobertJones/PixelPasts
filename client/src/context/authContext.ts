import { createContext } from "react";

export interface IAuthContext {
    isLoggedIn: boolean,
    loggedInStatus: (status: boolean) => void
    logOut: () => void
    logIn: () => void
}



export const AuthContext = createContext<IAuthContext>({
    isLoggedIn: false,
    loggedInStatus: (status: boolean) => {},
    logOut: () => {},
    logIn: () => {}
})