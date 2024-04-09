import { Dispatch, createContext } from "react";
import { IAuthAction } from "../reducers/authReducer";

export interface IAuthContext {
    isLoggedIn: boolean,
    dispatchAuth: Dispatch<IAuthAction>
    logOut: () => void
}



export const AuthContext = createContext<IAuthContext>({
    isLoggedIn: false,
    logOut: () => {},
    dispatchAuth: () => {}
})