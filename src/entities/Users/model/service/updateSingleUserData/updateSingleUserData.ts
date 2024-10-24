import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/provides/StoreProvider';
import { User } from 'entities/Users';
import { UpdateUserSchema } from 'entities/Users/model/types/Users';

export const updateSingleUserData = createAsyncThunk<User,
    UpdateUserSchema,
    {rejectValue: string,
        extra: ThunkExtraArg,
    }
>(
    'users/updateSingleUserData',
    async ({ id, data }, { rejectWithValue, extra: { api } }) => {
        try {
            const response = await api.patch(`users/${id}`, data);
            return response.data;
        } catch (e) {
            return rejectWithValue('Failed to update user');
        }
    },
);
