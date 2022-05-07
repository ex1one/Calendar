import axios from 'axios';
import { EAuthActionTypes } from './types';
import { IUser } from '../../../models/IUser';
import { AppDispatch } from '../../index';

export const login = (username: string, password: string | number) => (dispatch: AppDispatch) => {
  dispatch({ type: EAuthActionTypes.SET_IS_LOADING, payload: true });
  setTimeout(() => {
    const response = axios.get<IUser[]>('./users.json');
    response
      .then((resolve) => {
        const mockUser = resolve.data.find((user) => user.username === username && user.password === password);
        if (mockUser) {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('username', mockUser.username);
          dispatch({ type: EAuthActionTypes.SET_AUTH, payload: true });
          dispatch({ type: EAuthActionTypes.SET_USER, payload: mockUser });
        } else {
          dispatch({ type: EAuthActionTypes.SET_ERROR, payload: 'Некорректный логин или пароль' });
        }
      })
      .catch((error) => {
        console.log('Ошибка', error);
      });
    dispatch({ type: EAuthActionTypes.SET_IS_LOADING, payload: false });
  }, 1000);
};
export const logout = () => (dispatch: AppDispatch) => {
  localStorage.removeItem('auth');
  localStorage.removeItem('username');
  dispatch({ type: EAuthActionTypes.SET_USER, payload: ({} as IUser) });
  dispatch({ type: EAuthActionTypes.SET_AUTH, payload: false });
};
