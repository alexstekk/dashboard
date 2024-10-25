// export const productsApi = createApi({
//     reducerPath: 'products',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
//     endpoints: (builder) => ({
//         fetchAllProducts: builder.query({
//             query: () => ({ url: 'products' }),
//         }),
//         fetchProductById: builder.query<Product, string>({
//             query: (id) => ({ url: `products/${id}` }),
//         }),
//     }),
// });

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/provides/StoreProvider';
import { Product } from 'entities/Products/model/types/Product';

export const fetchProducts = createAsyncThunk<
    {
        products: Product[],
        total: number;
    },
    void,
    {rejectValue: string,
        extra: ThunkExtraArg,
    }
>(
    'users/fetchProducts',
    async (_, { dispatch, rejectWithValue, extra: { api } }) => {
        try {
            const response = await api.get('products?limit=0');
            return { products: response.data.products, total: response.data.total };
        } catch (e) {
            console.log(e);
            return rejectWithValue('Failed to fetch products');
        }
    },
);
