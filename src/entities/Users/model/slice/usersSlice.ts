import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UsersSchema } from 'entities/Users';
import { fetchUsers } from 'entities/Users/model/service/fetchUsers/fetchUsers';

const initialState: UsersSchema = {
    error: null,
    isLoading: false,
    data: [],
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action:PayloadAction<User[]>) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = null;
        });
        builder.addCase(fetchUsers.rejected, (state, action:PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: usersActions, reducer: usersReducer } = usersSlice;
