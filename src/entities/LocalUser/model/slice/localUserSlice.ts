import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { LocalUser, LocalUserSchema } from '../types/LocalUser';

const initialState: LocalUserSchema = {};

export const localUserSlice = createSlice({
    name: 'localUser',
    initialState,
    reducers: {
        setAuthData: (state, action:PayloadAction<LocalUser>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const localUser = localStorage.getItem(USER_LOCALSTORAGE_KEY);

            if (localUser) {
                console.log('add user from localstorage');
                state.authData = JSON.parse(localUser);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

export const { actions: localUserActions, reducer: localUserReducer } = localUserSlice;
