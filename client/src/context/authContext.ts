import { Dispatch, createContext } from "react";
import { IAction } from "../reducers/authReducer";

export interface IAuthContext {
    isLoggedIn: boolean,
    dispatch: Dispatch<IAction>
    logOut: () => void
}



export const AuthContext = createContext<IAuthContext>({
    isLoggedIn: false,
    logOut: () => {},
    dispatch: () => {}
})