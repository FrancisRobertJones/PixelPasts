import { Dispatch, createContext } from "react";
import { IAuthAction } from "../reducers/authReducer";
import { User } from "../models/user";
import { AuthState } from "../models/auth";

export interface IAuthContext {
    authedUser: AuthState,
    dispatchAuth: Dispatch<IAuthAction>,
    logOut: () => void,
    checkAuth: () => void
}



export const AuthContext = createContext<IAuthContext>({
    authedUser: new AuthState(false, null),
    logOut: () => {},
    dispatchAuth: () => {},
    checkAuth: () => {}
})