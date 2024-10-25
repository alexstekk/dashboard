import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectUsersTotal = (state: StateSchema) => state.users.total;
