import { AuthAction, EAuthActionTypes, AuthState } from './types';
import { IUser } from '../../../models/IUser';

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser,
  error: '',
  isLoading: false,
};

export default function authReducer(state = initialState, action: AuthAction) {
  switch (action.type) {
    case EAuthActionTypes.SET_AUTH:
      return { ...state, isAuth: action.payload };
    case EAuthActionTypes.SET_USER:
      return { ...state, user: action.payload };
    case EAuthActionTypes.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case EAuthActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
