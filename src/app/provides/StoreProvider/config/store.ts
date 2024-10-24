import { configureStore } from '@reduxjs/toolkit';
import { localUserReducer } from 'entities/LocalUser';
import { loginReducer } from 'features/AuthByUsername';
import { $api } from 'shared/api/api';
import { usersReducer } from 'entities/Users';
import { postsReducer } from 'entities/Posts/model/slice/postsSlice';
import { productsApi } from 'entities/Products/model/service/fetchProducts/fetchProducts';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer = {
        localUser: localUserReducer,
        loginForm: loginReducer,
        users: usersReducer,
        posts: postsReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    };

    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                },
            },
        }).concat(productsApi.middleware),
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
