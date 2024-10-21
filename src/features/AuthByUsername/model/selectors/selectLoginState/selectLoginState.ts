import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectLoginState = (state: StateSchema) => state.loginForm;
