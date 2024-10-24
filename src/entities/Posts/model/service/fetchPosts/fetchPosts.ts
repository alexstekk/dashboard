import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/provides/StoreProvider';
import { Post } from 'entities/Posts/model/types/Post';

export const fetchPosts = createAsyncThunk<
    Post[],
    void,
    {rejectValue: string,
        extra: ThunkExtraArg,
    }
>(
    'posts/fetchPosts',
    async (_, { rejectWithValue, extra: { api } }) => {
        try {
            const response = await api.get('posts?limit=100');
            return response.data.posts;
        } catch (e) {
            console.log(e);
            return rejectWithValue('Failed to fetch posts');
        }
    },
);
