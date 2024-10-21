import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LocalUser, localUserActions } from 'entities/LocalUser';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    LocalUser,
    LoginByUsernameProps,
    {rejectValue: string}
>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<LocalUser>(
                'https://dummyjson.com/auth/login',
                authData,
            );

            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(localUserActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('Failed to auth, check username and password');
        }
    },
);
