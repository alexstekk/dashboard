import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export function createReduxStore(initState? :StateSchema) {
    return configureStore<StateSchema>({
        reducer: {

        },
    });
}
