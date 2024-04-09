export interface IAction {
    type: ActionType;
    payload: boolean
}

export enum ActionType {
    LOGIN,
    LOGOUT,
}

export const AuthReducer = (isLoggedIn: boolean, action: IAction) => {
    switch (action.type){
        case ActionType.LOGIN:
        return true
        case ActionType.LOGOUT:
        return false
        default:  return isLoggedIn
    } 
}