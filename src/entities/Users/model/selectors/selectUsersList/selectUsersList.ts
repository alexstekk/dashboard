import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectUsersList = (state: StateSchema) => state.users.data;
