import { Provider } from 'react-redux';
import { createReduxStore } from 'app/provides/StoreProvider/config/store';
import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';
import { ReactNode } from 'react';

interface StoreProviderProps {
    children?: ReactNode;
    initState?: StateSchema;
}

export const StoreProvider = ({ children, initState }: StoreProviderProps) => {
    const store = createReduxStore(initState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
