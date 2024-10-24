import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUsername/model/types/LoginSchema';
import { loginByUsername } from 'features/AuthByUsername/model/services/LoginByUsername/LoginByUsername';

const initialState: LoginSchema = {
    username: '',
    password: '',
    error: null,
    isLoading: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        clearFormData: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUsername.pending, (state, action) => {
            state.error = null;
            state.isLoading = true;
        });
        builder.addCase(loginByUsername.fulfilled, (state, action) => {
            state.error = null;
            state.isLoading = false;
        });
        builder.addCase(loginByUsername.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
