import axios from "axios";
import { AppDispatch } from "../../index";
import { IUser } from "../../../models/IUser";
import { AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "./types";


export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
    setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: AuthActionEnum.SET_IS_LOADING, payload }),
    setError: (payload: string): SetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload }),

    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            setTimeout(async () => {
                const response = await axios.get<IUser[]>('./users.json');
                const user = response.data.find(user => user.username === username && user.password === password);
                if (user) {
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('user', user.username);
                    dispatch(AuthActionCreators.setIsAuth(true));
                    dispatch(AuthActionCreators.setUser(user));
                }
                else {
                    dispatch(AuthActionCreators.setError('Некорректное имя пользователя или пароль.'));
                }
                dispatch(AuthActionCreators.setIsLoading(false));
            }, 500)
        } catch (err) {
            dispatch(AuthActionCreators.setError('Ошибка при логине'));
        }
    },

    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth');
        localStorage.removeItem('user');
        dispatch(AuthActionCreators.setUser({} as IUser));
        dispatch(AuthActionCreators.setIsAuth(false));
    }
}