export interface AuthState {
    isAuth: boolean;
}

export enum AuthActionEnum {
    SET_AUTH = 'SET_AUTH',
    SET_USER = 'SET_USER',
    SET_ERROR = 'SET_ERROR',
    SET_LOADING = 'SET_LOADING'
}

interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean;
}

// interface SetUserAction{
//     type:;
//     payload:;
// }

export type AuthAction = SetAuthAction