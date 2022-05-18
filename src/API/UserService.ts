import axios from 'axios';
import { IUser } from '../models/IUser';

const getUsers = () => axios.get<IUser[]>('./users.json');

export default getUsers;
