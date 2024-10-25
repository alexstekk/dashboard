import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductsSchema } from 'entities/Products/model/types/Product';
import { fetchProducts } from 'entities/Products/model/service/fetchProducts/fetchProducts';

const initialState: ProductsSchema = {
    data: [],
    error: null,
    isLoading: false,
    pageNumber: 1,
    pageSize: 10,
    total: 0,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.pageNumber = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload.products;
            state.total = action.payload.total;
            state.error = null;
        });
        builder.addCase(fetchProducts.rejected, (state, action:PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: productsActions, reducer: productsReducer } = productsSlice;
