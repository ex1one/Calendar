import axios, { AxiosResponse } from 'axios';
import { IUser } from '../models/IUser';

export default class UserService {
  static getUsers(): Promise<AxiosResponse<IUser[]>> {
    return axios.get<IUser[]>('./users.json');
  }
}
