import { createSlice } from '@reduxjs/toolkit';
import { LocalUserSchema } from '../types/LocalUser';

const initialState: LocalUserSchema = {};

export const localUserSlice = createSlice({
    name: 'localUser',
    initialState,
    reducers: {},
});

export const { actions: localUserActions, reducer: localUserReducer } = localUserSlice;
