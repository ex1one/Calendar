import { IUser } from '../../../models/IUser';

export interface IAuthState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
}

export enum EAuthActionTypes {
  SET_AUTH = 'SET_AUTH',
  SET_USER = 'SET_USER',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_ERROR = 'SET_ERROR',
}

export interface ISetAuthAction {
  type: EAuthActionTypes.SET_AUTH;
  payload: boolean;
}

export interface ISetUserAction {
  type: EAuthActionTypes.SET_USER;
  payload: IUser;
}

export interface ISetIsLoadingAction {
  type: EAuthActionTypes.SET_IS_LOADING;
  payload: boolean;
}

export interface ISetErrorAction {
  type: EAuthActionTypes.SET_ERROR;
  payload: string;
}

export type TAuthAction =
    ISetAuthAction |
    ISetUserAction |
    ISetIsLoadingAction |
    ISetErrorAction;
