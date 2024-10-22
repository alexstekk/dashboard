import { createAsyncThunk } from '@reduxjs/toolkit';
import { LocalUser, localUserActions } from 'entities/LocalUser';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ThunkExtraArg } from 'app/provides/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    LocalUser,
    LoginByUsernameProps,
    {rejectValue: string,
    extra: ThunkExtraArg,
    }
>(
    'login/loginByUsername',
    async (authData, { dispatch, rejectWithValue, extra: { api } }) => {
        try {
            const response = await api.post<LocalUser>(
                'auth/login',
                authData,
            );

            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(localUserActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('Failed to auth, check username and password');
        }
    },
);
