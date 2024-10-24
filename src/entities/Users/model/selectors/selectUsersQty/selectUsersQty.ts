import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectUsersQty = (state: StateSchema) => state.users.data.length;
