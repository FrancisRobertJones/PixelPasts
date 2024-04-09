export interface IAuthAction {
    type: AuthActionType;
    payload: boolean
}

export enum AuthActionType {
    LOGIN,
    LOGOUT,
}

export const AuthReducer = (isLoggedIn: boolean, action: IAuthAction) => {
    switch (action.type){
        case AuthActionType.LOGIN:
        return true
        case AuthActionType.LOGOUT:
        return false
        default:  return isLoggedIn
    } 
}