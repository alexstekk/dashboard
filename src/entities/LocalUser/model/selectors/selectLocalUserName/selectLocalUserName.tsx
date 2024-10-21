import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectLocalUserName = (state: StateSchema) => state.localUser.authData.firstName;
