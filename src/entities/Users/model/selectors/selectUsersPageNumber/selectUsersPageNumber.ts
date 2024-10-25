import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const selectUsersPageNumber = (state: StateSchema) => state.users.pageNumber;
