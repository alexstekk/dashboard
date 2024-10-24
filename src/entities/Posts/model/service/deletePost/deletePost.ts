import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from 'entities/Posts/model/types/Post';
import { ThunkExtraArg } from 'app/provides/StoreProvider';

export const deletePost = createAsyncThunk<
Post,
    number,
    { rejectValue: string,
        extra: ThunkExtraArg
    }
>(
    'posts/deletePost',
    async (id, { rejectWithValue, extra: { api } }) => {
        try {
            const response = await api.delete(`/posts/${id}`);
            return response.data.id;
        } catch (e) {
            console.log(e);
            return rejectWithValue('Failed to delete post');
        }
    },
);
