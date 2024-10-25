import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectUsersPageSize = (state: StateSchema) => state.users.pageSize;
