import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UsersSchema } from 'entities/Users';
import { fetchUsers } from 'entities/Users/model/service/fetchUsers/fetchUsers';
import { updateSingleUserData } from 'entities/Users/model/service/updateSingleUserData/updateSingleUserData';
import { deleteUser } from 'entities/Users/model/service/deleteUser/deleteUser';

const initialState: UsersSchema = {
    error: null,
    isLoading: false,
    formData: {
        firstName: '',
        lastName: '',
        phone: '',
    },
    data: [],
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setFormDataFirstname: (state, action) => {
            state.formData.firstName = action.payload;
        },
        setFormDataForUser: (state, action) => {
            state.formData = { ...action.payload };
        },
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
        builder.addCase(updateSingleUserData.fulfilled, (state, action:PayloadAction<User>) => {
            const userIndex = state.data.findIndex((user) => Number(user.id) === Number(action.payload.id));
            state.data[userIndex] = { ...action.payload };
        });
        builder.addCase(deleteUser.fulfilled, (state, action:PayloadAction<User>) => {
            state.data = state.data.filter((user) => user.id !== action.payload.id);
        });
    },
});

export const { actions: usersActions, reducer: usersReducer } = usersSlice;
