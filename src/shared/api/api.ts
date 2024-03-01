import axios from 'axios';
import { __API__, USER_LOCAL_STORAGE_KEY } from '../constants';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY),
  },
});
