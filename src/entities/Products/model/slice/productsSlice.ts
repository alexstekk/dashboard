import { createSlice } from '@reduxjs/toolkit';
import { ProductsSchema } from 'entities/Products/model/types/Product';

const initialState: ProductsSchema = {
    data: [],
    error: null,
    isLoading: false,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {},
});
