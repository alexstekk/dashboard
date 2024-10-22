import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectUsersState = (state: StateSchema) => state.users;
