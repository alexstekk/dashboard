import { createSlice } from '@reduxjs/toolkit';
import { PostsSchema } from 'entities/Posts/model/types/Post';
import { fetchPosts } from 'entities/Posts/model/service/fetchPosts/fetchPosts';
import { deletePost } from 'entities/Posts/model/service/deletePost/deletePost';

const initialState: PostsSchema = {
    data: [],
    error: null,
    isLoading: false,
    pageNumber: 1,
    pageSize: 10,
    total: 0,
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPageNumber: (state, action) => {
            state.pageNumber = action.payload;
        },
    },
    extraReducers: (builder) => builder
        .addCase(fetchPosts.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload.posts;
            state.total = action.payload.total;
            state.error = null;
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(deletePost.fulfilled, (state, action) => {
            state.data = state.data.filter((post) => Number(post.id) !== Number(action.payload));
        }),

});

export const { actions: postsActions, reducer: postsReducer } = postsSlice;
