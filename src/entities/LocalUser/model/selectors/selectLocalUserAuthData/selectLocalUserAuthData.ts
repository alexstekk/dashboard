import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectLocalUserAuthData = (state: StateSchema) => state.localUser.authData;
