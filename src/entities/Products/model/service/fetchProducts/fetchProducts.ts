import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from 'entities/Products/model/types/Product';

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        fetchAllProducts: builder.query({
            query: () => ({ url: 'products' }),
        }),
        fetchProductById: builder.query<Product, string>({
            query: (id) => ({ url: `products/${id}` }),
        }),
    }),
});
