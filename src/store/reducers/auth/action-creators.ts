import {
  EAuthActionTypes, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction,
} from './types';
import { IUser } from '../../../models/IUser';
import { AppDispatch } from '../../index';
import UserService from '../../../API/UserService';

const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({ type: EAuthActionTypes.SET_USER, payload: user }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: EAuthActionTypes.SET_IS_LOADING, payload }),
  setError: (payload: string): SetErrorAction => ({ type: EAuthActionTypes.SET_ERROR, payload }),
  setIsAuth: (auth: boolean): SetAuthAction => ({ type: EAuthActionTypes.SET_AUTH, payload: auth }),
  login: (username: string, password: string | number) => (dispatch: AppDispatch) => {
    dispatch({ type: EAuthActionTypes.SET_IS_LOADING, payload: true });
    setTimeout(() => {
      const response = UserService.getUsers();
      response
        .then((resolve) => {
          const mockUser = resolve.data.find((user) => user.username === username && user.password === password);
          if (mockUser) {
            localStorage.setItem('auth', 'true');
            localStorage.setItem('username', mockUser.username);
            dispatch(AuthActionCreators.setIsAuth(true));
            dispatch(AuthActionCreators.setUser(mockUser));
          } else {
            dispatch(AuthActionCreators.setError('Некорректный логин или пароль'));
          }
        })
        .catch((error) => {
          console.log('Ошибка', error);
        });
      dispatch(AuthActionCreators.setIsLoading(false));
    }, 1000);
  },
  logout: () => (dispatch: AppDispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false));
  },
};

export default AuthActionCreators;
