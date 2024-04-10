    import { AuthResponse, AuthState } from "../models/auth";
    import { User } from "../models/user";

    export interface IAuthAction {
        type: AuthActionType;
        payload: AuthResponse
    }

    export enum AuthActionType {
        LOGIN,
        LOGOUT,
    }


    export const AuthReducer = (state: AuthState, action: IAuthAction) => {
        switch (action.type) {
            case AuthActionType.LOGIN:
                return new AuthState(true, action.payload.user)
            case AuthActionType.LOGOUT:
                return new AuthState(false, null)
            default: return new AuthState(false, null)
        }
    }