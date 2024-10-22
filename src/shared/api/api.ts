import axios, { AxiosInstance } from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

export const $api = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        autorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
    },
});
