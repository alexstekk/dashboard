import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { localUserReducer } from 'entities/LocalUser';
import { loginReducer } from 'features/AuthByUsername';
import { $api } from 'shared/api/api';
import { usersReducer } from 'entities/Users';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        localUser: localUserReducer,
        loginForm: loginReducer,
        users: usersReducer,
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
        }),
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
