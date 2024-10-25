import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/provides/StoreProvider';
import { User } from '../../types/Users';

export const fetchUsers = createAsyncThunk<{
    total: number;
    users: User[];
},
    void,
        {rejectValue: string,
        extra: ThunkExtraArg,
    }
>(
    'users/fetchUsers',
    async (_, { dispatch, rejectWithValue, extra: { api } }) => {
        try {
            const response = await api.get('users?limit=0');
            return { total: response.data.total, users: response.data.users };
        } catch (e) {
            console.log(e);
            return rejectWithValue('Failed to fetch users');
        }
    },
);
