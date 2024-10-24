import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/provides/StoreProvider';
import { User } from 'entities/Users';

export const deleteUser = createAsyncThunk<User,
    any,
    {rejectValue: string,
        extra: ThunkExtraArg,
    }
>(
    'users/deleteUser',
    async (id, { rejectWithValue, extra: { api } }) => {
        try {
            const response = await api.delete(`users/${id}`);
            return response.data;
        } catch (e) {
            return rejectWithValue('Failed to update user');
        }
    },
);
